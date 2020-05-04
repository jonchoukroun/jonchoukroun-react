import React, { FC, useState, ChangeEvent } from "react";
import { default as Window } from "../window/Window";
import { default as WelcomeScreen } from "./WelcomeScreen";

import { AddressBar, PageViewer } from "./styles";

import $ from "jquery";

interface IFormProps {
    onSubmitInput: (_: any) => void;
}

enum RejectionReason {
    SnapshotTooRecent,
    StatusNotOK,
    Unavailable,
    InvalidResponsePayload,
}

interface SnapshotResult {
    result: "Success" | "Failed";
    snapshotUrl?: string;
    reason?: RejectionReason;
}

interface SnapshotResponse {
    available: string;
    url: string;
    timestamp: string;
    status: string;
}

const DEFAULT_TIMESTAMP = 1999;
const DEFAULT_MAX_YEAR = 2007;

function validateUrl(json: any, maxYear: number): SnapshotResult {
    if (!json["archived_snapshots"])
        return {
            result: "Failed",
            reason: RejectionReason.InvalidResponsePayload,
        };

    const snapshots = json["archived_snapshots"];
    if (!snapshots["closest"])
        return { result: "Failed", reason: RejectionReason.Unavailable };

    const snapshot: SnapshotResponse = snapshots["closest"];
    const year = parseInt(snapshot.timestamp.slice(0, 4));

    let reason: RejectionReason | null = null;
    if (!snapshot.available) reason = RejectionReason.Unavailable;
    if (snapshot.status !== "200") reason = RejectionReason.StatusNotOK;
    if (year >= maxYear) reason = RejectionReason.SnapshotTooRecent;
    if (reason !== null) {
        return { result: "Failed", reason: reason };
    }

    return { result: "Success", snapshotUrl: snapshot.url };
}

function handleFailedRequest(
    originalUrl: string,
    failure: RejectionReason = RejectionReason.InvalidResponsePayload,
    maxYear: number
) {
    const error = document.createElement("h1");
    switch (failure) {
        case RejectionReason.SnapshotTooRecent:
            if (maxYear < 2020) {
                fetchUrl(originalUrl, DEFAULT_MAX_YEAR, 2020);
                return;
            }

            error.innerText = "That doesn't exist yet.";
            break;

        case RejectionReason.StatusNotOK || RejectionReason.Unavailable:
            error.innerText = "Can't GET that address.";
            break;

        case RejectionReason.InvalidResponsePayload:
            error.innerText = "Something went wrong.";
            break;
    }

    const container = document.getElementById("page-viewer");
    if (container) container.appendChild(error);
}

async function fetchUrl(
    url: string,
    timestamp = DEFAULT_TIMESTAMP,
    maxYear = DEFAULT_MAX_YEAR
) {
    // First clear browser
    const welcomeScreen = document.getElementById("welcome-screen");
    if (welcomeScreen) welcomeScreen.remove();
    const oldFrame = document.querySelector("#page-viewer iframe");
    if (oldFrame) oldFrame.remove();

    // Check Availability
    const endpoint = `http://archive.org/wayback/available`;
    const response = await $.getJSON(
        `${endpoint}?url=${url}&timestamp=${timestamp}&callback=?`
    );
    const { result, snapshotUrl, reason } = validateUrl(response, maxYear);
    if (result === "Failed" || !snapshotUrl) {
        // TODO: update to handle failed request
        return handleFailedRequest(url, reason, maxYear);
    }

    // Create iframe of snapshot
    const frame = document.createElement("iframe");
    frame.setAttribute("id", url);
    frame.setAttribute("title", url);
    frame.setAttribute("src", snapshotUrl);

    // Attach frame
    const container = document.getElementById("page-viewer");
    if (container) container.appendChild(frame);
}

const Form: FC<IFormProps> = ({ onSubmitInput }) => {
    const [url, setUrl] = useState("vh1.com");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUrl(event.target.value);
    };

    const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetchUrl(url);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="lycos.com"
                value={url}
                onChange={handleChange}
            />
        </form>
    );
};

const Browser: FC = () => {
    return (
        <Window title="Internet" shouldMinimize={true} shouldClose={true}>
            <AddressBar>
                <p>Address</p>
                <Form onSubmitInput={fetchUrl} />
            </AddressBar>
            <PageViewer id="page-viewer">
                <WelcomeScreen />
            </PageViewer>
        </Window>
    );
};

export default Browser;

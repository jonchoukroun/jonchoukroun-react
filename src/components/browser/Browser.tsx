import React, { FC, useState, ChangeEvent } from "react";
import { default as Window } from "../window/Window";

import styled, { css } from "styled-components";

interface IFormProps {
    onSubmitInput: (_: any) => void;
}

interface IFrameProps {
    title: string;
    url: string;
}

const AddressBar = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;
        margin: 0;
        padding: 10px;
        border: ${theme.border.line};
        border-radius: ${theme.border.radius};
        border-top-color: ${theme.colors.white};
        border-bottom-color: ${theme.colors.darkGray};

        p {
            margin: 0;
            text-align: left;
        }

        input {
            margin: 0 10px;
            flex-grow: 1;
        }
    `}
`;

const PageViewer = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        height: 70vh;
        background-color: ${theme.colors.white};

        iframe {
            height: 100%;
        }
    `}
`;

async function fetchUrl(url: string) {
    // Check Availability
    const endpoint = `http://archive.org/wayback/available?url=${url}`;
    const response = await fetch(endpoint, { mode: "no-cors" });
    console.log("!!response", response);

    // Select snapshot
    const archiveUrl = `http://web.archive.org/web/2002id_/http://www.${url}`;

    // First remove existing iframe
    const oldFrame = document.querySelector("#page-viewer iframe");
    if (oldFrame) oldFrame.remove();

    // Create iframe of snapshot
    const frame = document.createElement("iframe");
    frame.setAttribute("id", url);
    frame.setAttribute("title", url);
    frame.setAttribute("src", archiveUrl);

    // Attach frame
    const container = document.getElementById("page-viewer");
    if (container) container.appendChild(frame);
}

const Form: FC<IFormProps> = ({ onSubmitInput }) => {
    const [url, setUrl] = useState("lycos.com");

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
            <PageViewer id="page-viewer" />
        </Window>
    );
};

export default Browser;

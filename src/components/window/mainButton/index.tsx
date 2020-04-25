import React, { FC } from "react";
import { Button, DisabledButton } from "./styles";

import styled, { css } from "styled-components";

interface IMainButton {
    text: string;
    action: () => Promise<void>;
    isDisabled?: boolean;
}

const TextContainer = styled.div`
    margin: 2px;
    padding: 2px;
    &:active {
        border: 1px dotted black;
    }
`;

const DisabledTextContainer = styled(TextContainer)`
    ${({ theme }) => css`
        color: transparent;
        text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.3),
            0px 0px 0 rgba(135, 135, 135, 0.7);
        &:active {
            border: none;
        }
    `}
`;

function handleKeyPress(match: string, fn: () => {}) {
    window.addEventListener("keypress", (e: KeyboardEvent) => {
        if (e.key === match) fn();
    });
}

const MainButton: FC<IMainButton> = ({ text, action, isDisabled = false }) => {
    const initial = text[0];
    const underlineStyle = {
        textDecoration: "underline",
    };
    const remainder = text.slice(1);

    if (!isDisabled) handleKeyPress(initial, action);

    let button;
    if (isDisabled) {
        button = (
            <DisabledButton disabled={true}>
                <DisabledTextContainer>
                    <span style={underlineStyle}>{initial}</span>
                    {remainder}
                </DisabledTextContainer>
            </DisabledButton>
        );
    } else {
        button = (
            <Button onClick={action}>
                <TextContainer>
                    <span style={underlineStyle}>{initial}</span>
                    {remainder}
                </TextContainer>
            </Button>
        );
    }

    return button;
};

export default MainButton;

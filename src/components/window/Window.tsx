import React, { FC, useState } from "react";

import { default as Header } from "./header/Header";
import { default as InsetImage } from "../InsetImage";
import { default as Button } from "../mainButton/MainButton";
import { WindowContainer, ContentContainer } from "./styles";

import styled from "styled-components";

interface IWindowProps {
    readonly title: string;
    readonly shouldMinimize: boolean;
    readonly shouldClose: boolean;
}

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-grow: 1;
    align-items: center;
`;

const ImageContainer = styled.div`
    margin: 20px auto 40px;
`;

const Window: FC<IWindowProps> = ({ title, shouldMinimize, shouldClose }) => {
    const [imageText, setImageText] = useState("Jon Choukroun | Home");
    const callback = (): Promise<void> => {
        setImageText("Coming soon...");
        return new Promise((res) => res());
    };
    return (
        <WindowContainer>
            <Header
                title={title}
                shouldMinimize={shouldMinimize}
                shouldClose={shouldClose}
            />

            <ContentContainer>
                <ImageContainer>
                    <InsetImage width={640} textOverlay={imageText} />
                </ImageContainer>

                <ButtonContainer>
                    <Button text="OK" action={callback} />
                </ButtonContainer>
            </ContentContainer>
        </WindowContainer>
    );
};

export default Window;

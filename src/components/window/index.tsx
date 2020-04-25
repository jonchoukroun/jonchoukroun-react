import React, { FC } from "react";

import { default as Header } from "./header";
import { default as Picture } from "./picture";
import { default as Button } from "./mainButton";
import { WindowContainer, ContentContainer } from "./styles";

import styled from "styled-components";

interface IWindowProps {
    readonly title: string;
    readonly shouldMinimize: boolean;
    readonly shouldClose: boolean;
}

function callback(): Promise<void> {
    return new Promise((resolve) => resolve(alert("hey nong man")));
}

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-grow: 1;
    align-items: center;
`;

const PictureContainer = styled.div`
    margin: 20px auto 40px;
`;

const Window: FC<IWindowProps> = ({ title, shouldMinimize, shouldClose }) => {
    return (
        <WindowContainer>
            <Header
                title={title}
                shouldMinimize={shouldMinimize}
                shouldClose={shouldClose}
            />

            <ContentContainer>
                <PictureContainer>
                    <Picture width={640} />
                </PictureContainer>

                <ButtonContainer>
                    <Button text="OK" action={callback} />
                    <Button text="Apply" action={callback} isDisabled={true} />
                </ButtonContainer>
            </ContentContainer>
        </WindowContainer>
    );
};

export default Window;

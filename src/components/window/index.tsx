import React, { FC } from 'react';

import { default as Header } from './header';
import { default as Button } from './mainButton';
import { Container } from './styles';

import styled from 'styled-components';

interface IWindowProps {
    readonly title: string;
    readonly shouldMinimize: boolean;
    readonly shouldClose: boolean;
}

function callback(): Promise<void> {
    return new Promise((resolve) => resolve(alert('hey nong man')));
}

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-grow: 1;
    align-items: center;
    margin-top: 200px;
`;

const Window: FC<IWindowProps> = ({ title, shouldMinimize, shouldClose }) => {
    return (
        <Container>
            <Header
                title={title}
                shouldMinimize={shouldMinimize}
                shouldClose={shouldClose}
            />
            <ButtonContainer>
                <Button text="OK" action={callback} />
                <Button text="Cancel" action={callback} />
            </ButtonContainer>
        </Container>
    );
};

export default Window;

import React, { FC } from 'react';
import { Row, Title, HeaderButton } from './styles';

import styled from 'styled-components';

interface IHeaderProps {
    title: string;
    shouldMinimize: boolean;
    shouldClose: boolean;
}

const HeaderButtons = styled.div`
    display: flex;
    flex-direction: row;
    height: auto;
    width: auto;
`;

const Header: FC<IHeaderProps> = ({ title, shouldMinimize, shouldClose }) => {
    return (
        <Row>
            <Title>{title}</Title>
            <HeaderButtons>
                {/* TODO replace buttons with icons */}
                {shouldMinimize ? <HeaderButton>-</HeaderButton> : null}
                {shouldClose ? <HeaderButton>&times;</HeaderButton> : null}
            </HeaderButtons>
        </Row>
    );
};

export default Header;

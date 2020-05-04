import styled, { css } from "styled-components";

interface IWindowContainerProps {
    width: number;
    height: number;
}

export const WindowContainer = styled.div<IWindowContainerProps>`
    display: flex;
    flex-direction: column;
    width: ${(props) => `${props.width}px`};
    height: ${(props) => `${props.height}px`};
    padding: 2px;

    ${({ theme }) => css`
        background-color: ${theme.colors.gray};
        border: ${theme.border.line};
        border-color: ${theme.border.color};
        border-radius: ${theme.border.radius};
        box-shadow: ${theme.defaultDropShadow};
    `}
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin: 2px;
`;

import styled, { css } from "styled-components";

export const WindowContainer = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        /* TODO: remove when implementing minimize & close */
        /* min-width: 200px;
        min-width: 480px; */
        width: 80%;
        height: 80%;
        padding: 2px;
        background-color: ${theme.colors.gray};
        border: ${theme.border.line};
        border-color: ${theme.border.color};
        border-radius: ${theme.border.radius};
        box-shadow: ${theme.defaultDropShadow};
    `}
`;

export const ContentContainer = styled.div`
    height: auto;
    margin: 2px;
`;

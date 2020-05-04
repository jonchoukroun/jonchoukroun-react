import styled, { css } from "styled-components";

export const AddressBar = styled.div`
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

export const PageViewer = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.colors.white};
    `}
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: stretch;

    iframe {
        height: 100%;
    }
`;

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

export const Container = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.colors.gray};
        color: ${theme.colors.black};
    `}
    padding: 5vh 5vw;
    height: 100%;

    h1 {
        margin: 5vh;
        font-size: 6rem;
        font-stretch: condensed;
        text-align: center;
    }

    h3 {
        font-weight: 200;
        strong {
            font-weight: 600;
        }
    }
`;

export const TextContainer = styled.div`
    margin: 40px;
    padding-top: 40px;
`;

export const ThinText = styled.span`
    font-size: 5rem;
    font-weight: 100;
    font-style: italic;
`;

export const ItalicText = styled.span`
    font-weight: 400;
    font-style: italic;
`;

export const Rule = styled.div`
    ${({ theme }) => css`
        border: 2px solid;
        border-radius: 0;
        border-top-color: ${theme.colors.darkGray};
        border-bottom-color: ${theme.colors.lightGray};
        border-left-color: ${theme.colors.darkGray};
        border-right-color: ${theme.colors.lightGray};
    `}

    margin: 50px 0;
`;

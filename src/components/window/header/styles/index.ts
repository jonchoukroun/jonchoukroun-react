import styled, { css } from 'styled-components';

export const Row = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        height: 30px;
        padding: 0px 3px;
        background-color: ${theme.colors.blue};
    `}
`;

export const Title = styled.h4`
    ${({ theme }) => css`
        margin: 0;
        color: ${theme.colors.white};
        font-weight: 500;
        letter-spacing: 1.25px;
    `}
`;

export const HeaderButton = styled.button`
    ${({ theme }) => css`
        height: 22px;
        width: 26px;
        margin: 1px;
        padding: 0 3px;
        background-color: ${theme.colors.gray};
        color: ${theme.colors.black};
        font-family: sans-serif;
        font-weight: 400;
        font-size: 28px;
        line-height: 0;
        border-radius: ${theme.border.radius};
        border: ${theme.border.line};
        border-color: ${theme.border.color};
        box-shadow: ${theme.dropShadow};
    `}
`;

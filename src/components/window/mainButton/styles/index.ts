import styled, { css } from 'styled-components';

export const Button = styled.button`
    ${({ theme }) => css`
        height: 35px;
        width: 150px;
        margin: 1px;
        padding: 0 3px;
        background-color: ${theme.colors.gray};
        color: ${theme.colors.black};
        font-family: sans-serif;
        font-weight: 200;
        font-size: 20px;
        border-radius: ${theme.border.radius};
        border: ${theme.border.line};
        border-color: ${theme.border.color};
        box-shadow: ${theme.dropShadow};
    `}
`;

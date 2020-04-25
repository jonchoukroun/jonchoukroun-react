import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        min-width: 200px;
        height: 480px;
        width: 640px;
        padding: 2px;
        background-color: ${theme.colors.gray};
        border: ${theme.border.line};
        border-color: ${theme.border.color};
        border-radius: ${theme.border.radius};
        box-shadow: ${theme.dropShadow};
    `}
`;

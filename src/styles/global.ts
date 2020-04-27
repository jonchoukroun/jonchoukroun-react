import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
    ${({ theme }) => css`
        html {
            height: 100%;

            body {
                display: flex;
                flex-direction: column;
                flex: 1;
                height: 100%;
                margin: 0;

                #root {
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                    background: ${theme.colors.green};
                    color: ${theme.colors.black};
                    font-family: Tahoma;
                }
            }
        }
    `}
`;

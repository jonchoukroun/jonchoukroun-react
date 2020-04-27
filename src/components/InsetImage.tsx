import React, { FC } from "react";

import styled, { css } from "styled-components";

interface IPictureProps {
    srcUrl?: string;
    width?: number | string;
    height?: number | string;
    textOverlay?: string;
}

const PictureContainer = styled.div`
    ${({ theme }) => css`
        box-shadow: -2px -2px 0px ${theme.colors.darkGray},
            2px 2px 0px ${theme.colors.white};

        /* Temp */
        background: linear-gradient(
            ${theme.colors.white},
            ${theme.colors.blue}
        );
        text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.1),
            -1px -1px 0px rgba(0, 0, 0, 0.5);
        color: transparent;
        padding: 100px 25px;
        text-align: center;

        svg: {
            width: 100%;
        }
    `}
`;

const InsetImage: FC<IPictureProps> = ({
    srcUrl,
    width,
    height,
    textOverlay,
}) => {
    const pictureStyle = {
        width: width || "auto",
        height: height || "auto",
    };
    return (
        <PictureContainer style={pictureStyle}>
            <svg viewBox="0 0 300 24">
                <text textLength="290" lengthAdjust="spacing" x="5" y="15">
                    {textOverlay}
                </text>
            </svg>
        </PictureContainer>
    );
};

export default InsetImage;

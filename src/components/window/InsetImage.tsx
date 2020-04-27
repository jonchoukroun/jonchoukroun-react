import React, { FC } from "react";

import styled, { css } from "styled-components";

interface IPictureProps {
    srcUrl?: string;
    width?: number | string;
    height?: number | string;
}

const PictureContainer = styled.div`
    ${({ theme }) => css`
        min-height: 200px;
        box-shadow: -2px -2px 0px ${theme.colors.darkGray},
            2px 2px 0px ${theme.colors.white};

        /* Temp */
        background: linear-gradient(
            ${theme.colors.white},
            ${theme.colors.blue}
        );
        font-size: 85px;
        text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.1),
            -1px -1px 0px rgba(0, 0, 0, 0.5);
        color: transparent;
        padding: 100px 25px;
        text-align: center;
    `}
`;

const InsetImage: FC<IPictureProps> = ({ srcUrl, width, height }) => {
    const pictureStyle = {
        width: width || "auto",
        height: height || "auto",
    };
    return (
        <PictureContainer style={pictureStyle}>Jon Choukroun</PictureContainer>
    );
};

export default InsetImage;

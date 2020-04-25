import React, { FC } from "react";

import styled from "styled-components";

interface IPictureProps {
    srcUrl?: string;
    width?: number | string;
    height?: number | string;
}

const PictureContainer = styled.div`
    background: linear-gradient(white, blue, black);
    /* min-height: 200px; */
    border: 1px dotted black;
    font-size: 85px;
    text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.1),
        -1px -1px 0px rgba(0, 0, 0, 0.5);
    color: transparent;
    padding: 100px 25px;
    text-align: center;
`;

const Picture: FC<IPictureProps> = ({ srcUrl, width, height }) => {
    const pictureStyle = {
        width: width || "auto",
        height: height || "auto",
    };
    return (
        <PictureContainer style={pictureStyle}>Jon Choukroun</PictureContainer>
    );
};

export default Picture;

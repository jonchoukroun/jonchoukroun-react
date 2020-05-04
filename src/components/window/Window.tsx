import React, { FC, useEffect, useState } from "react";

import { default as Header } from "./header/Header";
import { WindowContainer, ContentContainer } from "./styles";

interface IWindowProps {
    readonly title: string;
    readonly shouldMinimize: boolean;
    readonly shouldClose: boolean;
}

const Window: FC<IWindowProps> = ({
    title,
    shouldMinimize,
    shouldClose,
    children,
}) => {
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth - 8,
        height: window.innerHeight - 8,
    });

    useEffect(() => {
        function handleResize(): void {
            setDimensions({
                width: window.innerWidth - 8,
                height: window.innerHeight - 8,
            });
        }

        window.addEventListener("resize", handleResize);
    });

    return (
        <WindowContainer width={dimensions.width} height={dimensions.height}>
            <Header
                title={title}
                shouldMinimize={shouldMinimize}
                shouldClose={shouldClose}
            />
            <ContentContainer>{children}</ContentContainer>
        </WindowContainer>
    );
};

export default Window;

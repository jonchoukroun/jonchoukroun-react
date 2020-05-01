import React, { FC } from "react";

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
    return (
        <WindowContainer>
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

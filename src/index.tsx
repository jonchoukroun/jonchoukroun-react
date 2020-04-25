import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import { Window } from "./components";
import { unregister } from "./core";
import { GlobalStyles, theme } from "./styles";

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Window title="Welcome" shouldMinimize={false} shouldClose={false} />
    </ThemeProvider>,
    document.getElementById("root")
);

unregister();

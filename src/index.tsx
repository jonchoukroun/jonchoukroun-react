import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import { Browser } from "./components";
import { unregister } from "./serviceWorker";
import { GlobalStyles, theme } from "./styles";

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Browser />
    </ThemeProvider>,
    document.getElementById("root")
);

unregister();

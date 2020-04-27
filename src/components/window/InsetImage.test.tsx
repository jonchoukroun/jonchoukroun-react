import React from "react";
import ReactDOM from "react-dom";
import InsetImage from "./InsetImage";
// import renderer from "react-test-renderer";
// import "jest-styled-components";

import theme from "../../styles/theme";
import { ThemeProvider } from "styled-components";

it("renders successfully", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <ThemeProvider theme={theme}>
            <InsetImage />
        </ThemeProvider>,
        div
    );
});

// it("renders an image", () => {
//     const component = renderer.create(
//         <ThemeProvider theme={theme}>
//             <InsetImage />
//         </ThemeProvider>
//     );

//     const tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
// });

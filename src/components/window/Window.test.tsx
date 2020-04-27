import React from "react";
import * as ReactDOM from "react-dom";
import Window from "./Window";
// import renderer from "react-test-renderer";
// import "jest-styled-components";

import theme from "../../styles/theme";
import { ThemeProvider } from "styled-components";

it("renders successfully", () => {
    const div = document.createElement("div");
    const title = "Hey nong man";
    ReactDOM.render(
        <ThemeProvider theme={theme}>
            <Window title={title} shouldMinimize={true} shouldClose={true} />
        </ThemeProvider>,
        div
    );
});

// it("renders a header", () => {
//     const component = renderer.create(
//         <ThemeProvider theme={theme}>
//             <Window
//                 title={"Hey nong man"}
//                 shouldMinimize={true}
//                 shouldClose={false}
//             />
//         </ThemeProvider>
//     );

//     const tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
// });

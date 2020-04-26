import React from "react";
import Window from "./Window";
import renderer from "react-test-renderer";
import "jest-styled-components";

import theme from "../../styles/theme";
import { ThemeProvider } from "styled-components";

describe("Window component", () => {
    it("renders a header", () => {
        const component = renderer.create(
            <ThemeProvider theme={theme}>
                <Window
                    title={"Hey nong man"}
                    shouldMinimize={true}
                    shouldClose={false}
                />
            </ThemeProvider>
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

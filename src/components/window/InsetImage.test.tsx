import React from "react";
import InsetImage from "./InsetImage";
import renderer from "react-test-renderer";
import "jest-styled-components";

import theme from "../../styles/theme";
import { ThemeProvider } from "styled-components";

describe("Inset image on window", () => {
    it("renders an image", () => {
        const component = renderer.create(
            <ThemeProvider theme={theme}>
                <InsetImage />
            </ThemeProvider>
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

import React from "react";
import InsetImage from "./InsetImage";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import theme from "../styles/theme";
import { ThemeProvider } from "styled-components";

it("renders successfully", () => {
    shallow(
        <ThemeProvider theme={theme}>
            <InsetImage />
        </ThemeProvider>
    );
});

it("renders an image", () => {
    const component = renderer.create(
        <ThemeProvider theme={theme}>
            <InsetImage />
        </ThemeProvider>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

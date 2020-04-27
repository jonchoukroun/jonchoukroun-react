import React from "react";
import Header from "./Header";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import theme from "../../../styles/theme";
import { ThemeProvider } from "styled-components";

const title = "Hey nong man";

it("renders successfully", () => {
    shallow(
        <ThemeProvider theme={theme}>
            <Header title={title} shouldMinimize={true} shouldClose={true} />
        </ThemeProvider>
    );
});

it("renders the title and no buttons", () => {
    const component = renderer.create(
        <ThemeProvider theme={theme}>
            <Header title={title} shouldMinimize={false} shouldClose={false} />
        </ThemeProvider>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders the close button", () => {
    const component = renderer.create(
        <ThemeProvider theme={theme}>
            <Header title={title} shouldMinimize={false} shouldClose={true} />
        </ThemeProvider>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders both buttons", () => {
    const component = renderer.create(
        <ThemeProvider theme={theme}>
            <Header title={title} shouldMinimize={true} shouldClose={true} />
        </ThemeProvider>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

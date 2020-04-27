import React from "react";
import Window from "./Window";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import theme from "../../styles/theme";
import { ThemeProvider } from "styled-components";

it("renders successfully", () => {
    const title = "Hey nong man";
    shallow(
        <ThemeProvider theme={theme}>
            <Window title={title} shouldMinimize={true} shouldClose={true} />
        </ThemeProvider>
    );
});

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

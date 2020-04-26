import React from "react";
import Button from "./MainButton";
import renderer from "react-test-renderer";
import "jest-styled-components";

// import { shallow } from "enzyme";

import theme from "../../../styles/theme";
import { ThemeProvider } from "styled-components";

function emptyCallback(): Promise<void> {
    return new Promise((resolve) => resolve());
}

const title = "flarg";

describe("Main window button", () => {
    it("renders the button text", () => {
        const component = renderer.create(
            <ThemeProvider theme={theme}>
                <Button text={title} action={emptyCallback} />
            </ThemeProvider>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders a disabled button", () => {
        const component = renderer.create(
            <ThemeProvider theme={theme}>
                <Button text={title} action={emptyCallback} isDisabled={true} />
            </ThemeProvider>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    // it("doesn't call the callback when disabled", () => {
    //     const mock = jest.fn().mockName("mockedCallback");

    //     const component = shallow(
    //         <Button text={title} action={mock} isDisabled={true} />
    //     );
    //     component.simulate("click");
    //     expect(mock).not.toHaveBeenCalled();
    // });
});

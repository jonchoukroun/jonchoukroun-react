import React from "react";
import Button from "./MainButton";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import theme from "../../../styles/theme";
import { ThemeProvider } from "styled-components";

function emptyCallback(): Promise<void> {
    return new Promise((resolve) => resolve());
}

const buttonText = "flarg";

it("renders successfully", () => {
    shallow(
        <ThemeProvider theme={theme}>
            <Button
                text={buttonText}
                action={emptyCallback}
                isDisabled={false}
            />
        </ThemeProvider>
    );
});

it("renders the button text", () => {
    const component = renderer.create(
        <ThemeProvider theme={theme}>
            <Button text={buttonText} action={emptyCallback} />
        </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders a disabled button", () => {
    const component = renderer.create(
        <ThemeProvider theme={theme}>
            <Button
                text={buttonText}
                action={emptyCallback}
                isDisabled={true}
            />
        </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it("doesn't call the callback when disabled", () => {
    const mock = jest.fn().mockName("mockedCallback");

    const component = shallow(
        <Button text={buttonText} action={mock} isDisabled={true} />
    );
    component.simulate("click");
    expect(mock).not.toHaveBeenCalled();
});

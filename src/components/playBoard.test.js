import React from "react";
import PlayBoard from "./playBroad";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
const buttonClickFunction = jest.fn();
describe("PlayBoard", () => {
  test("Check whether button click has been called", () => {
    const component = shallow(
      <PlayBoard status={"active"} number={1} onClick={buttonClickFunction} />
    );
    component.find("button").simulate("click");

    expect(component).toMatchSnapshot();
    expect(buttonClickFunction).toHaveBeenCalled();
  });

  test("Check whether no icon displayed when status is none", () => {
    const component = shallow(
      <PlayBoard status={"none"} number={1} onClick={buttonClickFunction} />
    );

    expect(component).toMatchSnapshot();
    expect(component.find("icon")).toEqual({});
  });

  test("Check whether times icon displayed when status is playerOne", () => {
    const component = mount(
      <PlayBoard
        status={"playerOne"}
        number={1}
        onClick={buttonClickFunction}
      />
    );

    expect(component.find("svg").hasClass("fa-times")).toEqual(true);
  });
  test("Check whether circle icon displayed when status is playerTwo", () => {
    const component = mount(
      <PlayBoard
        status={"playerTwo"}
        number={1}
        onClick={buttonClickFunction}
      />
    );

    expect(component.find("svg").hasClass("fa-circle-notch")).toEqual(true);
  });
});

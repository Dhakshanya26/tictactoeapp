import React from "react";
import GameHeader from "./header";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
describe("GameHeader", () => {
  test("Check whether game header is displayed", () => {
    const gameHeader = shallow(<GameHeader />);
    expect(gameHeader).toMatchSnapshot();
    expect(gameHeader.text()).toEqual("Welcome to Noughts and Crosses");
  });
});

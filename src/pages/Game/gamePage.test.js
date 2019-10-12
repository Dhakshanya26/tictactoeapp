import React from "react";
import GamePage from "./gamePage";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
describe("GamePage", () => {
  test("Check whether game header and card displayed", () => {
    const component = shallow(<GamePage />);
    expect(component).toMatchSnapshot();
  });
});

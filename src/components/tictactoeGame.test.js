import React from "react";
import TicTacToeGame from "./tictactoeGame";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
describe("TicTacToeGame", () => {
  test("Check whether game header and card displayed", () => {
    const component = shallow(<TicTacToeGame />);
    expect(component).toMatchSnapshot();
  });
});

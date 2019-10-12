import React from "react";
import PlayAgain from "./playAgain";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
const buttonClickFunction = jest.fn();
describe("PlayAgain", () => {
  test("Check whether button click has been called and Draw notification", () => {
    const component = shallow(
      <PlayAgain
        gameStatus={"draw"}
        winner={"player1"}
        onClick={buttonClickFunction}
      />
    );
    component.find("button").simulate("click");

    expect(component).toMatchSnapshot();
    expect(component.text()).toEqual("The game is Draw.Play Again");
    expect(buttonClickFunction).toHaveBeenCalled();
  });

  test("Check whether winner name is displayed", () => {
    const component = shallow(
      <PlayAgain
        gameStatus={"win"}
        winner={"player1"}
        onClick={buttonClickFunction}
      />
    );
    component.find("button").simulate("click");

    expect(component).toMatchSnapshot();
    expect(component.text()).toEqual(
      "Congratulations! player1 won the game.Play Again"
    );
    expect(buttonClickFunction).toHaveBeenCalled();
  });
});

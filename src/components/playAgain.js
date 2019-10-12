import React from "react";
export const PlayAgain = props => (
  <div className="game-done">
    <h3
      className="message"
      style={{ color: props.gameStatus === "draw" ? "red" : "green" }}
    >
      {props.gameStatus !== "draw"
        ? "Congratulations! " + props.winner + " won the game."
        : "The game is Draw."}
    </h3>
    <br />
    <button onClick={props.onClick} className="btn btn-primary">
      Play Again
    </button>
  </div>
);
export default PlayAgain;

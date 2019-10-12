import React from "react";
import PlayBoard from "./playBroad";
import PlayAgain from "./playAgain";
import useGameState from "../reactHooks/gameStateHooks";
import utils from "../shared/utilities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch, faTimes } from "@fortawesome/free-solid-svg-icons";
const TicTocToeGame = props => {
  const {
    gameStatus,
    setGameState,
    selectedBoxCount,
    setSelectedBoxCount,
    playerOneSelectedNums,
    playerTwoSelectedNums,
    setPlayerOneSelectedNums,
    setPlayerTwoSelectedNums
  } = useGameState();

  const numberStatus = number => {
    if (playerTwoSelectedNums.includes(number)) {
      return "playerTwo";
    }
    if (playerOneSelectedNums.includes(number)) {
      return "playerOne";
    }
    return "none";
  };

  const onNumberClick = (number, currentStatus) => {
    if (gameStatus !== "active" || currentStatus != "none") {
      return;
    }

    var newSelectedBoxCount = Number(selectedBoxCount) + 1;
    setSelectedBoxCount(newSelectedBoxCount);
    if (selectedBoxCount % 2 === 0) {
      const selectedNums = playerTwoSelectedNums.concat(number);
      setPlayerTwoSelectedNums(selectedNums);
      setGameState(selectedNums);
    } else {
      const selectedNums = playerOneSelectedNums.concat(number);
      setPlayerOneSelectedNums(selectedNums);
      setGameState(selectedNums);
    }
  };

  return (
    <>
      <div className="col align-self-center">
        <div className="d-flex justify-content-center mb-3">
          <div
            className={
              gameStatus !== "active"
                ? "playboard-wrapper game-finished"
                : "playboard-wrapper"
            }
          >
            <div className="row">
              {utils.range(1, 9).map(number => (
                <div className="col-4" key={number}>
                  <PlayBoard
                    status={numberStatus(number)}
                    number={number}
                    onClick={onNumberClick}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="col align-self-center">
        {selectedBoxCount === 1 ? (
          <div>
            <h4>Start the game.</h4>
          </div>
        ) : gameStatus === "active" ? (
          <div>
            <h4>Current player is </h4>
          </div>
        ) : (
          ""
        )}
        {gameStatus !== "active" ? (
          <PlayAgain
            onClick={props.startNewGame}
            gameStatus={gameStatus}
            winner={selectedBoxCount % 2 !== 0 ? "Player 2 " : "Player 1"}
          />
        ) : (
          <div>
            <div className="btn-group" role="group" aria-label="Players">
              <a
                className={
                  selectedBoxCount % 2 !== 0
                    ? "btn btn-success avoid-clicks"
                    : "btn btn-outline-secondary avoid-clicks"
                }
              >
                Player 1 - <FontAwesomeIcon icon={faTimes} />
              </a>
              <a
                className={
                  selectedBoxCount % 2 === 0
                    ? "btn btn-success avoid-clicks"
                    : "btn btn-outline-secondary avoid-clicks"
                }
              >
                Player 2 - <FontAwesomeIcon icon={faCircleNotch} />
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TicTocToeGame;

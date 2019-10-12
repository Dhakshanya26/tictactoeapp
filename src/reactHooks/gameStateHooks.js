import utils from "../shared/utilities";
import { useState } from "react";
const useGameState = () => {
  const [availableNums] = utils.range(1, 9);
  const [playerOneSelectedNums, setPlayerOneSelectedNums] = useState([]);
  const [playerTwoSelectedNums, setPlayerTwoSelectedNums] = useState([]);
  const [gameStatus, setGameStatus] = useState("active");
  const [selectedBoxCount, setSelectedBoxCount] = useState(1);

  const setGameState = selectedNumbers => {
    if (utils.checkStatus(selectedNumbers)) {
      setGameStatus("win");
    } else if (selectedBoxCount >= 9) setGameStatus("draw");
    else setGameStatus("active");
  };

  return {
    availableNums,
    gameStatus,
    gameStatus,
    playerOneSelectedNums,
    playerTwoSelectedNums,
    setGameState,
    selectedBoxCount,
    setSelectedBoxCount,
    setPlayerOneSelectedNums,
    setPlayerTwoSelectedNums
  };
};

export default useGameState;

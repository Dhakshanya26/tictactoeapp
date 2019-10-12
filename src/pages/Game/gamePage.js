import React, { useState } from "react";
import "./gamePage.scss";
import TicTocToeGame from "../../components/tictactoeGame";
import GameHeader from "../../components/header";
const GamePage = () => {
  const [gameId, setGameId] = useState(1);
  return (
    <div className="container main-container">
      <GameHeader />
      <div className="card">
        <div className="card-body">
          <div className="row">
            <TicTocToeGame
              key={gameId}
              startNewGame={() => setGameId(gameId + 1)}
              uniqueKey={gameId}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;

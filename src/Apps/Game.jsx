import { useState } from "react";
import "./Game.css";

function Game() {
  const [card, setCard] = useState([
    1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8,
  ]);
  return (
    <div className="game">
      <h2>Найди пары</h2>
      <div>
        {card.map((cardId) => (<img src={`./src/static/img/${cardId}.png`} alt="img" />)) }
      </div>
    </div>
  );
}

function RestartWin() {}

function Card() {}

export default Game;

import { useEffect, useState } from "react";
import "./Game.css";


function Game() {
  const initialCard = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8,];
  const [card, setCard] = useState(initialCard);

  //алг Фишера-Йетса
  function shuffle(arr){
    let j, temp;
    let copy = arr;

    for(var i = copy.length - 1; i > 0; i--){
      j = Math.floor(Math.random()*(i + 1));
      temp = copy[j];
      copy[j] = copy[i];
      copy[i] = temp;
    }
    return copy;
  }

  const [isOpenWindow, setIsOpenWindow] = useState(false);
  const openWin = () => {
    setIsOpenWindow(true);
    setCard(shuffle(card));
  };

  const closeWin = () => {
    setIsOpenWindow(false);
  };

  const restartGame = () => {
    setCard(shuffle(initialCard));
  }

  return (
    <div className="game">
      <button className="modalWindowButton" onClick={openWin}>Начать игру</button>
      <div
        className={`modal-overlay ${isOpenWindow ? "show" : ""}`}
        onClick={closeWin}
      >
        <div
          className={`modal-content ${isOpenWindow ? "show" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <h2>Найди пары</h2>
          <button className='closeButton' onClick={closeWin}> X </button>
          <div className="cardsGrid">
            {card.map((cardId) => (
              <img src={`./src/static/img/${cardId}.png`} alt="img" />
            ))}
          </div>
          <button className="restartGame" onClick={restartGame}>Начать заново</button>
        </div>
      </div>
    </div>
  );
}

export default Game;

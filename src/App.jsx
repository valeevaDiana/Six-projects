import { useState } from "react";
import "./App.css";
import Counter from "./Apps/Counter";
import ModalWindow from "./Apps/ModalWindow";
import Quiz from "./Apps/Quiz";
import Game from "./Apps/Game";

function App() {
  const [currentApp, setCurrentApp] = useState('1');
  const [activeItem, setActiveItem] = useState('1');

  const handleItemClick = (appName) => {
    setCurrentApp(appName);
    setActiveItem(appName);
  };


  const renderApp = () => {
    switch (currentApp) {
      case '1':
        return <Counter />;
        break;
      case '2':
        return <ModalWindow />;
        break;
      case '3':
        return <Quiz />;
        break;
      case '4':
        return <Game />;
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <header>
        <ul className='navigation'>
          <li className={activeItem === '1' ? 'active' : ''} onClick={() => handleItemClick('1')}>Counter</li>
          <li className={activeItem === '2' ? 'active' : ''} onClick={() => handleItemClick('2')}>Modal Window</li>
          <li className={activeItem === '3' ? 'active' : ''} onClick={() => handleItemClick('3')}>Quiz</li>
          <li className={activeItem === '4' ? 'active' : ''} onClick={() => handleItemClick('4')}>Game</li>
          <li className={activeItem === '5' ? 'active' : ''} onClick={() => handleItemClick('5')}>app5</li>
          <li className={activeItem === '6' ? 'active' : ''} onClick={() => handleItemClick('6')}>app6</li>
        </ul>
      </header>
      <main>{renderApp()} </main>
    </div>
  );
}

export default App;

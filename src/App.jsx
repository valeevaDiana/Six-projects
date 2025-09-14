import { useState } from "react";
import "./App.css";
import Counter from "./Apps/Counter";

function App() {
  const [currentApp, setCurrentApp] = useState("1");

  const renderApp = () => {
    switch (currentApp) {
      case "1":
        return <Counter />;
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <header>
        <ul className='navigation'>
          <li onClick={() => setCurrentApp('1')}>Counter</li>
          <li onClick={() => setCurrentApp('2')}>app2</li>
          <li onClick={() => setCurrentApp('3')}>app3</li>
          <li onClick={() => setCurrentApp('4')}>app4</li>
          <li onClick={() => setCurrentApp('5')}>app5</li>
          <li onClick={() => setCurrentApp('6')}>app6</li>
        </ul>
      </header>
      <main>{renderApp()} </main>
    </div>
  );
}

export default App;

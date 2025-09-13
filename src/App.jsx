import { useState } from 'react';
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);

  const onClickPlus = () => {
    setCounter(counter + 1);
  };

  const onClickMinus = () => {
    setCounter(counter - 1);
  };

  return (
    <div className='App'>
      <h2>Counter</h2>
      <h1>{counter}</h1>
      <div>
        <button className='buttonMinus' onClick={onClickMinus}>- Minus</button>
        <button className='buttonPlus' onClick={onClickPlus}>Plus +</button>
      </div>
    </div>
  )
}

export default App

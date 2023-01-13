import './App.css';
import Reorder from './Reorder';
import { useState } from 'react';



function App() {

  const [count, setCount] = useState(3);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function doReorder() {
    setCount(5);
  }

  return (
    <div className="app">
      <p>Your inventory is {count}</p>
      <button onClick={increase}>+</button>
      <button onClick={decrease} disabled={!count}>-</button>
      {count === 0 ? <Reorder onReorder={doReorder} /> : <></>}
    </div>
  );
}

export default App;

import './App.css';
import React, { useState } from 'react';

function App() {

  const [count, setCount] = useState(4);
  const [reward, setReward] = useState('');

  function decrementCount() {
    setCount(prevCount => prevCount - 1) /*prevCount allows you to take prev count and  minus by one as oppoed to count - 1 where count is the number when we render the function, it doesn't change in the function like with prevCount*/

  };

  function incrementCount() {
    setCount(prevCount => prevCount + 1)
  }


  return (
    <div className="App">
      <div className='reward-input'>
        <input placeholder='What do you desire?' onChange={e => setReward(e.target.value)}></input>
        <button>Submit my Desire ❤️</button>
      </div>
      <div className='code-count-input'>
        <h1>How many hours did you code today?</h1>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={incrementCount}>+</button>
      </div>
      <div className='reward-output'>
        <p>{reward}</p>
      </div>
    </div>
  );
}

export default App;

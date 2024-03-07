import './App.css';
import React, { useState } from 'react';
import Form from "./Components/Form"

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
      <Form />
    </div>
  );
}

export default App;

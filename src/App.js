import React, { useState } from 'react';
import './styles.css';

function fetchData() {
  return Promise.resolve();
}

export default function App() {
  const [stateUsername, setStateUsername] = useState('anonymous');
  function handleClick() {
    fetchData().then(() => {
      setStateUsername('aditya');
    });
  }
  return (
    <div className="App">
      <h2>{stateUsername}</h2>
      <button onClick={handleClick}>Load Username</button>
    </div>
  );
}

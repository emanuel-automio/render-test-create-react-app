import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    fetch('https://express-rest-api.onrender.com/users')
    .then(response => response.json())
    .then(response => setResult(response))
    .catch(error => setResult(error));
  }, [])
  return (
    <div className="App">
      {
        result.map( r => (
            //@ts-ignore  
            <span key={r.id}>{r.id}: {r.name}</span>
        ))
      }
    </div>
  );
}

export default App;

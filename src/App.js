import React from 'react';
import './App.css';

import Conversor from './components/Conversor';

function App() {
  return (
    <div className="App">
      <h1 className="titulo-principal">Conversor de Moeda</h1>
      <Conversor moedaA="USD" moedaB="BRL" />
    </div>
  );
}

export default App;
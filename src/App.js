import React from 'react'
import './css/App.css';

import Question from './components/Question.jsx';
import Response from './components/Response.jsx';
// import Rate from './components/Rate.jsx';

function App() {
  const InitialMsg = 'Olá, eu sou Chatnilson, tudo bem? para começarmos, preciso saber seu nome.'
  return (
    <div className="main_Chate">
      <Question pergunta={InitialMsg} />
      <Response />
      
    </div>
  );
};

export default App;

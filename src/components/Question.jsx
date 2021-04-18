import React from 'react';
import robot from '../imags/robot.png';
import '../css/question.css';

function Question ({pergunta, ...rest}){
  return(
<div>
   
  <div className="container_Capacete_Pergunta">
    <div className="capacete">
     <img src={robot} alt="Chatbot"/>
    </div>
    
    <div className="pergunta-container">
     <p>{pergunta}</p>
    </div>
   
   </div>
   
</div>
  )
}
export default Question;
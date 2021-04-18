import React from 'react';
import play from '../imags/play_sem _fundo.png';
import '../css/response.css';

function Response(){

return(
<div>
<input type="text"/>
<button type="button"><img src={play} alt="Botão envio"/></button>
</div>
)
}

export default Response;
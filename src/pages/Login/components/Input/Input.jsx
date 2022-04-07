import React from "react";
import './Input.css';

/*handleChange=manejador de evento, param=parámetro variador*/
const Input = ({ attribute, handleChange, param }) => {
    return(
        <div className='input-container'>
            <input
            id={attribute.id}/*indentifica con qué input se está trabajando*/
            name={attribute.name}/*poder nombrar un input para trabajarcon funciones dinámicas*/
            placeholder={attribute.placeHolder}/*Las letras grises dentro de las barras*/
            type={attribute.type}/*Cambia las letras por otro caracteres*/
            onChange={ (e) => handleChange(e.target.name, e.target.value) }/*evento de cambio*/
            className={ param ? 'input-error' : 'regular-style' }/*cambia los parámetros del input ante algún evento*/
            />
        </div>
    )
};

export default Input;
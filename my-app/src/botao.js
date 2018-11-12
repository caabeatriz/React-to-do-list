import React from 'react'
import './botao.css'
function Botao (props){
    let classes= 'button'
    if(props.disabled){
        classes += ' button--disable'
    }

    return (
        <button className = {classes}>
        {props.children}

        </button>
    )
}

export default Botao
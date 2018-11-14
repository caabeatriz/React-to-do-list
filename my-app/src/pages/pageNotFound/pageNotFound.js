import React from 'react'
import './pageNotFound.css'
import Imagem from './gatinho.jpg'

function PageNotFound (props){
    return (
        <div className="page-not-found">
        <h1> Página nao encontrada </h1>
        <img src= {Imagem} className='page-not-found__image'/> 
        </div>
    )
}

export default PageNotFound
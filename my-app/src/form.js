import React from 'react'
import './form.css'
function Form (props){
    return(
        <form  action={props.action}>
        <h2 className='form__title' > {props.title}</h2>
        <p className='form__text' > {props.text} </p>
        {props.children}
        </form>
        
        
       
    )
}

export  default Form
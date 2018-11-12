import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Label from './label';
import Input from './input';
import Link from './link';
import Form from './form';
import Botao from './botao'

import * as serviceWorker from './serviceWorker';
const component = <Form title='Login' text='Entre com seu email e senha'>
    <Label htmlFor='email'>Email</Label>
    <Input id='email' type='text'/>
    
    <Label htmlFor='password'>Password</Label>
    <Input id='password' type='text'/>
    <Link> eu sou um botao</Link>
    <Botao disabled >Enviar </Botao>
</Form>

ReactDOM.render(component, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Label from './components/form/label/label';
import Input from './components/form/input/input';
import Link from './components/form/link/link';
import Form from './components/form/form';
import Button from './components/form/button/button'

import * as serviceWorker from './serviceWorker';
const component = <Form title='Login' text='Entre com seu email e senha'>
    <Label htmlFor='email'>Email</Label>
    <Input id='email' type='text'/>
    
    <Label htmlFor='password'>Password</Label>
    <Input id='password' type='text'/>   
    <Button disabled >Enviar </Button>
    <Link> Criar uma conta </Link>
</Form>

ReactDOM.render(component, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();



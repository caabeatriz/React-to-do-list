import React from 'react'
import Form from '../../components/form'
import Container from '../../components/container'
import {setUser} from '../../infra/localstorage'
import {loginUser} from '../../apis/login.api'

class Login extends React.Component {
    constructor(){
        super()
        this.state= { disabled : true }
        // react.createref é para puxar outra função de outra página
        this.email = React.createRef()
        this.password = React.createRef()
    }
    onDisabledButton = () => {
        
        const InputEmail = this.email.current
        const inputPassword = this.password.current

        

        if(InputEmail.hasError() || inputPassword.hasError()){
            this.setState ({disabled: true})
        }else {
            this.setState ({disabled: false})
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log('this props', this.props)
        const InputEmail = this.email.current
        const inputPassword = this.password.current
        const user = {
            email : InputEmail.getValue(),
            password : inputPassword.getValue()
        }
    
    loginUser(user)
        .then((response) => {
            setUser({email: user.email})
            this.props.history.push('/')
        
        })

        .catch((error)=> {
            console.log(error)
        })
}
    // set user pega la em cima, verifica o usuario  e direciona na home 
    
    render(){
        return (
            <Container>
                <Form title='Login' text='Entre com Seu Email e Senha' onSubmit = {this.handleSubmit}>
                    <Form.Label htmlFor='email'>Email</Form.Label>
                    <Form.Input id='email' ref={this.email} type='email' onChange={this.onDisabledButton} required/>
                    <Form.Label htmlFor='password'>Password</Form.Label>
                    <Form.Input id='password' type='password' ref = {this.password} onChange={this.onDisabledButton} minLength={6} required/>
                    <Form.Button disabled={this.state.disabled}>Enviar</Form.Button>
                    <Form.Link href='/conta'>Criar uma Conta</Form.Link>
                </Form>
            </Container>
        )
    }
}



export default Login
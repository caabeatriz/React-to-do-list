import React from 'react'
import Form from '../../components/form'
import Container from '../../components/container'

// function Login(){
//     return(
//         <Container>
//             <Form title='Login' text='Entre com Seu Email e Senha'>
//                 <Form.Label htmlFor='email'>Email</Form.Label>
//                 <Form.Input id='email' type='email' required/>
//                 <Form.Label htmlFor='password'>Password</Form.Label>
//                 <Form.Input id='password' type='password' minLength={6} required/>
//                 <Form.Button disabled>Enviar</Form.Button>
//                 <Form.Link href='/conta'>Criar uma Conta</Form.Link>
//             </Form>
//         </Container>
//     )
// }

class Login extends React.Component {
    constructor(){
        super()
        this.state= { disabled : true }
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
    render(){
        return (
            <Container>
                <Form title='Login' text='Entre com Seu Email e Senha'>
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
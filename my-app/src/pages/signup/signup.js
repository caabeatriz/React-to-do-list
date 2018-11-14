import React from 'react'
import Form from '../../components/form'
import Container from '../../components/container'

// function Signup(){
//     return (
//         <Container>
//             <Form title='Faça Seu Cadastro' text='Preencha com Seus Dados'>
//                 <Form.Label htmlFor='name'>Nome:</Form.Label>
//                 <Form.Input id='name' type='text'/>
//                 <Form.Label htmlFor='email'>Email:</Form.Label>
//                 <Form.Input id='email' type='email'/>
//                 <Form.Label htmlFor='phone'>Telefone:</Form.Label>
//                 <Form.Input id='phone' type='tel' />
//                 <Form.Label htmlFor='password'>Senha:</Form.Label>
//                 <Form.Input id='password' type='password' />
//                 <Form.Button disabled>Enviar</Form.Button>
//                 <Form.Link href='/login'>Fazer Login</Form.Link>
//             </Form>
//         </Container>
//     )
// }


class Signup extends React.Component {
    constructor () {
        super()
        this.state = {disabled : true}

        //chamando a referencia para mudar os inputs
        this.email = React.createRef()
        this.password = React.createRef()
        this.name = React.createRef()
        this.phone = React.createRef()


    }



    onDisabledButton = () => {
       const InputEmail = this.email.current
       const InputPassword = this.password.current
       const InputName = this.name.current
       const InputPhone = this.phone.current

       if(InputEmail.hasError() ||
        InputPassword.hasError()||
        InputName.hasError() || 
        InputPhone.hasError() ){
        this.setState ({disabled: true})
    }else {
        this.setState ({disabled: false})
    }

    }

    // handleChange(){
    //     const InputEmail = this.email.current
    //     const InputPassword = this.password.current
    //     const inputPassword = this.password.current

    //     if(InputEmail.hasError() || inputPassword.hasError()){
    //         this.setState ({disabled: true})
    //     }else {
    //         this.setState ({disabled: false})
    //     }
        



    
    render(){
        return (
            <Container>
            <Form title='Faça Seu Cadastro' text='Preencha com Seus Dados'>
                <Form.Label htmlFor='name' >Nome:</Form.Label>
                <Form.Input id='name' type='text' onChange={this.onDisabledButton}  ref={this.name} required />
                <Form.Label htmlFor='email '>Email:</Form.Label>
                <Form.Input id='email' type='email' ref = { this.email} onChange={this.onDisabledButton} required/>
                <Form.Label htmlFor='phone'>Telefone:</Form.Label>
                <Form.Input id='phone' type='tel' ref={this.phone} onChange={this.onDisabledButton} minLength={10} />
                <Form.Label htmlFor='password'>Senha:</Form.Label>
                <Form.Input id='password' type='password' ref={this.password} onChange={this.onDisabledButton} requried />
                <Form.Button disabled={this.state.disabled}>Enviar</Form.Button>
                <Form.Link href='/login'>Fazer Login</Form.Link>
            </Form>
        </Container>
        )
    }
}


export default Signup
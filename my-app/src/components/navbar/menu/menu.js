import React from 'react'
import { Link } from 'react-router-dom'
import "./menu.css"
import {getUser} from '../../../infra/localstorage'


class Menu extends React.Component {
    constructor (){
        super ()
        // padrao é falso,só quando clicar ficara ao lado
        this.state = { open : false}
        this.user = getUser()
    }

    // criad função para mudar o estado do botao
    handleOpenOrClose = () => {
    // se for open ele ficara  diferente por isso o !
        this.setState ({ open : !this.state.open})       
    }   


    render () {
        console.log('hhelo render')
        let classesOfButton = ' menu__button'
        let classesOfOptions = ' menu__options'


        // aqui serve para mudar o state e abrir o menu só quando clicar
        if(this.state.open){
            classesOfButton += ' menu__button--open'
            classesOfOptions += ' menu__options--open'
        }

      
        return (
            <div>
                <a className={classesOfButton} onClick={this.handleOpenOrClose}>
                    Menu
                </a>
                         
                <ul className={classesOfOptions} onClick={this.handleOpenOrClose}>
                <li>
                    <Link to='/quem-somos'> Quem somos </Link>                   
                </li>
                <li>
                    <Link to='/contato'> Contato </Link>                   
                </li>
                <li>
                    
                    <a>  {this.user ? 'Sair' : 'Login'} </a>          
                   
                </li>
            </ul>
            </div>
        )



    }
}

export default Menu

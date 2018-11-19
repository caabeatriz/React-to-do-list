 import React from 'react';
import {getUser} from '../../infra/localstorage';
import { Redirect } from 'react-router-dom';




class Home extends React.Component {
    constructor (){
        super ()
       
    }

    
    componentDidMount (){
        console.log('hewllo')
    }

    componentWillMount (){
        console.log('wil mountttt')
    }
    render (){
        if(getUser ().email){
            return <div> helloe home</div>
        }else {
            return <Redirect to='/login'/>
        }
    } 
    
}



export default Home

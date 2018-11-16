import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import Menu from './menu';
import logo from './logo.png';


// Arrow funtion que serve como função
//Entre () ele entende como return
const Navbar = () => (

    <nav className='navbar'>
    <Link to='/'>    
    <img className='navbar__logo' src={logo} alt='Símbolo da logo marca da reprograma'/>
    </Link>
    <Menu/>
    </nav>
) 

export default Navbar
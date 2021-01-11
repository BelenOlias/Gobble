import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'

import AuthService from '../../../services/auth.service'

import './Navbar.css'
// import logo from './restaurante.png'
const Navigation = (props) => {


    const authService = new AuthService()

    function logout() {

        authService
            .logout()
            .then(props.setTheUser(null))
            .catch(err => console.log(err))
    }

    return (
        
        <Navbar className='nav'>

            <Link to='/' className='navlink' style={{textDecoration: 'none'}} >

                <h1>Gobble</h1>

                {/* <img src={logo} alt='Logo restaurante' style={{width: '40px'}}/> */}

            </Link>

            <div>

                <Link to='/restaurants' className='navlink' style={{textDecoration: 'none'}}>Restaurantes</Link>

                <Link to='/data' className='navlink' style={{ textDecoration: 'none' }}>Datos</Link>
                
                {!props.loggedInUser && <Link to='/login' className='navlink' style={{textDecoration: 'none'}}>Entra</Link>}
                
                {!props.loggedInUser && <Link to='/signup' className='navlink' style={{ textDecoration: 'none' }}>Regístrate</Link>}

                {props.loggedInUser && <Link to='/profile' className='navlink' style={{ textDecoration: 'none' }}>Tu espacio</Link>}
                
                {props.loggedInUser && <div className='navlink' style={{display: 'inline'}} onClick={logout}>Cierra sesión</div>}


            </div>

        </Navbar>
    )
}

export default Navigation
import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import authService from '../../../services/auth.service'

import MyComponent from './Vivus'

import './Login.css'
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            message: undefined
        }
        this.authService = new authService()
    }

    componentDidMount() {

    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {

        e.preventDefault()

        if (this.state.username.length > 0 && this.state.password.length > 0) {

            this.authService
                .login(this.state)
                .then(response => {

                    this.setState({ message: response })
                    this.props.setTheUser(response.data)

                    //this.props.history.push('/')
                    this.props.closeModal()
                })
                .catch(err => console.log('Erroooooor:', { err }))
        }
        else {
            if (this.state.username.length < 1 && this.state.password.length < 1) {
                let value = 'campos vacios'
                this.setState({ message: value })
            }
            else if (this.state.username.length < 1) {
                let value = 'introduce el username'
                this.setState({ message: value })

            } else {
                let value = 'introduce la contraseña'
                this.setState({ message: value })
            }
        }
    }


    render() {

        return (

            <Container>
                
                <section className='loginPage'>

                    <h1>Bienvenido, gobbler!</h1>
                            
                    <Form onSubmit={this.handleFormSubmit}>
                        
                        <Form.Row>

                            <Form.Group className='group'>
                                    
                                <Form.Label>Nombre de usuario</Form.Label>
                                <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
                                
                            </Form.Group>
                            
                        </Form.Row>

                        <Form.Row>

                            <Form.Group className='group'>
                                   
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                                
                            </Form.Group>
                            
                        </Form.Row>
                                   
                        <button className='loginBtn' type="submit">Entrar</button>

                    </Form>
                    
                </section>

                <MyComponent />

            </Container>

         )
   }
}
 export default Login
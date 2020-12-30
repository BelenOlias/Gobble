import {useState} from 'react'

import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import AuthService from '../../../services/auth.service'
import FileService from '../../../services/file.service'

import Vivus from 'vivus'
// import icon from './iconfinder_thefreeforty_register_1243707.svg'

import './Signup.css'

const Signup = (props) => {

    const [uploadingImage, setUploadingImage] = useState(null)
    const [user, setUser] = useState({user: {username: '', password: '', imageUrl: ''}})

    const authService = new AuthService()

    const fileService = new FileService()

    // new Vivus('icon', {duration: 200, file: icon, animTimingFunction: Vivus.EASE}, null)
    
    const handleImageUpload = e => {
         
        e.preventDefault()

        setUploadingImage('true')

        const uploadData = new FormData()
         
        uploadData.append('imageUrl', e.target.files[0])

        fileService
            .uploadImage(uploadData)
            .then(response => setUser({
                user: { ...user, imageUrl: response.data.secure_url },
            }))
            .then(() => setUploadingImage(null))
            .catch(error => console.log('Error!', error))
         
    }

    const handleInputChange = (e) => {

        e.preventDefault()

        const { name, value } = e.target
        setUser({...user, [name]: value})

    }

    const handleFormSubmit = (e) => {

        e.preventDefault()

        authService
            .signup(user)
            .then(response => {
                props.setTheUser(response.data)
            })
            .catch(err => console.log(err))

    }

    return (
        
        <Container>
            
            <Row>
                
                <Col>
            
                    <section className='signupPage'>
            
                        <h1>Crea tu cuenta</h1>

                        <Form onSubmit={handleFormSubmit}>

                            <Form.Row>

                                <Form.Group>

                                    <Form.Label>Nombre de usuario</Form.Label>

                                    <Form.Control name='username' onChange={handleInputChange}/>
                    
                                </Form.Group>

                            </Form.Row>

                            <Form.Row>

                                <Form.Group>

                                    <Form.Label>Contraseña</Form.Label>

                                    <Form.Control name='password' onChange={handleInputChange}/>
                    
                                </Form.Group>
                
                            </Form.Row>

                            <Form.Row>

                                <Form.Group>

                                    <Form.Label>Foto de perfil</Form.Label>

                                    <Form.Control type='file' name='imageUrl' onChange={handleImageUpload}/>
                    
                                </Form.Group>
                              
                            </Form.Row>
                    
                            <button className='signupBtn' disabled={uploadingImage} type='submit'>{uploadingImage ? '<Cargando imagen...' : 'Crear cuenta'}</button>

                        </Form>
                
                    </section>
                    
                </Col>
                
                <Col>

                    
                    {/* <svg version='1.1' id='icon' xmlns='http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd' x='0px' y='0px' viewBox="0 0 30 30" enable-background="new 0 0 30 30" xmlSpace="preserve">
                    <path d="M16.5,10.7H22c0.4,0,0.8-0.3,0.8-0.8S22.4,9.2,22,9.2h-5.4c-0.4,0-0.8,0.3-0.8,0.8S16.1,10.7,16.5,10.7z   
                    M16.5,12.9h3.1c0.4,0,0.8-0.3,0.8-0.8s-0.3-0.8-0.8-0.8h-3.1c-0.4,0-0.8,0.3-0.8,0.8S16.1,12.9,16.5,12.9z M16.5,8.4H22  
                    c0.4,0,0.8-0.3,0.8-0.8S22.4,6.9,22,6.9h-5.4c-0.4,0-0.8,0.3-0.8,0.8S16.1,8.4,16.5,8.4z M24.7,0.6H5.3c-2.8,0-5.1,2.3-5.1,5.1V18  
                    c0,2.8,2.3,5.1,5.1,5.1h4.4l-0.5,4.4c0,1,0.8,1.8,1.8,1.8h8c1,0,1.8-0.8,1.8-1.9l-0.5-4.3h4.4c2.8,0,5.1-2.3,5.1-5.1V5.8,0.6z"/>
                    </svg> */}

                </Col>
                
            </Row>

        </Container>
    )
}

export default Signup
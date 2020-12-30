import { Component } from 'react'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

import './FormRest.css'

import FormAutocomplete from './FormAutocomplete'

import FileService from '../../../services/file.service'
import RestService from '../../../services/restaurant.service'

class FormRest extends Component {

    constructor(props) {
        super(props)

        this.state = {

            restaurant: {
            name: '',
            price: '',
            cooking: '',
            description: '',
            address: '',
            email: '',
            phone: '',
            imageUrl: ''
            },

            uploadingImage: ''
           
        }

        this.fileService = new FileService()
        this.restService = new RestService()
    }

    handleInputChange = e => {

        const { name, value } = e.target
        this.setState({restaurant: {...this.state.restaurant, [name]: value }  })

    }

    handleCheckbox = e => {

        const target = e.target;
        const value = target.checked
        const name = target.name
        this.setState({restaurant: {...this.state.restaurant, cooking: {...this.state.restaurant.cooking, [name]: value}}})

    }


    handleImageUpload = e => {

        this.setState({ uploadingImage: true })

        const uploadData = new FormData()
         
        uploadData.append('imageUrl', e.target.files[0])

        this.fileService
            .uploadImage(uploadData)
            .then(response => this.setState({
                restaurant: { ...this.state.restaurant, imageUrl: response.data.secure_url },
                uploadingImage: false
            }))
            .catch(error => console.log('Error!', error))
         
    }

    handleFormSubmit = e => {

        e.preventDefault()

        this.restService
            .newRest(this.state.restaurant)
            .then(() => {
                console.log('Creado')
                this.props.history.push('/restaurants')
            })
            .catch(err => console.log(err))
        
    }

    getCoords = (address, coords) => {

        this.setState({ restaurant: { ...this.state.restaurant, location: { lat: coords[0], lng: coords[1], address }, address } })
    }

    render() {

        return (
        
            <>
                <Form onSubmit={this.handleFormSubmit}>
                
                    <Form.Row>

                        <Form.Group as={Col} controlId="name">
    
                            <Form.Label className='label'>Nombre del restaurante</Form.Label>
    
                            <Form.Control name='name' onChange={this.handleInputChange}/>
  
                        </Form.Group>
                    
                        <Form.Group controlId="price">
      
                            <Form.Label className='label side'>Precio</Form.Label>
      
                            <Form.Control name='price' as="select" onChange={this.handleInputChange}>
        
                                <option>Elige</option>
                               
                                <option>€</option>
        
                                <option>€€</option>

                                <option>€€€</option>

                                <option>€€€€</option>

                            </Form.Control>
    
                        </Form.Group>
                    
                    </Form.Row>
                
                    <Form.Group as={Col} controlId="cooking" >
      
                        <Form.Label className='label'>Tipo de cocina</Form.Label><br></br>
      
                        <Form.Check inline type="checkbox" label="Italiana" name='italiana' onChange={this.handleCheckbox} />
                        <Form.Check inline type="checkbox" label="Nouvelle cuisine" name='nouvelle' onChange={this.handleCheckbox}/>
                        <Form.Check inline type="checkbox" label="Mediterránea" name='mediterranea' onChange={this.handleCheckbox}/>
                        <Form.Check inline type="checkbox" label="Vegetariana" name='vegetariana' onChange={this.handleCheckbox}/>
                        <Form.Check inline type="checkbox" label="Vegana" name='vegana' onChange={this.handleCheckbox}/>
                        <Form.Check inline type="checkbox" label="Sin gluten" name='gluten' onChange={this.handleCheckbox}/>
                        <Form.Check inline type="checkbox" label="Sin lactosa" name='lactosa' onChange={this.handleCheckbox}/>
                        <Form.Check inline type="checkbox" label="Asiática" name='asiatica' onChange={this.handleCheckbox}/>
                        <Form.Check inline type="checkbox" label="Tapas" name='tapas' onChange={this.handleCheckbox}/>
                        <Form.Check inline type="checkbox" label="Marisco" name='marisco' onChange={this.handleCheckbox}/>
                        <Form.Check inline type="checkbox" label="Asador" name='asador' onChange={this.handleCheckbox}/>
                        <Form.Check inline type="checkbox" label="Buffet" name='buffet' onChange={this.handleCheckbox}/>
                        <Form.Check inline type="checkbox" label="Brunch" name='brunch' onChange={this.handleCheckbox}/>
                        <Form.Check inline type="checkbox" label="Internacional" name='internacional' onChange={this.handleCheckbox}/>
                        <Form.Check inline type="checkbox" label="Americana" name='americana' onChange={this.handleCheckbox}/>
    
                    </Form.Group>

                    <Form.Group controlId="description">
    
                        <Form.Label className='label'>Descripción</Form.Label>
    
                        <Form.Control name='description' as="textarea" rows={3} onChange={this.handleInputChange}/>
  
                    </Form.Group>

                    <Form.Row>
     
                        <Form.Group as={Col} controlId="address">
                            
                            <Form.Label className='label'>Dirección</Form.Label>

                            <FormAutocomplete value={this.state.address} getCoords={this.getCoords} />

                        </Form.Group>
  
                    </Form.Row>
  
                    <Form.Row>
    
                        <Form.Group as={Col} controlId="email">
     
                            <Form.Label className='label'>Email</Form.Label>
      
                            <Form.Control name='email' type="email" onChange={this.handleInputChange}/>
    
                        </Form.Group>

                        <Form.Group as={Col} controlId="phone">
      
                            <Form.Label className='label'>Teléfono</Form.Label>
      
                            <Form.Control name='phone' onChange={this.handleInputChange}/>
    
                        </Form.Group>

                        <Form.Group controlId="image">
      
                            <Form.Label className='label'>Seleccionar imagen</Form.Label>
      
                            <Form.Control name='imageUrl' type='file' onChange={this.handleImageUpload} />
                                
                        </Form.Group>
  
                    </Form.Row>

                    <button className='whiteBtn' disabled={this.state.uploadingImage} type='submit'>{this.state.uploadingImage ? 'Añadiendo...' : 'Añadir'}</button>

                </Form>
            </>
        )
    }
}

export default FormRest

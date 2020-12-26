import { Component } from 'react'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

import { Link } from 'react-router-dom'

import './FormRest.css'

import FormAutocomplete from './FormAutocomplete'

class FormRest extends Component {

    constructor() {
        super()

        this.state = {
            name: '',

        }
    }

    handleInputChange = e => {

        const { name, value } = e.target
        this.setState({ [name]: value })

    }

    getCoords = (address, coords) => {

        this.setState({ location: { lat: coords[0], lng: coords[1], address }, address })
    }

    render() {

        return (
        
            <>
                <Form>
                
                    <Form.Row>

                        <Form.Group as={Col} controlId="name">
    
                            <Form.Label className='label'>Nombre del restaurante</Form.Label>
    
                            <Form.Control name='name' onChange={this.handleInputChange}/>
  
                        </Form.Group>
                    
                        <Form.Group controlId="price">
      
                            <Form.Label className='label side'>Precio</Form.Label>
      
                            <Form.Control as="select" defaultValue="Elige">
        
                                <option>€</option>
        
                                <option>€€</option>

                                <option>€€€</option>

                                <option>€€€€</option>

                            </Form.Control>
    
                        </Form.Group>
                    
                    </Form.Row>
                
                    <Form.Group as={Col} controlId="cooking">
      
                        <Form.Label className='label'>Tipo de cocina</Form.Label><br></br>
      
                        <Form.Check inline type="checkbox" label="Italiana" />
                        <Form.Check inline type="checkbox" label="Nouvelle cuisine" />
                        <Form.Check inline type="checkbox" label="Mediterránea" />
                        <Form.Check inline type="checkbox" label="Vegetariana" />
                        <Form.Check inline type="checkbox" label="Vegana" />
                        <Form.Check inline type="checkbox" label="Sin gluten" />
                        <Form.Check inline type="checkbox" label="Sin lactosa" />
                        <Form.Check inline type="checkbox" label="Asiática" />
                        <Form.Check inline type="checkbox" label="Tapas" />
                        <Form.Check inline type="checkbox" label="Marisco" />
                        <Form.Check inline type="checkbox" label="Asador" />
                        <Form.Check inline type="checkbox" label="Buffet" />
                        <Form.Check inline type="checkbox" label="Brunch" />
                        <Form.Check inline type="checkbox" label="Internacional" />
                        <Form.Check inline type="checkbox" label="Americana" />
    
                    </Form.Group>

                    <Form.Group controlId="description">
    
                        <Form.Label className='label'>Descripción</Form.Label>
    
                        <Form.Control as="textarea" rows={3} />
  
                    </Form.Group>

                    <Form.Row>
     
                        <Form.Group as={Col} controlId="Address">
                            
                            <Form.Label className='label'>Dirección</Form.Label>

                            <FormAutocomplete value={this.state.address} getCoords={this.getCoords} />

                        </Form.Group>
  
                    </Form.Row>
  
                    <Form.Row>
    
                        <Form.Group as={Col} controlId="email">
     
                            <Form.Label className='label'>Email</Form.Label>
      
                            <Form.Control type="email" />
    
                        </Form.Group>

                        <Form.Group as={Col} controlId="phone">
      
                            <Form.Label className='label'>Teléfono</Form.Label>
      
                            <Form.Control />
    
                        </Form.Group>
  
                    </Form.Row>

                    <button className='whiteBtn' type='submit'>Añadir</button>

                </Form>
            </>
        )
    }
}

export default FormRest

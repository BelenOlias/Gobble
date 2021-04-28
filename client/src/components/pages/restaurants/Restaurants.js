import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import RestService from '../../../services/restaurant.service'
import RestCard from './RestaurantCard'

import './Restaurants.css'

class Restaurants extends Component {

    constructor(props) {
    
        super(props)
        this.state = {
            restaurants: [],
        }

        this.restService = new RestService()
    }

    componentDidMount() {

        this.restService
            .getRests()
            .then((response) => this.setState({ restaurants: response.data }))
            .catch(err => console.log(err))
    }

    render() {

        return (

                <Container>

                    <section className='index'>

                        <h1>Todos los restaurantes</h1>
                    
                    {this.props.loggedInUser && <div style={{minHeight: '80px'}}><br></br>

                            {this.props.loggedInUser.role === 'admin' && <Link to='/new' style={{textDecoration: 'none', height: '100%'}} className='adminLink'>Añade un nuevo restaurante</Link>}

                        </div>}
                    
                    </section>

                    <section className='list'>
                    
                        <Row>

                            {this.state.restaurants.map(elm => <RestCard key={elm.id} {...elm}/>)}

                        </Row>
                           
                    </section>
                    
                </Container>

        )
    }
}

export default Restaurants
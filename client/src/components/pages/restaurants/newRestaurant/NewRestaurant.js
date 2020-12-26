
import FormRest from '../../forms/FormRest'

import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import './NewRestaurant.css'

const NewRestaurant = () => {

    return (
            
        <Container>
            
            <section className='form'>
                
                <h1>Añade un nuevo restaurante</h1>

                <FormRest /><br></br>

                <Link to='restaurants' className='redBtn'>Volver</Link>

            </section>

        </Container>

        )
    }

export default NewRestaurant
import { Link } from 'react-router-dom'

import Col from 'react-bootstrap/Col'

import './RestaurantCard.css'

const RestCard = (props) => {

    return (
                
        <Col lg={4}>
            
            <div className='card'>
                
                <img src={props.imageUrl} alt='Foto de restaurante' style={{ height: '300px', width: '350px', objectFit: 'cover', borderRadius: '15px' }}></img>

                <Link to={`/details/${props._id}`} style={{textDecoration: 'none'}}><h4>{props.name}</h4></Link>

            </div>

        </Col>
        
    ) 

}

export default RestCard
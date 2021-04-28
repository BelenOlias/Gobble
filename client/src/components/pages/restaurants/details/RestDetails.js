import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import RestaurantService from '../../../../services/restaurant.service'
import RatingService from '../../../../services/rating.service'
import CommentService from '../../../../services/comment.service'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

import star from './star.png'

import DetailsMap from './DetailsMap'

import './RestDetails.css'

const RestDetails = (props) => {

    //Restaurant

    const restaurantService = new RestaurantService()

    const [restaurant, setRestaurant] = useState('')

    useEffect(() => { findRest() }, [])


    function findRest() {

        restaurantService
            .getOneRest(props.match.params.restaurant_id)
            .then((response) => setRestaurant(response.data))
            .catch(err => console.log(err))
    }

    //Rating

    const ratingService = new RatingService()

    const [ratings, setRatings] = useState('')

    const [ratingMedia, setRatingMedia] = useState(null)

    function findRatings() {

        ratingService
            .getRestaurantRatings(props.match.params.restaurant_id)
            .then((response) => {
                setRatings(response.data)

                let data = response.data
                let sum = 0

                data.map(elm => sum += elm.rating)

                if (data.length > 1) {
                    let media = sum / data.length
                    setRatingMedia(media.toFixed(1))
                } else {
                    let media = sum
                    setRatingMedia(media.toFixed(1))
                }

            })
            .catch(err => console.log(err))
    }


    useEffect(() => { findRatings() }, [ratingMedia])


    //User

    const [userRating, setUserRating] = useState(null)

    function findUserRating() {

        ratingService
            .getRestaurantRatings(props.match.params.restaurant_id)
            .then((response) => {
                let data = response.data
                data.map(elm => elm.author === props.loggedInUser._id ? setUserRating(elm.rating) : null)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => { findUserRating() }, [])


    //Rating Form

    const [ratingValue, setRatingValue] = useState('')

    const [commentValue, setCommentValue] = useState('')

    const handleRatingChange = e => {

        const { value } = e.target
        
        setRatingValue(value)

        findRatings()
    

        // name === 'rating' ? setRatingValue(value) : setCommentValue(value)

    }

    const handleSumbmit = e => {

        e.preventDefault()

        setUserRating(ratingValue)

        const newRating = { author: props.loggedInUser, rating: ratingValue, restaurant }

        ratingService
            .newRating(newRating)
            .then(() => findRatings()) //aqui hay que hacer la funcion para recalcular la media de los ratings
            .catch(err => console.log(err))

    }


    //Comentarios

    const [comments, setComments] = useState('')

    const commentService = new CommentService()

    const getComments = () => {

        commentService
            .getRestaurantComments(props.match.params.restaurant_id)
            .then((response => {
                setComments(response.data)
            }))
            .catch(err => console.log(err))
    }

    useEffect(() => {getComments()}, [])

    const handleCommentChange = e => {

        const { value } = e.target
        
        setCommentValue(value)

    }

    const handleSubmitComment = e => {

        e.preventDefault()

        const newComment = { author: props.loggedInUser, restaurant, commentBody: commentValue }
        
        commentService
            .newComment(newComment)
            .then(() => getComments())
            .catch(err => console.log(err))
    }

    return (
        
        <Container>
            
            <section className='details'>

                <h1>{restaurant.name}</h1>

                <h4 style={{textAlign: 'center'}}>'{restaurant.description}'</h4>
            
                <Row style={{marginBottom: '5%'}}>

                    <Col lg={6}>

                        <img src={restaurant.imageUrl} alt='Restaurant salon' />
                    
                    </Col>

                    <Col lg={4}>

                        {ratingMedia && <p>{ratingMedia}<img src={star} alt='estrella' style={{ width: '5%', height: '4%', objectFit: 'cover', marginLeft: '1%' , marginBottom: '1%' }} /></p>}

                        {userRating && <p>Tu valoración: {userRating}</p>}

                        {!userRating &&
                            
                            <Form onSubmit={handleSumbmit} style={{marginBottom: '25px'}}>

                                <Form.Group>

                                    <Form.Control name='rating' type='number' max='5' min='0' placeholder='Valora tu experiencia del 0 al 5' onChange={handleRatingChange} />

                                </Form.Group>
                            
                                <button className='formBtn' type='submit'>Añadir puntuación</button>

                            </Form>
                        }

                        <p>Precio: {restaurant.price}</p>

                        {restaurant.cooking && <p>Su cocina: {restaurant.cooking.join(', ')}</p>}

                        {restaurant.phone && <p>Teléfono: {restaurant.phone}</p>}

                        {restaurant.email && <p>Email: {restaurant.email}</p>}


                    </Col>

                </Row>

                <Row style={{marginBottom: '5%'}}>
                    
                    <Col lg={1}></Col>
                    
                    <Col lg={10} >
                        
                        {restaurant &&

                            <DetailsMap containerElement={<div style={{ height: '60vh', margin: '50px 20px' }} />}
                                mapElement={<div style={{ height: "100%", borderRadius: '20px' }} />}
                                location={restaurant.location}
                                name={restaurant.name} />
                        }

                    </Col>

                </Row>

                <Row>

                    <Col lg={12}>

                        <h3 style={{marginBottom: '3%'}}>Comentarios</h3>

                        {!comments && <p style={{color: 'grey', fontStyle: 'italic'}}>Todavía nadie ha dejado un comentario sobre este restaurante, rompe el hielo!</p>}

                        {comments && comments.map(elm =>
                            
                            <div>
                                
                                <h5 style={{fontStyle: 'italic'}}>{elm.author.username}: <span>{elm.commentBody}</span></h5>

                            </div>
                           

                        )}

                        <Form onSubmit={handleSubmitComment} style={{marginTop: '3%'}}>

                            <Form.Group >

                                <Form.Control name='comment' placeholder='Deja aquí tu experiencia...' as='textarea' rows={5} onChange={handleCommentChange}/>

                            </Form.Group>
                            
                            <button className='submitBtn' type='submit'>Publicar comentario</button>
                            
                        </Form>

                    </Col>

                </Row>

            </section>

            <Link to='/restaurants' style={{textDecoration: 'none'}} className='backButton'>Volver</Link>

        </Container>
    )

}

export default RestDetails
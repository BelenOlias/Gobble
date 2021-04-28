import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import RatingService from '../../../services/rating.service'
import RestaurantService from '../../../services/restaurant.service'

import DetailsBtn from '../../utils/DetailsBtn/DetailsBtn'

import star from '../restaurants/details/star.png'

 class MyRatings extends Component {

    constructor(props) {
        
         super(props)
        
        this.state = {
            userRated: false,
            userRatings: []

        }

        this.ratingService = new RatingService()

        this.restaurantService = new RestaurantService()

    }

    findIfUserRated() {

        this.ratingService
            .getRatings({author: this.props.user._id})
            .then((response) => {
                 if (response.data) {
                    
                     let rated = response.data
                     rated.forEach(elm => {
                        
                         this.restaurantService
                             .getOneRest(elm.restaurant)
                             .then((response) => this.state.userRatings.push({ restaurant: response.data.name, rating: elm.rating, id: elm.restaurant }))
                             .then(() => this.setState({userRated: true}))
                             .catch(err => console.log(err))
                     })                     
                  
                 } 
             })
             .catch(err => console.log(err))
    }

     
    componentDidMount() {

        this.findIfUserRated()
    }

     
        render() {

            return (
                
                <>
                    {this.state.userRated && <h3>Mis valoraciones</h3>}

                        {this.state.userRatings &&

                        <div>
                
                            {this.state.userRatings.map(elm =>
                    
                                <div key={elm.id} style={{fontWeight: '300', margin: '30px 0'}}>
                                    
                                    <p style={{display: 'inline', marginRight: '30px', fontSize: '1.2em'}}>{elm.restaurant}: {elm.rating}<img src={star} alt='estrella' style={{ width: '2%', height: '3%', objectFit: 'cover', marginLeft: '0.5%', marginBottom: '0.5%' }} /></p><span><DetailsBtn place={elm.id} /></span>
                     
                                </div>)}
                        
                        </div>}         

                    
                    {!this.state.userRated &&
            
                        <div>Aún no has puntuado ningún restaurante</div>
                       
                    }

                </>
            )
        }
     }



  export default MyRatings
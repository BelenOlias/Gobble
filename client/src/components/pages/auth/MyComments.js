import { Component } from 'react'

import CommentService from '../../../services/comment.service'
import RestaurantService from '../../../services/restaurant.service'

import DetailsBtn from '../../utils/DetailsBtn/DetailsBtn'
 class MyComments extends Component {

     constructor(props) {

         super(props)
         this.state = {
            userCommented: false,
            userComments: []
         }

         this.commentService = new CommentService()
         this.restaurantService = new RestaurantService()
     }

     componentDidMount() {

         this.findIfUserCommented()
         
     }

     findIfUserCommented() {

         this.commentService
            .getComments({author: {_id: this.props.user._id} })
            .then((response) => {
                 if (response.data) {
                    
                     let commented = response.data

                     commented.forEach(elm => {
                        
                         this.restaurantService
                             .getOneRest(elm.restaurant)
                             .then((response) => this.state.userComments.push({ restaurant: response.data.name, comment: elm.commentBody, id: elm.restaurant }))
                             .then(() => this.setState({userCommented: true}))
                             .catch(err => console.log(err))
                     })                     
                  
                 } 
             })
             .catch(err => console.log(err))

     }


     render() {
         
         return (
        
            <>
                
                {this.state.userCommented && <h3>Mis comentarios</h3>}

                    {this.state.userComments &&
   
                    <div>
                                    
                    {this.state.userComments.map(elm =>                               
                        
                        <div key={elm.id} style={{fontWeight: '300', margin: '30px 0'}}>
                                    
                            <p style={{display: 'inline', marginRight: '30px', fontSize: '1.2em'}}>{elm.restaurant}: <span style={{fontStyle: 'italic'}}>'{elm.comment}'</span></p><span><DetailsBtn place={elm.id} /></span>
                     
                        </div>)}
                        
                    
                    </div>}         

                    
                    {!this.state.userCommented &&
            
                        <div>Aún no has comentado ningún restaurante</div>
                       
                    }

            </>
    ) 
     }
   
 }

 export default MyComments
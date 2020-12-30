import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Navigation from '../../layout/navigation/Navbar'
import Index from '../index/Index'
import Restaurants from '../restaurants/Restaurants'
import NewRestaurant from '../restaurants/newRestaurant/NewRestaurant'
import Data from '../data/Data'
import Profile from '../auth/Profile'

import AuthService from '../../../services/auth.service'

class App extends Component {
  
    constructor() {
    super()
    this.state = {
      loggedInUser: undefined
    }
    
    this.authService = new AuthService()

  }

  componentDidMount = () => this.fetchUser()

  setTheUser = user => this.setState({ loggedInUser: user }, () => console.log('El usuario es', this.state.loggedInUser))

  fetchUser = () => {
    this.authService
      .isLoggedIn()
      .then(response => this.setState({ loggedInUser: response.data }))
      .catch(err => this.setState({ loggedInUser: null }))
  }


    render() {
    return (
        <>
            
            <Navigation setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser }/>
        
            <Switch>

                <Route path='/' exact render={() => <Index />} />
            
                <Route path='/restaurants' exact render={() => <Restaurants />} />
          
                {/* <Route path='/new' exact render={() => this.state.loggedInUser.role === 'admin' ? <NewRestaurant /> : <Redirect to='/' />} /> */}
                <Route path='/new' exact render={props => <NewRestaurant {...props} /> } />
          
                <Route path='/data' render={() => <Data />} />
                <Route path='/profile' render={() => this.state.loggedInUser ? <Profile loggedInUser={this.state.loggedInUser} /> : <Redirect to='/login'/>} />



            </Switch>
            
        </>
    )
    }
}

export default App;

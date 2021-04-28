import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Navigation from '../../layout/navigation/Navbar'
import Index from '../index/Index'
import Restaurants from '../restaurants/Restaurants'
import RestDetails from '../restaurants/details/RestDetails'
import NewRestaurant from '../restaurants/newRestaurant/NewRestaurant'
import Data from '../data/Data'
import Profile from '../auth/Profile'
import Signup from '../signup/Signup'
import Login from '../login/Login'

import AuthService from '../../../services/auth.service'

class App extends Component {
  
    constructor() {
    super()
    this.state = {
      loggedInUser: undefined,
      endpoint: 'localhost:5000',
    }
    
    this.authService = new AuthService()

  }

  componentDidMount = () => {
    
    this.fetchUser()
  }

  setTheUser = user => this.setState({ loggedInUser: user }, () => console.log('El usuario es', this.state.loggedInUser))

  fetchUser = () => {
    this.authService
      .isLoggedIn()
      .then(response => this.setState({ loggedInUser: response.data }))
      .catch(err => this.setState({ loggedInUser: null }))
  }


  render() {
      
    return (
        <>
            
        <Navigation setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} />
        
            <Switch>

                <Route path='/' exact render={() => <Index />} />
            
                <Route path='/restaurants' exact render={(props) => <Restaurants loggedInUser={this.state.loggedInUser} {...props} />} />
          
                <Route path='/details/:restaurant_id' render={(props) => this.state.loggedInUser ? <RestDetails loggedInUser={this.state.loggedInUser} {...props} /> : <Redirect to='/login' />} />
                <Route path='/new' exact render={(props) => this.state.loggedInUser && this.state.loggedInUser.role === 'admin' ? <NewRestaurant {...props}/> : <Redirect to='/' />} />
          
                <Route path='/data' render={() => <Data />} />
                <Route path='/profile' render={() => this.state.loggedInUser ? <Profile loggedInUser={this.state.loggedInUser} /> : <Redirect to='/login' />} />

                <Route path='/signup' render={props => <Signup setTheUser={this.setTheUser} {...props}/>} />

                <Route path='/login' render={props => <Login setTheUser={this.setTheUser} {...props} />} />

            </Switch>
            
        </>
    )
    }
}

export default App;

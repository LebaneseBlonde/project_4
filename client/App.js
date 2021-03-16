import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bulma'
import './styles/style.scss'
import './styles/homePageStyle.scss'
import './styles/searchStyle.scss'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Search from './components/Search'
import UserRegister from './components/users/UserRegister'
import UserLogin from './components/users/UserLogin'
import UserProfile from './components/users/UserProfile'
import BusinessRegister from './components/businesses/BusinessRegister'
import BusinessLogin from './components/businesses/BusinessLogin'
import BusinessProfile from './components/businesses/BusinessProfile'
import PaymentPage from './components/PaymentPage'
import { connect } from 'react-redux'

const App = (props) => {


  return <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path='/user/register' component={UserRegister} />
      <Route exact path='/user/login' component={UserLogin} />
      <Route exact path='/user/profile' component={UserProfile} />
      <Route exact path='/search' component={Search} />
      <Route exact path='/business/register' component={BusinessRegister} />
      <Route exact path='/business/login' component={BusinessLogin} />
      <Route exact path='/business/:businessId' component={BusinessProfile} />
      <Route exact path='/payment' component={PaymentPage} />
    </Switch>
  </BrowserRouter>
}

function mapStateToProps(state){
  return {
    currentUser: state.currentUser
  }
} 

export default connect(mapStateToProps)(App)
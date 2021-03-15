import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './styles/style.scss'

import Home from './components/Home'
import Navbar from './components/Navbar'
import SearchResults from './components/SearchResults'
import UserRegister from './components/UserRegister'
import UserLogin from './components/UserLogin'
import UserProfile from './components/UserProfile'
import BusinessRegisterBio from './components/BusinessRegisterBio'
import BusinessRegisterFund from './components/BusinessRegisterFund'
import BusinessRegisterTiers from './components/BusinessRegisterTiers'
import BusinessLogin from './components/BusinessLogin'
import BusinessProfile from './components/BusinessProfile'
import PaymentPage from './components/PaymentPage'

const App = () => {
  return <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path='/user/register' component={UserRegister} />
      <Route exact path='/user/login' component={UserLogin} />
      <Route exact path='/user/profile' component={UserProfile} />
      <Route exact path='/search/:query' component={SearchResults} />
      <Route exact path='/business/register/bio' component={BusinessRegisterBio} />
      <Route exact path='/business/register/fund' component={BusinessRegisterFund} />
      <Route exact path='/business/register/tiers' component={BusinessRegisterTiers} />
      <Route exact path='/business/login' component={BusinessLogin} />
      <Route exact path='/business/:businessId' component={BusinessProfile} />
      <Route exact path='/payment' component={PaymentPage} />
    </Switch>
  </BrowserRouter>
}

export default App
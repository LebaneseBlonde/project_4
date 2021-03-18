import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bulma'
import './styles/style.scss'
import './styles/homePageStyle.scss'
import './styles/searchStyle.scss'
import './styles/bioStyle.scss'
import './styles/businessProfileStyle.scss'
import './styles/updateStyle.scss'
import './styles/heroSection.scss'
import './styles/paymentStyle.scss'




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
import PaymentPage from './components/PaymentPage'
const App = () => {


  return <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path='/user/register' component={UserRegister} />
      <Route exact path='/user/login' component={UserLogin} />
      <Route exact path='/user/dashboard' component={UserProfile} />
      <Route exact path='/search' component={Search} />
      <Route exact path='/business/register' component={BusinessRegister} />
      <Route exact path='/business/login' component={BusinessLogin} />
      <Route exact path='/payment' component={PaymentPage} />
      <Route exact path='/business/:businessId' component={BusinessProfile} />
      <Route exact path='/completion' component={BusinessProfile} />
    </Switch>
  </BrowserRouter>
}

export default App
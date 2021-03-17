import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function PaymentPage({location}) {

  const tier = location.state.tier
  const fund = location.state.fund
  const business = location.state.business

  console.log(tier)
  console.log(fund)
  console.log(business)

  return <div id='paymentPage'>

    <h2>Support</h2>

  </div>
}
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function PaymentCompletion({location, history}) {

  const business = location.state

  

  return <div id='completionPage'>
    <h1 id='completionTitle'><strong>Thank you for supporting {business.name}!</strong></h1>
    <p id='thankYou'>You will receive an email from them shortly.</p>
    <Link to={`business/${business.id}`}>
      <button className='button' id='completionButton'>Back to fund page</button>
    </Link>   
  </div>

}
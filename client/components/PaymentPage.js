import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function PaymentPage({location}) {

  const tier = location.state.tier
  const fund = location.state.fund
  const business = location.state.business
  const pledge = {amount: tier.price}

  const token = localStorage.getItem('token')

  console.log(tier)
  console.log(fund)
  console.log(business)

  async function handleSubmit() {
    
    const {data} = await axios.post(`/api/funds/${fund.id}/pledges`, pledge,{
      headers: { Authorization: `Bearer ${token}` }
    })
    
  }

  return <div id='paymentPage'>

    <h2 id='title'><strong>Support {business.name}</strong></h2>

    <main id='paymentArea'>

      <section id='paymentLeft'>
        {!token &&
        <div id='loginPrompt'>
          <h3 className='paymentSubTitle'>You must be logged in to make a pledge</h3>
          <div id='paymentLogin'>
            <p>Already have an account?</p>
            <Link to='/user/login'>
              <button className='button'>Sign in</button>
            </Link>
          </div>
          <div id='paymentRegister'>
            <p>Don't have an account?</p>
            <Link to='/user/register'>
              <button className='button'>Regsiter</button>
            </Link>
          </div>
        </div>}

        <div id='checkout'>
          <h3 className='paymentSubTitle'><strong>Payment Details</strong></h3>
          <form id='checkoutForm'>
            <div className='field'>
              <div className='control'>
                <input
                  className='input'
                  type='text'
                  placeholder='Card number'
                />
              </div>
            </div>
            <div id='expiryCVC'>
              <div className='field'>
                <div className='control'>
                  <input
                    className='input'
                    type='text'
                    placeholder='Expiry'
                  />
                </div>
              </div>
              <div className='field'>
                <div className='control'>
                  <input
                    className='input'
                    type='text'
                    placeholder='CVC'
                  />
                </div>
              </div>
            </div>
            <div className='field'>
              <div className='control'>
                <input
                  className='input'
                  type='text'
                  placeholder='PIN number'
                />
              </div>
            </div>
            <div className='field'>
              <div className='control'>
                <input
                  className='input'
                  type='text'
                  placeholder='Mothers maiden name'
                />
              </div>
            </div>
          </form>
        </div>
      </section>

      <section id='paymentRight'>

        <div id='details'>
          <h3 className='paymentSubTitle' id='summary'><strong>Summary</strong></h3>
          <p className='paymentSubTitle'><strong>{tier.name}</strong></p>
          <ul>
            {tier.perks.map((element, index) => {
              return <li key={index}> -{element.perk}</li>
            })}
          </ul>
        </div>
          
        <div id='payment'>
          <div id='price'>
            <p>Total to pay:</p> <p>£{tier.price}</p>   
          </div>
          <Link to={{pathname:'/completion', state: business}}>
            <button className='button' id='paymentButton' onClick={handleSubmit}  >Pay now</ button>
          </Link>        
        </div>    
      </section>

    </main>
  
  </div>
}
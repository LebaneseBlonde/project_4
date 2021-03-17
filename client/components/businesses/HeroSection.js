import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function HeroSection({ business, loading }) {

  if(loading) return <div><p>loading</p></div>
  console.log(business)

  return <div>
    <section className="hero profile-hero is-medium" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${business.image})`}}>
      <div className="hero-body has-text-centered">
        <p className="title has-text-white">
          {business.name}
        </p>
        <p className="subtitle has-text-white">
          {business.address_city}
        </p>
      </div>
    </section>

    <section className='profile-fund-info fund-desc'>
      <div className=''>
        <p>{business.fund[0].description}</p>
      </div>
    </section>
  </div>
}
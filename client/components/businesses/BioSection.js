import React, { useState, useEffect } from 'react'


export default function BioSection(business, loading) {

  if (loading) {
    return <div>
      Loading
    </div>
  }

  return <section id='businessInfo'>
    <h2>About {business.name}</h2>
    <article id='businessDescription'>
      <div id='contactInfo'>
        <p>{business.name}</p>
        <p>{business.email}</p>
        <p>{business.address_1}</p>
        <p>{business.address_2}</p>
        <p>{business.address_city}</p>
        <p>{business.address_postcode}</p>
        <p>Est. {business.established}</p>
      </div>
      <div id='businessBio'>
        <p>{business.bio}</p>
      </div>
    </article>
    <div id='gallery'>

    </div>
  </section>
}
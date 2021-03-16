import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function HomeFeatured() {

  const [businesses, updateBusinesses] = useState([])
  const [loading, updateLoading] = useState(true)

  useEffect(() => {

    async function getBusinesses() {

      const {data} = await axios.get('/api/businesses/All Categories/london')
      console.log(data)
      updateBusinesses(data)
      updateLoading(false)
    }
    getBusinesses()
  }, [])

  if (loading) {
    return <div>
      loading
    </div>
  }

  return <div id='homePageFeatured'>
    <div id='featuredResults'>
      {businesses.map((business, index) => {
        const fundPercentage = Math.floor(business.fund[0].funds_raised * (100 / business.fund[0].fund_goal))
        let displayPercentage = 0
        if (fundPercentage > 100) {displayPercentage = 100}
        else {displayPercentage = fundPercentage}

        return <div key={index} className='featuredBusinessCard'>

          <div className='featuredBusinessImage' style={{backgroundImage: `url(${business.image})`}}></div> 

          <div className='featuredBusinessDescription'>
            <h4>{business.name}</h4>
            <p>{business.fund[0].description.substr(0, 50)}...</p>
          </div>

          <div className='featuredStatus'>       
              <p>{fundPercentage}% funded</p>   
              <div className='featuredStatusBar'>
                <div className='featuredStatusBarProgress' style={{width:`${displayPercentage}%`}}></div>
              </div>
          </div>           
        </div>
      })}
    </div>
  </div>


}

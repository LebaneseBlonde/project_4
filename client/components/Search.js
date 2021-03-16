import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import HomeFeatured from './HomeFeatured.js'

export default function Search() {

  const [businesses, updateBusinesses] = useState([])
  const [loading, updateLoading] = useState(true)
  const [formData, updateFormData] = useState({
    category: 'All Categories',
    query: ''
  })

  useEffect(() => {

    async function getBusinesses() {

      const {data} = await axios.get('/api/businesses/All Categories/london')
      updateBusinesses(data)
      updateLoading(false)
    }
    getBusinesses()
  }, [])

  function handleChange(event) {
    const { name, value } = event.target
    updateFormData({ ...formData, [name]: value })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      const { data } = await axios.get(`/api/businesses/${formData.category}/${formData.query}`)
      updateBusinesses(data)
      updateLoading(false)

    } catch (err) {
      console.log(err)
    }
  }

  return <div id='searchPage'>

    <header id='searchPageHeader'>
      <h1>Search Business Funds</h1>
      <p>A nice paragraph about all these lovely businesses you're searching</p>
    </header>

    <section id='searchFormArea'>
      <h2>Refine your search</h2>
      <form id='searchForm' onSubmit={handleSubmit}>

        <div className='field'>
          <div className='control'>
            <input
              className='input'
              type='text'
              value={formData['query']}
              onChange={handleChange}
              name='query'
              placeholder='Search by name, city, postcode...'
            />
          </div>
        </div>
      </form>
    </section>

    <HomeFeatured businesses={businesses} loading={loading}/>

  </div>
}
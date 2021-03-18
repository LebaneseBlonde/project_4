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
    updateBusinesses([])
    updateLoading(true)
    try {
      const { data } = await axios.get(`/api/businesses/${formData.category}/${formData.query}`)
      updateBusinesses(data)
      updateLoading(false)

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div id="searchPage" className="page">
      <div className="container section">
        <header id="searchPageHeader">
          <h2>Search Business Funds</h2>
          <p>
            A nice paragraph about all these lovely businesses you're searching
          </p>
        </header>

        <section id="searchFormArea">
          <h3>Refine your search</h3>
          <form id="searchForm" onSubmit={handleSubmit}>
            <div className="select">
              <select
                onChange={handleChange}
                name="category"
                value={formData["category"]}
              >
                <option>All Categories</option>
                <option>Pubs & Bars</option>
                <option>Restaurants</option>
                <option>Cafés & Delis</option>
                <option>Retail</option>
                <option>Venues</option>
                <option>The Arts</option>
              </select>
            </div>

            <div className="field">
              <div className="control">
                <input
                  className="input"
                  type="text"
                  value={formData["query"]}
                  onChange={handleChange}
                  name="query"
                  placeholder="Search by name, city, postcode..."
                />
              </div>
            </div>

            <button className="button">Search</button>
          </form>
        </section>

        <section id="searchPageResults">
          <HomeFeatured businesses={businesses} loading={loading} />
        </section>
      </div>
    </div>
  );
}
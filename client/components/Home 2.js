import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import HomeFeatured from './HomeFeatured.js'

export default function Home() {

  const [businesses, updateBusinesses] = useState([])
  const [loading, updateLoading] = useState(true)

  useEffect(() => {

    async function getBusinesses() {

      const {data} = await axios.get('/api/businesses/All Categories/london')
      updateBusinesses(data)
      updateLoading(false)
    }
    getBusinesses()
  }, [])

  return (
    <div id="homePage" className="page">
      <section id="homePageTop">
        <div className="container">
          <div>
            <h2>
              <strong>
                Supporting local businesses through financial hardship
              </strong>
            </h2>
            <p>
              People across London are paying for goods and services in advance
              to ease cash flow problems for the local businesses in their
              community. Pledge to support yours today.
            </p>
          </div>
        </div>
      </section>

      <section id="homePageMiddle">
        <div className="container">
          <Link className="reactLink" to="/business/register">
            <div className="homePageInfoCard">
              <div className="imageArea">
                <img
                  className="homePageIcon"
                  src="../images/business.png"
                  alt="business icon"
                />
              </div>
              <div className="infoCardTextArea">
                <h3 className="infoCardTitle">
                  Register your business for crowdfunding
                </h3>
                <p>
                  Pre-sell your services now, support your staff and deliver
                  when London re-opens
                </p>
              </div>
            </div>
          </Link>
          <Link className="reactLink" to="/search">
            <div className="homePageInfoCard">
              <div className="imageArea">
                <img
                  className="homePageIcon"
                  src="../images/pledge.png"
                  alt="crowdfunding icon"
                />
              </div>
              <div className="infoCardTextArea">
                <h3 className="infoCardTitle">
                  Start supporting your local businesses
                </h3>
                <p>
                  People across London are paying for goods and services in
                  advance to local businesses in their community. Pledge to
                  support yours today.
                </p>
              </div>
            </div>
          </Link>
          <div>
            <div className="homePageInfoCard">
              <div className="imageArea">
                <img
                  className="homePageIcon"
                  src="../images/inform.png"
                  alt="inform icon"
                />
              </div>
              <div className="infoCardTextArea">
                <h3 className="infoCardTitle">Nominate a business</h3>
                <p>
                  During lockdown the small businesses we love in our
                  communities are struggling to survive. Tell us about a
                  business that might need support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="homePageBottom">
        <h2>Businesses live and funding</h2>
        <HomeFeatured businesses={businesses} loading={loading} />
      </section>
    </div>
  );
}

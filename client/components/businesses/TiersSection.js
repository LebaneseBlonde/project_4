import React from 'react'
import { Link } from 'react-router-dom'
import { getFundsRaised } from '../../lib/utilityFunctions'

export default function FundSection({loading, business, isBusiness}) {
  if (loading) return <div><p>loading</p></div>

  const fundPercentage = Math.floor(getFundsRaised(business) * (100 / business.fund[0].fund_goal))
  let displayPercentage = 0
  if (fundPercentage > 100) { displayPercentage = 100 }
  else { displayPercentage = fundPercentage }

  return <div className='container profile-fund-info '>
    {!isBusiness && <div className='is-flex is-flex-direction-row is-justify-content-space-evenly'>
      {business.fund[0].tiers.map(tier => {
        return <div className="card tier-cards tier-cards" key={tier.name}>
          <div className="card-content">
            <p className="subtitle is-5">{tier.name}</p>
            <p className="subtitle is-4">£{tier.price}</p>
            {business.fund[0].subscription && <p className="subtitle is-6">Per month</p>}
            <button className='button is-danger'>Join</button>
            <ul className="content perk-list">
              {tier.perks.map((perk, index) => {
                return <li className='perk-list' key={index}>{perk.perk}</li>
              })}
            </ul>
          </div>
        </div>
      })}
    </div>}
    <div className='has-text-centered pledge-num'>{business.fund[0].pledges.length} People have made pledges to {business.name}</div>
    <div className='featuredStatus'>
      <p>{fundPercentage}% funded</p>
      <div className='featuredStatusBar'>
        <div className='featuredStatusBarProgress' style={{ width: `${displayPercentage}%` }}></div>
      </div>
    </div>
  </div>
}
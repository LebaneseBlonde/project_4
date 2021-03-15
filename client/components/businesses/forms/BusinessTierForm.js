import React, {useState} from 'react'


export default function BusinessTierForm({ handlePerkChange, handleTierChange, tierFormData, perkFormData }) {
  const [tiers, setTiers] = useState(['tier1'])

  return <div>
    {tiers.map((tier, index) => {
      
      return <div key={index} className="field">
        <label className="label">
          <p>Tier {index + 1}</p>
        </label>
        <div className="control">
          <input
            className="input"
            type="text"
            value={tierFormData[index].name}
            onChange={(event, index) => {
              const number = index
              handleTierChange(event, number)
            }}
          />
        </div>
      </div>
    })}
  </div>
}
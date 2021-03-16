import React, {useState} from 'react'


const AddButton = ({showTier}) => {
  console.log('hullo');

    return <div>
      <button>Add another tier</button>
    </div>

}



export default function BusinessTierForm({ handlePerkChange, handleTierChange, tierFormData, perkFormData }) {
  const [tiers, setTiers] = useState(['tier1'])
  const [showTier, setShowTier] = useState(0)

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
    <div>
      <button onClick={() => setShowTier(showTier + 1)}>Add new tier</button>
      <div>
        for (let index = 0; index < showTier; index++)  <AddButton showTier={showTier} /> 
      </div>
    </div>
  </div>
}
// 

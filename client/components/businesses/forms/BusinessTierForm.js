import React, {useState} from 'react'

export default function BusinessTierForm({ handlePerkChange, handleTierChange, tierFormData, perkFormData, setTierFormData, setPerkFormData, handleTierPerkSubmit }) {

  function addTier() {
    setTierFormData([...tierFormData, {price: 0, name: ''}])
    setPerkFormData([...perkFormData, [{perk: ''}]])
  }

  function addPerk(index) {
    setPerkFormData([...perkFormData, {perk: ''}])
    const newPerksPerTier = [...perkFormData]
    newPerksPerTier[index].push({ perk: '' })
    setPerkFormData(newPerksPerTier)

  }

  // const [perksPerTier, setPerksPerTier] = useState([['perk']])

  return <div className='section' id='tiersAndPerks'>
    <h2>Add Tiers and Perks</h2>
    {tierFormData.map((tier, index) => {
      return <div key={index} className='field'>
        <TierForm index={index} handleTierChange={(event) => handleTierChange(event, index)} />
        {perkFormData[index].map((perk, index2) => {
          return <div key={index2}>
            <PerkForm index2={index2} handlePerkChange={(event) => handlePerkChange(event, index, index2)} />
          </div>
        })}
        <button className='button my-3 is-warning' onClick={() => addPerk(index)}>Add perk</button>
      </div>
    })}
    <button className='button my-3 is-warning addTierButton' onClick={addTier}>Add tier</button>
    <button className='button my-3 is-warning' onClick={handleTierPerkSubmit}>Save</button>
  </div>

}

function TierForm({index, handleTierChange}) {
  return <div className='control'> 
    <div className='control tierName'> 
      <p className='label'>Tier {index + 1}</p>
      <input className='input' onChange={(event) => handleTierChange(event, index)} placeholder='Tier name' name='name'></input>
    </div>
    <div className='control tierPrice'>
      <input className='input' onChange={(event) => handleTierChange(event, index)} placeholder='Tier price' name='price'></input>
    </div> 
  </div> 
}

function PerkForm({index2, handlePerkChange}) {
  return <div className='control'>
    <p className='label'>Perk {index2 + 1}</p>
    <input className='input' onChange={(event => handlePerkChange(event, index2))} placeholder='Perk details' name='perk'></input>
  </div>
}


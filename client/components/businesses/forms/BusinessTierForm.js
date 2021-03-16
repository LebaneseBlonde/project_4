import React, {useState} from 'react'

export default function BusinessTierForm({ handlePerkChange, handleTierChange, tierFormData, perkFormData, setTierFormData, setPerkFormData }) {

  function addTier() {
    setTierFormData([...tierFormData, {price: 0, name: ''}])
  }

  function addPerk() {
    setPerkFormData([...perkFormData, {perk: ''}])
  }

  return <div>
    {tierFormData.map((tier, index) => {
      // const perkToMap = ['perk']
      return <div key={index}>
        <TierForm index={index} handleTierChange={handleTierChange} />
        {perkFormData.map((perk, index) => {
          return <div key={index}>
            <PerkForm index={index} handlePerkChange={handlePerkChange} />
          </div>
        })}
      </div>
    })}
    <button onClick={addPerk}>Add perk</button>
    <button onClick={addTier}>Add tier</button>
  </div>

}

function TierForm({index, handleTierChange}) {
  return <div> 
    <p>Tier {index + 1}</p>
    <input onChange={(event) => handleTierChange(event, index)} placeholder='Tier name' name='name'></input>
    <input onChange={(event) => handleTierChange(event, index)} placeholder='Tier price' name='price'></input>
  </div> 
}

function PerkForm({index, handlePerkChange}) {
  return <div>
    <p>Perk {index + 1}</p>
    <input onChange={(event => handlePerkChange(event, index))} placeholder='Perk details' name='perk'></input>
  </div>
}


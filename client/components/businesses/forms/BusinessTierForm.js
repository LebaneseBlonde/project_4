import React, {useState} from 'react'

export default function BusinessTierForm({ handlePerkChange, handleTierChange, tierFormData, perkFormData, setTierFormData, setPerkFormData, handleTierPerkSubmit }) {

  function addTier() {
    setTierFormData([...tierFormData, {price: 0, name: ''}])
    setPerksPerTier([...perksPerTier, ['perk']])
  }

  function addPerk(index) {
    setPerkFormData([...perkFormData, {perk: ''}])
    const newPerksPerTier = [...perksPerTier]
    newPerksPerTier[index].push('perk')
    setPerksPerTier(newPerksPerTier)
  }

  const [perksPerTier, setPerksPerTier] = useState([['perk']])

  return <div>
    {tierFormData.map((tier, index) => {
      return <div key={index}>
        <TierForm index={index} handleTierChange={handleTierChange} />
        {perksPerTier[index].map((perk, index2) => {
          return <div key={index2}>
            <PerkForm index2={index2} handlePerkChange={handlePerkChange} />
          </div>
        })}
        <button onClick={() => addPerk(index)}>Add perk</button>
      </div>
    })}
    <button onClick={addTier}>Add tier</button>
    <button onClick={handleTierPerkSubmit}>Register</button>
  </div>

}

function TierForm({index, handleTierChange}) {
  return <div> 
    <p>Tier {index + 1}</p>
    <input onChange={(event) => handleTierChange(event, index)} placeholder='Tier name' name='name'></input>
    <input onChange={(event) => handleTierChange(event, index)} placeholder='Tier price' name='price'></input>
  </div> 
}

function PerkForm({index2, handlePerkChange}) {
  return <div>
    <p>Perk {index2 + 1}</p>
    <input onChange={(event => handlePerkChange(event, index2))} placeholder='Perk details' name='perk'></input>
  </div>
}


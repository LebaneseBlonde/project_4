import React, {useState} from 'react'

export default function BusinessTierForm({ handlePerkChange, handleTierChange, tierFormData, perkFormData, setTierFormData, setPerkFormData, handleTierPerkSubmit }) {

  function addTier() {
    setTierFormData([...tierFormData, {price: 0, name: ''}])
    setPerkFormData([...perkFormData, [{perk: ''}]])
    // console.log(perkFormData);
  }

  function addPerk(index) {
    setPerkFormData([...perkFormData, {perk: ''}])
    const newPerksPerTier = [...perkFormData]
    newPerksPerTier[index].push({ perk: '' })
    setPerkFormData(newPerksPerTier)
    // console.log(perkFormData);

  }

  // const [perksPerTier, setPerksPerTier] = useState([['perk']])

  return <div>
    {tierFormData.map((tier, index) => {
      return <div key={index}>
        <TierForm index={index} handleTierChange={(event) => handleTierChange(event, index)} />
        {perkFormData[index].map((perk, index2) => {
          return <div key={index2}>
            <PerkForm index2={index2} handlePerkChange={(event) => handlePerkChange(event, index, index2)} />
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


import React from 'react'

export default function BusinessFundForm({handleFundChange, handleFundSubmit, fundFormData}) {
  const inputFields = [ 'subscription', 'fund_goal', 'funds_raised', 'description' ]
  
  return <div className='section'>
    <h2>Register a Fund</h2>
    <form onSubmit={handleFundSubmit}>
      {inputFields.map(field => {
          return <div key={field} className="field">
            <label className="label">
              {(field[0].toUpperCase() + field.slice(1)).replace('_', ' ')}
            </label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={fundFormData[field]}
                onChange={handleFundChange}
                name={field}
              />
            </div>
          </div>
        }
      )}
      <button className="button my-3 is-warning">Add Fund</button>
    </form>
  </div>
}
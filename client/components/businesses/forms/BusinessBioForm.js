import React, { useEffect, useState } from 'react'

const inputFields = ['name', 'address_1', 'address_2', 'address_city', 'address_postcode', 'category', 'bio', 'image', 'established', 'email', 'password']

export default function BusinessBioForm({ handleBioChange, handleBioSubmit, bioFormData }) {
  return <div className='section'>
    <form onSubmit={handleBioSubmit}>
      {inputFields.map(field => {

        if (field === 'password') {

          return <div key={field} className="field">
            <label className="label">
              {field[0].toUpperCase() + field.slice(1)}
            </label>
            <div className="control">
              <input
                className="input"
                type="password"
                value={bioFormData[field]}
                onChange={handleBioChange}
                name={field}
              />
            </div>
          </div>
        } else {

          return <div key={field} className="field">
            <label className="label">
              {field[0].toUpperCase() + field.slice(1)}
            </label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={bioFormData[field]}
                onChange={handleBioChange}
                name={field}
              />
            </div>
          </div>
        }
      })}
      <button className="button mt-5 is-warning">Register</button>
    </form>
  </div>
}
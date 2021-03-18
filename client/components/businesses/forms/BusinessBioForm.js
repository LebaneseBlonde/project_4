import React, { useEffect, useState } from 'react'

const inputFields = ['name', 'address_1', 'address_2', 'address_city', 'address_postcode', 'category', 'bio', 'image', 'established', 'email', 'password']

export default function BusinessBioForm({ handleBioChange, handleBioSubmit, bioFormData }) {
  return (
    <div className="section">
      <form onSubmit={handleBioSubmit}>
        <h2>Register new business</h2>
        {inputFields.map((field) => {
          if (field === "password") {
            return (
              <div key={field} className="field">
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
            );
          } else {
            return (
              <div key={field} className="field">
                <label className="label">
                  {(field[0].toUpperCase() + field.slice(1)).replace('_', ' ')}
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
            );
          }
        })}
        <button className="button my-3 is-warning">Register Business</button>
      </form>
    </div>
  );
}
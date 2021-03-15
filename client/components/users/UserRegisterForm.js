import React from 'react'

const inputFields = ['username', 'email', 'password']

export default function UserRegisterForm({ formData, handleChange, handleSubmit}) {

  return <div className='section'>
    <form onSubmit={handleSubmit}>
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
                value={formData[field]}
                onChange={handleChange}
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
                value={formData[field]}
                onChange={handleChange}
                name={field}
              />
            </div>
          </div>
        }
      })}
      <button className="button mt-5 is-warning">Submit</button>
    </form>
  </div>
}
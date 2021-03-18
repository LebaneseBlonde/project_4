import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function EndorsementsSection({ business, loading, isBusiness, updateBusiness}) {
  if (loading) return <div><p>loading</p></div>
  
  const [text, setText] = useState({content: ''})

  function updateText(event) {
    setText({...text, [event.target.name]: event.target.value})
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const token = localStorage.getItem('token')
    try {
      const {data} = await axios.post(`/api/business/${business.id}/funds/${business.fund[0].id}/endorsements`, text, {
        headers: { Authorization: `Bearer ${token}`}
      })
      updateBusiness(data)
      setText({content: ''})
    } catch(err) {
      console.log(err)
    }
  }

  return <div id="endorsements" className="fullwidth">
    <div className="container section">
      <h2><strong>Endorsements</strong></h2>
      {business.fund[0].endorsements.map(endorsement => {
        return <div className="endorsementComment" key={endorsement.id}>
          <p>{endorsement.content}</p>
        </div>
      })}
      <article className="media">
        <div className="media-content">
          <div className="field">
            <p className="control">
              <textarea
                className="textarea"
                placeholder="Make a comment.."
                onChange={(event) => updateText(event)}
                value={text.content}
                name='content'
              >
                {text}
              </textarea>
            </p>
          </div>
          <div className="field">
            <div className="control">
              <button
                onClick={(event) => handleSubmit(event)}
                className="button is-warning"
              > Send </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
}
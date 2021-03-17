import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function UpdatesSection({business, loading}) {

  if (loading) {
    return <div>
      Loading
    </div>
  }

  const [updates, updateUpdates] = useState([])
  const [fullText, setFullText] = useState(0.1)

  if (business.fund[0].updates) {
    useEffect(() => {
      updateUpdates(business.fund[0].updates)
    }, [])
  }

  function toggleText(index) {
    fullText !== index ? setFullText(index) : setFullText(0.1)
  }
  
  return <>
    {updates.length > 0 && <div id='updateSection'>
      
      <h2 className='businessSectionTitle'><strong>Updates</strong></h2>

      {updates.map((update, index) => {
        
        return <div key={index} className='update'>

          <span><strong>{business.name}, </strong></span>
          <span>{String(new Date(update.created_on)).substr(0, 15)}</span>

          <h3><strong>{update.title}</strong></h3>

          {fullText !== index &&
          <p>{update.content.substr(0, 130)}...</p>}

          {fullText === index && 
          <p>{update.content}</p>}

          {fullText !== index &&
          <a onClick={() => toggleText(index)}>read more...</a>}
          {fullText === index &&
          <a onClick={() => toggleText(index)}>Hide</a>}

        </div>
      })}
    </div>}
  </>
}
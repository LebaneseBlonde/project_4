import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function EndorsementsSection({ business, loading, isBusiness}) {
  if (loading) return <div><p>loading</p></div>
  return <div>
    {business.fund[0].endorsements.map(endorsement => {
      return <div key={endorsement.id}>
        <div>{endorsement.content}</div>
      </div>
    })}
  </div>
}
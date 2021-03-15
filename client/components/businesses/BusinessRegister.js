import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import BusinessBioForm from './forms/BusinessBioForm'
import BusinessFundForm from './forms/BusinessFundForm'
import BusinessTierForm from './forms/BusinessTierForm'

export default function BusinessRegister() {

  return <div>
    <BusinessBioForm />
  </div>
}
import React from 'react'
import FreelancerHeader from './FreelancerHeader'
import FreelancerInfo from './FreelancerInfo'

import '../index.css'

const FreelancerProfile = () => {
  return (
    <>
    <div className='bg-blue-200 min-h-screen p-5'>

      <FreelancerHeader />
      <FreelancerInfo />
    </div>
    </>
  )
}

export default FreelancerProfile;
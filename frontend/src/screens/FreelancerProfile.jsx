import components from "../components";

const { FreelancerHeader, FreelancerInfo } = components;

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
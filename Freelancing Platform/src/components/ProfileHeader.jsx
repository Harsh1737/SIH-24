import React from 'react';
import svg from '../assets/svg.jpg'
function ProfileHeader() {
  return (
    <div className="h-20 flex justify-between items-center p-4 bg-white rounded-md shadow">
      <div className="text-2xl font-bold text-blue-600">logo</div>
      <div className="flex-1 mx-4">
        <input 
          type="text" 
          placeholder="Search" 
          className="w-full p-2 border border-gray-300 rounded-full"
        />
      </div>
      <div className=" flex flex-wrap space-x-6 font-semibold">
        <div className='mt-2'><a href="#" className="text-blue-600">Find people</a></div>
        <div className='mt-2'><a href="#" className="text-blue-600">Messages</a></div>
        <div className='mt-2'><a href="#" className="text-blue-600">My Contacts</a></div>
        <div ><a href="#" className="text-blue-600">
            <img className=' rounded-full h-10 w-10' src={svg} alt="" />
            </a></div>
        {/* <div className='mb-4 w-10 h-10  bg-zinc-500 rounded-full  items-center justify-between'><a href="#" className="text-blue-600">
            <img className='mx-1  h-8 w-8' src="https://www.svgrepo.com/show/384420/account-add-avatar-person-profile-user.svg" alt="" />
            </a></div> */}
      </div>
    </div>
  );
}

export default ProfileHeader;

import images from '../assets'
import '../index.css'

const { svg } = images

function ClientHeader() {
  return (
    <div className="h-20 flex flex-col md:flex-row justify-between items-center p-4 bg-white rounded-md shadow">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600 mb-2 md:mb-0">
        logo
      </div>
      
      {/* Search Bar */}
      <div className="flex-1 mx-4 mb-2 md:mb-0">
        <input 
          type="text" 
          placeholder="Search" 
          className="w-full p-2 border border-gray-300 rounded-full"
        />
      </div>
      
      {/* Navigation Links and Profile */}
      <div className="flex flex-wrap space-x-4 md:space-x-6 font-semibold">
        <div className='mt-2'><a href="#" className="text-blue-600">Find people</a></div>
        <div className='mt-2'><a href="#" className="text-blue-600">Messages</a></div>
        <div className='mt-2'><a href="#" className="text-blue-600">My Contacts</a></div>
        <div>
          <a href="#" className="text-blue-600">
            <img className='rounded-full h-10 w-10' src={svg} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ClientHeader;


const post=123;
import '../index.css'

const ClientInfo = () => {
  return (
    <div className='bg-white rounded mt-3 h-[500px]'>

        <div className='ml-2 flex items-center h-52 w-full  '>

            <div className='w-[500px]'>
             <img  src="../assets/iii.jpg"
             alt="Profile"
                className=" ml-3 mt-3 mb-3 w-[150px] h-[150px] mx-auto rounded-full" />
            </div>

            <div className='ml-10 w-[700px]'>
            <h4>Community Member</h4>
            <h1 className='text-2xl font-bold my-1'>Jenny Sebastian</h1>
            <h4>Member Since : March 22, 2020</h4>
            </div>

            <div className="ml-10 w-[1px] h-44 bg-gray-200 "></div>

            <div className='ml-4 '>
                <h1 className='font-bold text-2xl'>Client Story</h1>
                <p className='w-[800px]'>Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Incidunt eius, minima animi aliquid ad voluptates
                 adipisicing elit. Incidunt eius, minima animi aliquid ad voluptates
                 adipisicing elit. Incidunt eius, minima animi aliquid ad voluptates
                 adipisicing elit. Incidunt eius, minima animi aliquid ad voluptates
                  magnam iste delectus reprehenderit quaerat pariatur iusto quia minus necessitatibus velit maxime nesciunt tempore deleniti.</p>
                 </div>
        </div>
        {/* <hr />
        <div className='font-bold text-2xl my-8 ml-4'>Total Post</div> */}
        <hr />

        <div className='flex gap-24 ml-16'>
            <div className='flex ' >
                <div className='ml-6'>
                    <h1 className='font-bold text-2xl mt-6'>Latest Post</h1>
                    <ul class="list-disc list-inside ">
                        <li>Client is passionate about design</li>
                        <li>Client follows X,X on Linkdin</li>
                        <li>Client is very active on Instagram</li>
                        <li>Participate in  meetings</li>
                    </ul>
                    </div>
                {/* <div >
                    <h1 className='font-bold text-2xl'>Accepted Solution</h1>
                    <ul class="list-disc list-inside ">
                        <li>Client is passionate about design</li>
                        <li>Client follows X,X on Linkdin</li>
                        <li>Client is very active on Instagram</li>
                        <li>Participate in  meetings</li>
                    </ul>
                    </div> */}
            </div>

            {/* <div className='flex ml-10 gap-10 '> */}
                 <div >
                    <h1 className='font-bold text-2xl mt-6'>Client Interest</h1>
                    <ul class="list-disc list-inside ">
                        <li>Client is passionate about design</li>
                        <li>Client follows X,X on Linkdin</li>
                        <li>Client is very active on Instagram</li>
                        <li>Participate in  meetings</li>
                    </ul>
                 </div>
                 <div >
                    <h1 className='font-bold text-2xl mt-6'>Client Pain Point</h1>
                        <ul class="list-disc list-inside ">
                        <li>Lack of proper time-management</li>
                        <li>Expensive design Fees</li>
                        <li>Poor response time</li>
                        <li>Ineffective marketing designs</li>
                    </ul>
                    </div>
                    
            {/* </div> */}
            
        </div>
        <div className=' ml-20 mt-10 '>
            <div className='font-bold text-2xl'>Post : {post}</div>
            
            {/* <div className='mt-3'>123</div> */}

        </div>
    </div>
  )
}

export default ClientInfo;
import image from '../assets/jobs.png'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
import image5 from '../assets/image5.jpg'
import image6 from '../assets/image6.png'
import image7 from '../assets/image7.png'
import image8 from '../assets/image8.png'
import image9 from '../assets/image9.png'
import image10 from '../assets/image10.png'
import image11 from '../assets/image11.png'
import image12 from '../assets/image12.png'
import image13 from '../assets/image13.png'
import image14 from '../assets/image14.png'
import image15 from '../assets/image15.png'
import image16 from '../assets/image16.png'
import image17 from '../assets/image17.png'
import image18 from '../assets/image18.png'
import image19 from '../assets/image19.png'
import image20 from '../assets/image21.png'
import image21 from '../assets/im.jpg'

import { Link } from 'react-router-dom'


const images = [image1, image2, image3, image4, image5, image7, image6, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20];
function Home() {
    return (
        <>
            <div className='flex flex-row items-start'>

                <div
                    className="w-1/2 h-[400px] bg-center bg-cover bg-no-repeat"
                    style={{ backgroundImage: `url(${image21})` }}
                >
                </div>

                <div className="w-1/2 p-8">
                    <h1 className="font-serif text-5xl text-gray-600 mt-8 text-shadow-lg">
                        Freelancer HomePage
                    </h1>
                    <p className="mt-4 text-gray-700">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit, quod animi facilis velit dolores provident earum distinctio hic non repellat, voluptatem itaque.
                    </p>
                    <div className="mt-8 flex justify-end">
                        <Link to="presignup">
                        <button className="bg-blue-400 text-white font-semibold mr-6 py-1 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">
                            Create Account
                        </button>
                        </Link>
                    </div>

                </div>
            </div>


            <div className="flex flex-wrap gap-4 m-4 justify-around">
                <div className='w-32 h-24 border-solid border-2 border-gray-500  relative rounded-xl shadow-2xl bg-slate-100 mt-14  p-2'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-camera" viewBox="0 0 16 16">
                    <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z" />
                    <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
                </svg>
                    <h3 className='mt-2'>Photography</h3>
                </div>
                <div className='w-32 h-24 border-solid border-2 border-gray-500  relative rounded-xl shadow-2xl bg-slate-100 mt-14  p-2'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg><h3 className='mt-2'>Photography</h3></div>
                <div className='w-32 h-24 border-solid border-2 border-gray-500  relative rounded-xl shadow-2xl bg-slate-100 mt-14  p-2'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
                </svg><h3 className='mt-2'>Photography</h3></div>
                <div className='w-32 h-24 border-solid border-2 border-gray-500  relative rounded-xl shadow-2xl bg-slate-100 mt-14  p-2'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-film" viewBox="0 0 16 16">
                    <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z" />
                </svg><h3 className='mt-2'>Photography</h3></div>
                <div className='w-32 h-24 border-solid border-2 border-gray-500  relative rounded-xl shadow-2xl bg-slate-100 mt-14  p-2'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                    <path d="M 17 5 C 14.250484 5 12 7.2504839 12 10 L 12 12 L 10 12 C 7.2504839 12 5 14.250484 5 17 L 5 40 C 5 42.749516 7.2504839 45 10 45 L 33 45 C 35.749516 45 38 42.749516 38 40 L 38 38 L 40 38 C 42.749516 38 45 35.749516 45 33 L 45 10 C 45 7.2504839 42.749516 5 40 5 L 17 5 z M 17 7 L 40 7 C 41.668484 7 43 8.3315161 43 10 L 43 33 C 43 34.668484 41.668484 36 40 36 L 38 36 L 36 36 L 17 36 C 15.331516 36 14 34.668484 14 33 L 14 23 C 14 21.883334 14.883334 21 16 21 L 19 21 L 19 27 C 19 29.197334 20.802666 31 23 31 L 29 31 L 31 31 L 34 31 C 36.197334 31 38 29.197334 38 27 L 38 17 C 38 14.250484 35.749516 12 33 12 L 14 12 L 14 10 C 14 8.3315161 15.331516 7 17 7 z M 10 14 L 12 14 L 14 14 L 33 14 C 34.668484 14 36 15.331516 36 17 L 36 27 C 36 28.116666 35.116666 29 34 29 L 31 29 L 31 23 C 31 20.802666 29.197334 19 27 19 L 21 19 L 19 19 L 16 19 C 13.802666 19 12 20.802666 12 23 L 12 33 C 12 35.749516 14.250484 38 17 38 L 36 38 L 36 40 C 36 41.668484 34.668484 43 33 43 L 10 43 C 8.3315161 43 7 41.668484 7 40 L 7 17 C 7 15.331516 8.3315161 14 10 14 z M 21 21 L 27 21 C 28.116666 21 29 21.883334 29 23 L 29 29 L 23 29 C 21.883334 29 21 28.116666 21 27 L 21 21 z"></path>
                </svg><h3 className='mt-2'>Photography</h3></div>
                <div className='w-32 h-24 border-solid border-2 border-gray-500  relative rounded-xl shadow-2xl bg-slate-100 mt-14  p-2'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                    <path d="M 5 2 C 3.355469 2 2 3.355469 2 5 L 2 35 C 2 36.644531 3.355469 38 5 38 L 19 38 L 19 40 L 10 40 C 9.96875 40 9.9375 40 9.90625 40 C 9.636719 40.027344 9.386719 40.160156 9.21875 40.375 L 4.21875 46.375 C 3.976563 46.675781 3.929688 47.085938 4.097656 47.433594 C 4.265625 47.78125 4.617188 48 5 48 L 45 48 C 45.382813 48 45.734375 47.78125 45.902344 47.433594 C 46.070313 47.085938 46.023438 46.675781 45.78125 46.375 L 40.78125 40.375 C 40.589844 40.136719 40.304688 40 40 40 L 31 40 L 31 38 L 45 38 C 46.644531 38 48 36.644531 48 35 L 48 5 C 48 3.355469 46.644531 2 45 2 Z M 5 4 L 45 4 C 45.554688 4 46 4.445313 46 5 L 46 35 C 46 35.554688 45.554688 36 45 36 L 5 36 C 4.445313 36 4 35.554688 4 35 L 4 5 C 4 4.445313 4.445313 4 5 4 Z M 6 6 L 6 34 L 44 34 L 44 6 Z M 8 8 L 42 8 L 42 32 L 8 32 Z M 19.28125 11.28125 L 11.28125 19.28125 L 10.59375 20 L 11.28125 20.71875 L 19.28125 28.71875 L 20.71875 27.28125 L 13.4375 20 L 20.71875 12.71875 Z M 30.71875 11.28125 L 29.28125 12.71875 L 36.5625 20 L 29.28125 27.28125 L 30.71875 28.71875 L 38.71875 20.71875 L 39.40625 20 L 38.71875 19.28125 Z M 21 38 L 29 38 L 29 42 L 21 42 Z M 10.46875 42 L 19 42 L 19 44 L 31 44 L 31 42 L 39.53125 42 L 42.875 46 L 7.125 46 Z"></path>
                </svg><h3 className='mt-2'>Photography</h3></div>
                <div className='w-32 h-24 border-solid border-2 border-gray-500  relative rounded-xl shadow-2xl bg-slate-100 mt-14  p-2'></div>
                <div className='w-32 h-24 border-solid border-2 border-gray-500  relative rounded-xl shadow-2xl bg-slate-100 mt-14  p-2'></div>
            </div>

            <div>
                <img src={image} alt="Example" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div>
                <h2 className='font-sans font-bold text-5xl mx-14 transition-transform duration-300 hover:animate-bounce'>
                    What you can get here?
                </h2>
            </div>
            <div className="container mx-auto flex flex-wrap gap-1 justify-start "> {/* Adjust gap */}
                {/* Column 1 */}
                <div className="column w-[282px] p-1 flex flex-col gap-1 mt-10"> {/* Adjust padding and gap */}
                    <img src={images[0]} alt="Image 1" className="w-full h-auto rounded-lg grayscale transition-all duration-300 hover:grayscale-0" />

                    <img src={images[1]} alt="Image 2" className="w-full h-auto rounded-lg grayscale transition-all duration-300 hover:grayscale-0" />
                    <img src={images[2]} alt="Image 3" className="w-full h-auto rounded-lg grayscale transition-all duration-300 hover:grayscale-0" />
                    <img src={images[3]} alt="Image 4" className="w-full h-auto rounded-lg grayscale transition-all duration-300 hover:grayscale-0" />
                    <img src={images[7]} alt="Image 8" className="w-full h-auto rounded-lg grayscale transition-all duration-300 hover:grayscale-0" />

                </div>
                {/* Column 2 */}
                <div className="column w-[282px] p-1 flex flex-col gap-1 mt-10"> {/* Adjust padding and gap */}
                    <img src={images[4]} alt="Image 5" className="w-full h-auto rounded-lg grayscale transition-all duration-300 hover:grayscale-0" />
                    <img src={images[5]} alt="Image 6" className="w-full h-auto rounded-lg grayscale transition-all duration-300 hover:grayscale-0" />
                    <img src={images[6]} alt="Image 7" className="w-full h-auto rounded-lg grayscale transition-all duration-300 hover:grayscale-0" />
                    <img src={images[19]} alt="Image 4" className="w-full h-auto rounded-lg grayscale transition-all duration-300 hover:grayscale-0" />
                </div>
                {/* Column 3 */}
                <div className="column w-[282px] p-1 flex flex-col gap-1 mt-10"> {/* Adjust padding and gap */}
                    <img src={images[8]} alt="Image 9" className="w-full h-auto rounded-lg grayscale transition-all duration-300 hover:grayscale-0" />
                    <img src={images[9]} alt="Image 10" className="w-full h-auto rounded-lg grayscale transition-all duration-300 hover:grayscale-0" />
                    <img src={images[10]} alt="Image 11" className="w-full h-auto rounded-lg grayscale transition-all duration-300 hover:grayscale-0" />
                    <img src={images[11]} alt="Image 12" className="w-full h-auto rounded-lg grayscale transition-all duration-300 hover:grayscale-0" />
                    <img src={images[17]} alt="Image 4" className="w-full h-auto rounded-lg grayscale transition-all duration-300 hover:grayscale-0" />
                </div>
                {/* Column 4 */}
                <div className="column w-[282px] p-1 flex flex-col gap-1 mt-10"> {/* Adjust padding and gap */}
                    <img src={images[12]} alt="Image 13" className="w-full h-auto rounded-lg grayscale transition-all duration-300 hover:grayscale-0" />
                    <img src={images[13]} alt="Image 14" className="w-full h-auto rounded-lg grayscale transition-all duration-300 hover:grayscale-0" />
                    <img src={images[14]} alt="Image 15" className="w-full h-auto rounded-lg grayscale transition-all duration-300 hover:grayscale-0" />
                    <img src={images[15]} alt="Image 16" className="w-full h-auto rounded-lg grayscale transition-all duration-300 hover:grayscale-0" />
                    <img src={images[18]} alt="Image 4" className="w-full h-auto rounded-lg grayscale transition-all duration-300 hover:grayscale-0" />
                </div>
            </div>

        </>
    )
}

export default Home

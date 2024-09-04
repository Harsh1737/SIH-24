const CustProfile = () => {
  return (
    <>
      <div className="h-[200px] w-full bg-gray-400"></div>
      <div className="mx-auto flex justify-center items-center h-[500px] ">
        <div className="col-span-6 md:col-span-12">
          <div className="flex gap-4">
            <div className="w-1/3 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl">
              <div className=" text-center text-white p-5">
                <div className="mb-4">
                  <img
                    src="https://img.icons8.com/bubbles/100/000000/user.png"
                    alt="User Profile Image"
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                </div>
                <h6 className="font-bold">Harsh</h6>
                <p className="mt-9">Web Designer</p>
              </div>
            </div>
            <div className="w-3/4">
              <div className="card-block p-4">
                <h6 className="mb-4 pb-2 border-b border-gray-200 font-semibold">
                  Information
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-1/2">
                    <p className="mb-2 font-semibold">Email</p>
                    <p className="text-gray-500">rntng@gmail.com</p>
                  </div>
                  <div className="w-1/2">
                    <p className="mb-2 font-semibold">Phone</p>
                    <p className="text-gray-500">98979989898</p>
                  </div>
                </div>
                <h6 className="mb-4 mt-4 pb-2 border-b border-gray-200 font-semibold">
                  Projects
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-1/2">
                    <p className="mb-2 font-semibold">Recent</p>
                    <p className="text-gray-500">Sam Disuja</p>
                  </div>
                  <div className="w-1/2">
                    <p className="mb-2 font-semibold">Most Viewed</p>
                    <p className="text-gray-500">Dinoter husainm</p>
                  </div>
                </div>
                <ul className="social-link list-unstyled mt-4 mb-2">
                  <li>
                    <a
                      href="#!"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="facebook"
                    >
                      <i className="mdi mdi-facebook feather icon-facebook facebook text-2xl"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="twitter"
                    >
                      <i className="mdi mdi-twitter feather icon-twitter twitter text-2xl"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="instagram"
                    >
                      <i className="mdi mdi-instagram feather icon-instagram instagram text-2xl"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustProfile;

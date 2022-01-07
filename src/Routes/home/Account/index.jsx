import React from "react";
import { useSelector } from "react-redux";
import Input from "../components/Input";

function Index() {
  const { user } = useSelector((state) => state.users);
  return (
    <div className="  my-3 w-full h-auto">
      <div className=" bg-white ">
        <div className="flex items-baseline  relative w-full lg:h-48  h-32">
          <img
            src="https://picsum.photos/200/300"
            className="h-32 w-32 rounded-full z-40  mt-16 lg:mt-32 ml-2 border-4 border-white object-cover shadow overflow-hidden"
            alt="profile"
          />

          <img
            className="absolute inset-0   h-full w-full object-cover"
            src="https://picsum.photos/1100/200"
            alt=""
          />
        </div>

        <section className="w-full lg:px-3 h-auto mt-16 md:mt-0 md:flex-row flex flex-col pb-4 ">
          <div className="flex-1 md:mt-16 ">
            <p className="font-bold text-xl text-gray-900">
              Name:{" "}
              <span className="font-normal text-gray-600 text-md">
                {user?.name}
              </span>
            </p>
            <p className="font-bold text-xl text-gray-900">
              Email:{" "}
              <span className="font-normal text-gray-600 text-md">
                {user?.email}
              </span>
            </p>
          </div>
          <div className="flex-1 mt-4">
            <h2 className="text-start md:text-center text-2xl font-bold text-gray-900">
              Bio
            </h2>
            <p className="px-3 py-4 bg-gray-200 text-gray-600">{user?.bio}</p>
          </div>
        </section>
      </div>

      <main className="pb-8 ">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-x-4">
          <form className="px-3 md:px-5 bg-white mt-4 py-8 col-span-1">
            <h2 className="text-3xl text-center">User Info</h2>
            <Input label="First Name" />
            <Input label="Last Name" />
            <Input label="Email" />
            <Input label="Phone" />
            <div className="w-full flex justify-end py-7 px-5 ">
              <button
                type="Submit"
                className="bg-primary text-white rounded px-7 py-3"
              >
                Submit
              </button>
            </div>
          </form>
          <form className="px-3  md:px-5  bg-white mt-4 py-8 col-span-1">
            <h2 className="text-3xl text-center">Security Info</h2>
            <Input label="Old password" />
            <Input label="New Password" />
            <Input label="Confirm Password" />
            <div className="w-full flex justify-end py-7 px-5 mt-24 ">
              <button
                type="Submit"
                className="bg-primary text-white rounded px-7 py-3"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <form className="px-3 bg-white mt-4 py-8">
          <h2 className="text-3xl text-center">More Info</h2>
          <section className="  grid grid-cols-1 md:grid-cols-2 gap-x-4 ">
            <div className="col-span-1">
              <textarea
                className="px-2 py-4  w-full md:h-full   focus:outline-indigo-700  focus:border-indigo-400 focus:bg-white mt-2 bg-gray-50 border border-indigo-300"
                placeholder="Bio"
              ></textarea>
            </div>
            <div className="col-span-1">
              <div class="flex w-full  items-center justify-center text-indigo-700 mt-3">
                <label class=" flex w-full flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                  <svg
                    class="w-8 h-8"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                  </svg>
                  <span class="mt-2 text-base leading-normal">
                    Select your cv
                  </span>
                  <input type="file" class="hidden" />
                </label>
              </div>
              <div class="flex w-full  items-center justify-center text-indigo-700 mt-3">
                <label class=" flex w-full flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                  <svg
                    class="w-8 h-8"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                  </svg>
                  <span class="mt-2 text-base leading-normal">
                    Select your Testimonials
                  </span>
                  <input type="file" class="hidden" />
                </label>
              </div>
              <div class="flex w-full  items-center justify-center text-indigo-700 mt-3">
                <label class=" flex w-full flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                  <svg
                    class="w-8 h-8"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                  </svg>
                  <span class="mt-2 text-base leading-normal">
                    Select your Certificates
                  </span>
                  <input type="file" class="hidden" />
                </label>
              </div>
            </div>
          </section>

          <div className="w-full flex justify-end py-7 px-5 ">
            <button
              type="Submit"
              className="bg-primary text-white rounded px-7 py-3"
            >
              Submit
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Index;

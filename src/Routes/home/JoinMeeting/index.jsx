import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import { KeyIcon } from "@heroicons/react/solid";
function Index() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    /**
     * TODO remrmber to verify meeting id before
     */

    navigate(`/meeting/${formData?.meetingID}`);
  };

  return (
    <form onSubmit={handleSubmit} className="px-3 py-2">
      <main className="w-full h-full bg-white px-4 py-5">
        <h1 className="text-center text-3xl text-gray-700">Welcome Lincoln</h1>

        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2">
          <div className="col-span-1">
            <ul className="text-gray-600 list-disc px-5  md:mt-4">
              <li className="mt-2 text-sm tranking-wide ">
                This platform will enable you join an online meeting
              </li>
              <li className="mt-2 text-sm tranking-wide ">
                Check your email address for the meeting ID
              </li>
              <li className="mt-2 text-sm tranking-wide ">
                Check your meeting list for your meeting ID
              </li>
              <li className="mt-2 text-sm tranking-wide ">
                If you have not scheduled an appointment do so in the the book
                appointment section
              </li>
            </ul>
            <div className="mt-12 text-center text-gray-600">
              <p>Please enter your meeting ID to join the meeting</p>

              <div className="w-full flex justify-center flex-col-reverse md:justify-between md:flex-row items-center md:px-10 mt-12">
                <button
                  type="button"
                  onClick={() => navigate("/dashboard/apointment")}
                  className="bg-primary text-white px-9 py-3 rounded  w-4/6 md:w-2/6 lg:w-3/6 mt-3 md:mt-0"
                >
                  New Meeting
                </button>
                <div className="bg-gray-100 border border-primary px-5 py-3 lg:ml-4 flex justify-between items center">
                  <KeyIcon className="h-6 fill-current text-primary" />
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, meetingID: e.target.value })
                    }
                    type="text"
                    placeholder="meeting ID "
                    className=" placeholder-gray-500 text-sm w-full
           focus:outline-none bg-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 mt-4 lg:mt-0">
            <div className="col-span-1 w-full h-full  px-2 md:pb-0 pb-5 md:px-0 md:rounded-sm ">
              <div className="h-full w-full bg-blue-200 shadow-lg rounded-lg md:rounded-none   px-4 py-4">
                <img src={logo} className="h-32 object-cover mx-auto" />
                <h2 className="text-center text-primary font-bold text-xl">
                  Select Service
                </h2>

                <p className="text-center mt-3 px-2 text-sm text-gray-500">
                  Please select a service for which you want to schedule an
                  appointment
                </p>

                <h2 className="mt-32 text-primary text-center font-bold text-md">
                  Questions?
                </h2>
                <p className="text-gray-500 text-center text-sm tranking-wide">
                  Call +254717 296 275 for help
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </form>
  );
}

export default Index;

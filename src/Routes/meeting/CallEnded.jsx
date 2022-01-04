import React from "react";
import PrimaryButton from "../components/Button";
import home from "../../assets/images/goHome.svg";

function CallEnded() {
  let loading = false;
  return (
    <div className="h-screen w-screen bg-gray-200 p-4 lg:p-6 xl:p-10 ">
      <div className=" bg-white  h-full w-full px-3 py-10 ">
        <h1 className="text-3xl  font-bold text-gray-800 text-center ">
          Call Ended!
        </h1>

        <div className="w-full h-4/5 grid grid-cols-1 grid-rows-2 mt-6 space-y-6  lg:grid-cols-2 lg:grid-rows-1 lg:space-y-0 lg:gap-x-4">
          <div className="col-span-1 row-span-1">
            <textarea
              name=""
              id=""
              placeholder="Write us feedback?"
              className="bg-gray-200 h-4/5 w-full px-2 py-4 "
            ></textarea>
            <div className="flex mt-2 justify-center">
              <PrimaryButton text="Sent feedback" type="submit" />
            </div>
          </div>

          <div className="col-span-1 row-span-1 flex justify-center flex-col ">
            <img className="object-contain h-4/5 " src={home} alt="" />
            <div className="w-full flex justify-center mt-2">
              <button
                className={`bg-${"primary"}   ${
                  loading
                    ? "cursor-not-allowed"
                    : "transition ease-in-out duration-500 hover:bg-white  font-semibold hover:text-primary hover:underline"
                }  px-7 rounded py-3 text-white`}
                type="button"
              >
                Back to home page
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallEnded;

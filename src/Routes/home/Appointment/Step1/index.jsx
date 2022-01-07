import CheckOut from "./../CheckOut";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { ArrowCircleRightIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { getServiceType } from "../../../../features/Slice/apointment/apointment.async";

export default function Example() {
  const info = useSelector((state) => state.info);

  const { loading, message, success, error } = info;
  const dispatch = useDispatch();

  useEffect(() => {
    //get services and loc price
    dispatch(getServiceType());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-full px-4 md:px-6 border border-t  bg-white py-6"
    >
      <CheckOut step1 />
      <h1 className="mt-4 mb-3 text-2xl font-bold  tranking-wide text-center">
        Service Selection
      </h1>

      <div className="w-full mt-6 py-4 flex justify-end">
        <button
          type="submit"
          className="bg-primary text-lg px-4 py-3 flex items-center justify-between rounded text-white"
        >
          Next <ArrowCircleRightIcon className="ml-4 h-6 " />
        </button>
      </div>
    </form>
  );
}

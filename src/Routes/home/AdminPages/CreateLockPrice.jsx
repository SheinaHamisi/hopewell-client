import React, { useState } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import Input from "../components/Input";
import { toast } from "react-toastify";
function CreateLockPrice() {
  const [formData, setFormData] = useState({});
  const changeHandler = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };
  console.log(formData);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData?.min_price >= formData?.max_price) {
      return toast.error("Max price must be greater than min price");
    }
  };

  return (
    <div className="px-4 xl:px-6 py-5 bg-gray-50 w-full h-full">
      <h1 className="text-2xl text-gray-800 font-semibold">
        Create Meeting lications{" "}
      </h1>
      <div className=" flex justify-between flex-col-reverse md:flex-row items-center md:items-baseline mt-2">
        <div className="mt-8 md:mt-0">
          <p className="w-full text-sm text-gray-500 md:w-4/5 lg:w-4/6 mt-2">
            Add a new meeting location. This might be online physical .etc also
            set the maximum and minimum prices a therapist can set for the
            location. Additionally set the commision for the price in percentage
            between 1-100 only numbers
          </p>
        </div>
        <div className="w-full border lg:w-4/5 border-primary px-4 py-4 rounded-sm flex justify-between items-center">
          <SearchIcon className="h-4 " />
          <input
            type="text"
            placeholder="search"
            className="w-full bg-transparent h-full placeholder-gray-500 text-sm 
           focus:outline-none  focus:border-none"
          />
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white mt-3 px-3 py-4 grid grid-cols-2 gap-x-8"
      >
        <Input
          name="location"
          label="Location Name"
          type="text"
          change={changeHandler}
          require={true}
          placeholder="Location Name Must be Unique"
        />
        <Input
          label="Commission"
          name="commision"
          type="number"
          require={true}
          change={changeHandler}
          placeholder="Percentage Commision "
        />
        <Input
          label="Max price"
          name="max_price"
          type="number"
          require={true}
          change={changeHandler}
          placeholder="Max price in Shillings "
        />
        <Input
          name="min_price"
          label="Min Price"
          require={true}
          change={changeHandler}
          type="number"
          placeholder="Min price in Shillings "
        />
        <div className="mt-4 w-full flex justify-end col-span-2">
          <button
            type="submit"
            className="bg-indigo-500 text-white px-5 rounded py-3"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateLockPrice;

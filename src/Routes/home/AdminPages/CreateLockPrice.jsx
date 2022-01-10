import React, { useState } from "react";

import Input from "../components/Input";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  createLockPrice,
  getOneLockPrice,
  updateLockPrice,
} from "../../../features/Slice/apointment/apointment.async";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import HeaderCreate from "../components/HeaderCreate";
import Div from "../components/Div";
function CreateLockPrice() {
  return (
    <Div>
      <HeaderCreate
        title="Create Meeting lications"
        to="location-setup"
        info=" Add a new meeting location. This might be online physical .etc also
            set the maximum and minimum prices a therapist can set for the
            location. Additionally set the commision for the price in percentage
            between 1-100 only numbers"
      />

      <FORM />
    </Div>
  );
}

export default CreateLockPrice;

export const FORM = ({ setShowCreate, showCreate }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const appointment = useSelector((state) => state.appointment);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const changeHandler = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  //  fetch if we have id

  useEffect(() => {
    if (!id) return;
    let item = appointment?.lockPrice?.find((i) => i?._id === id);
    if (item) {
      setFormData(item);
    } else {
      // collect from backend
      dispatch(getOneLockPrice(id));
    }
  }, [id, appointment?.lockPrice]);

  console.log(formData);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData?.min_price >= formData?.max_price) {
      return toast.error("Max price must be greater than min price");
    }
    if (!id) {
      dispatch(createLockPrice(formData));
      setShowCreate(!showCreate);
    } else {
      // try to update

      dispatch(updateLockPrice(formData));
    }
    navigate(`/dashboard/location-setup`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white mt-3 px-3 py-4 grid grid-cols-2 gap-x-8"
    >
      <Input
        val={formData?.location}
        name="location"
        label="Location Name"
        type="text"
        change={changeHandler}
        require={true}
        placeholder="Location Name Must be Unique"
      />
      <Input
        val={formData?.commision}
        label="Commission"
        name="commision"
        type="number"
        require={true}
        change={changeHandler}
        placeholder="Percentage Commision "
      />
      <Input
        label="Max price"
        val={formData?.max_price}
        name="max_price"
        type="number"
        require={true}
        change={changeHandler}
        placeholder="Max price in Shillings "
      />
      <Input
        val={formData?.min_price}
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
  );
};

import React, { useEffect, useState } from "react";
import { FORM } from "./CreateLockPrice";
import { PlusCircleIcon, XCircleIcon } from "@heroicons/react/solid";
import Th from "../components/Th";
import Td from "../components/Td";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteLocPrice,
  getlockPrice,
} from "../../../features/Slice/apointment/apointment.async";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import Div from "../components/Div";
import Header from "../components/Header";
function LockPriceList() {
  const dispatch = useDispatch();
  const [showCreate, setShowCreate] = useState(false);
  useEffect(() => {
    // get all if
    dispatch(getlockPrice());
  }, []);
  return (
    <Div>
      <Header
        text="Location"
        num="20"
        showCreate={showCreate}
        setShowCreate={setShowCreate}
      />

      {showCreate ? (
        <FORM showCreate={showCreate} setShowCreate={setShowCreate} />
      ) : (
        <ListContainer />
      )}
    </Div>
  );
}

export default LockPriceList;

const ListContainer = () => {
  const appointment = useSelector((state) => state.appointment);

  return (
    <div className="bg-white  overflow-x-auto w-full h-auto  mt-5">
      <table className="table-auto w-full  ">
        <thead className="text-xs font-semibold uppercase w-full text-gray-400 bg-gray-50">
          <tr>
            <Th name="Location" />
            <Th name="Max Price" /> <Th name="Min Price" />
            <Th name="Commision" />
            <Th name="Created by" />
            <Th name="Created On" /> <Th name="Eddit" /> <Th name="Delete" />
          </tr>
        </thead>
        <tbody>
          {appointment?.lockPrice?.map((data) => (
            <LocKPrice key={data._id} {...data} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const LocKPrice = ({
  location,
  max_price,
  min_price,
  createdAt,
  _id,
  commision,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Delete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      dispatch(deleteLocPrice(id));
    }
  };

  return (
    <tr>
      <Td text={location} />
      <Td text={max_price} sText={"Ksh."} sColour="green" />
      <Td text={min_price} sText={"Ksh."} sColour="red" />
      <Td text={`${commision}%`} />
      <Td text={"Lincoln Kantet"} />

      <Td date={createdAt} tColour="green" />

      <td
        onClick={() => navigate(`/dashboard/location-setup/${_id}`)}
        className="p-2 whitespace-nowrap cursor-pointer"
      >
        <div className="text-lg text-center text-indigo-700 hover:underline ">
          Eddit
        </div>
      </td>
      <td
        onClick={() => Delete(_id)}
        className="p-2 whitespace-nowrap cursor-pointer"
      >
        <div className="text-lg text-center text-red-500 hover:underline">
          Delete
        </div>
      </td>
    </tr>
  );
};

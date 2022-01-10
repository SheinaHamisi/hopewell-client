import React, { useState, useEffect } from "react";
import Div from "../components/Div";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import Th from "../components/Th";
import { getAllServices } from "../../../features/Slice/apointment/apointment.async";
import Td from "../components/Td";
import { useNavigate } from "react-router-dom";
import { FORM } from "./CreateService";

function ServiceList() {
  const [showCreate, setShowCreate] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    // get services list
    dispatch(getAllServices());
  }, []);
  return (
    <Div>
      <Header
        text="Services"
        num="2"
        showCreate={showCreate}
        setShowCreate={setShowCreate}
      />
      {/* render create or list */}
      <div className="mt-9">{showCreate ? <FORM /> : <ListContainer />}</div>
    </Div>
  );
}

export default ServiceList;

export const ListContainer = () => {
  const appointment = useSelector((state) => state.appointment);

  //services
  return (
    <div className="bg-white  overflow-x-auto w-full h-auto  mt-5">
      <table className="table-auto w-full  ">
        <thead className="text-xs font-semibold uppercase w-full text-gray-400 bg-gray-50">
          <tr>
            <Th name="Service name" />
            <Th name="Created On" />
            <Th name="Eddit" />
            <Th name="Delete" />
            <Th name="View More" />
          </tr>
        </thead>
        <tbody>
          {appointment?.services?.map((data) => (
            <Service key={data._id} {...data} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Service = ({ name, createdAt, _id }) => {
  const navigate = useNavigate();
  const Delete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      // dispatch(deleteLocPrice(id));
    }
  };
  return (
    <tr>
      <Td text={name} />
      <Td date={createdAt} tColour="green" />

      <td
        onClick={() => navigate(`/dashboard/Service-type/${_id}`)}
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
      <td
        // onClick={() => navigate(`/dashboard/location-setup/${_id}`)}
        className="p-2 whitespace-nowrap cursor-pointer"
      >
        <div className="text-lg text-center  ">
          <button className="bg-primary px-4 py-2 text-white">View more</button>
        </div>
      </td>
    </tr>
  );
};

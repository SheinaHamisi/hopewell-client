import React, { useState } from "react";
import { XCircleIcon } from "@heroicons/react/outline";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  createService,
  getlockPrice,
  getOneService,
  updateService,
} from "../../../features/Slice/apointment/apointment.async";
import Div from "../components/Div";
import HeaderCreate from "../components/HeaderCreate";
import Input from "../components/Input";
import { toast } from "react-toastify";
import PrimaryButton from "../../components/Button";
import Th from "../components/Th";
import Td from "../components/Td";
function CreateService() {
  return (
    <Div>
      <HeaderCreate
        title="Create Services"
        info="Create Service name and link it to location Service Name must be Unique"
        to="Service-type"
      />
      <FORM />
    </Div>
  );
}

export default CreateService;

export const FORM = ({}) => {
  const [formData, setFormData] = useState({});
  const appointment = useSelector((state) => state.appointment);
  const [selected, setSelected] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ===== if we have id inparams
  useEffect(() => {
    // get with id
    if (!id) return;
    if (appointment?.service) {
      setFormData(appointment?.service);
      setSelected(appointment?.service?.locations_price);
      return;
    }
    dispatch(getOneService(id));
  }, [id, appointment?.service]);
  // on render get all lockPrice
  useEffect(() => {
    if (appointment?.lockPrice?.length >= 0) return;
    dispatch(getlockPrice());
  }, [id, appointment?.lockPrice]);

  const handleOnkeyDown = (e) => {
    let value = e.target.value;
    value = value.trim().toLowerCase();

    // check if this value is in the array the add to selected if not there
    let exists = appointment?.lockPrice?.find((x) => x.location === value);
    if (!exists) {
      setInputVal("");
      return toast.error("Service type does not exists");
    }

    let sel = selected;
    // before you add make sure it does not exist
    let present = selected?.find((s) => s?._id === exists?._id);
    if (present) {
      setInputVal("");
      return toast.info("Already selected");
    }

    sel.push(exists);

    setSelected(sel);
    setInputVal("");
  };
  const remove = (id) => {
    let sel = selected?.map((s) => Object.assign({}, s, { selected: false }));
    sel = sel?.filter((s) => s?._id !== id);

    setSelected(sel);
  };
  const handleSubmit = (e) => {
    if (selected?.length <= 0) {
      return toast.error("Please select atleat one service type");
    }
    let data = { ...formData, locations_price: selected };
    // data.locations_price = selected;
    if (id) {
      dispatch(updateService(data));
    } else {
      dispatch(createService(data));
    }
  };

  return (
    <div>
      {" "}
      <div className="bg-white mt-3 px-3 w-full py-4   ">
        <main className="flex w-full h-auto flex-col md:flex-row gap-x-8">
          <input
            type="text"
            name="name"
            placeholder="Please enter the service type Name"
            defaultValue={formData?.name}
            require={true}
            onChange={(e) => changeHandler(e)}
            className="w-full h-14 px-2 md:w-3/5  lg:w-3/6 xl:w-2/6  placeholder-gray-500 text-sm   focus:outline-indigo-700 border border-indigo-300"
          />

          <div
            className="w-full flex-initial flex mt-4 md:mt-0 justify-between col-span-1  items-center border border-indigo-300  py-2 
      px-4 "
          >
            <ul className="flex justify-between items-center gap-x-2">
              {selected?.map((s) => (
                <List key={s?._id} {...s} remove={remove} />
              ))}
            </ul>
            <input
              onKeyDown={(e) => e.key === "Enter" && handleOnkeyDown(e)}
              onChange={(e) => setInputVal(e.target.value)}
              value={inputVal}
              type="text"
              placeholder="Service type"
              className="bg-transparent h-full ml-3 placeholder-gray-500 text-sm w-full
           focus:outline-none focus:border-none "
            />
          </div>
        </main>
        <div className="mt-9 flex w-full justify-end col-span-3">
          <button
            onClick={() => handleSubmit()}
            className="bg-primary px-5 py-3 text-white"
          >
            {`${id ? "Update" : "Create"}`}
          </button>
        </div>
      </div>
      <div className="w-full h-auto mt-6">
        <h2 className="text-center text-lg">More info</h2>

        <table className="table-auto w-full  ">
          <thead className="text-xs font-semibold uppercase w-full text-gray-400 bg-gray-50">
            <tr>
              <Th name="Location" />
              <Th name="max_price" />
              <Th name="min_price" />
              <Th name="Commision" />
              <Th name="createdAt" />
              <Th name="updatedAt" />
            </tr>
          </thead>
          <tbody>
            {selected?.map((s) => (
              <TableRow key={s._id} {...s} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const TableRow = ({
  location,
  max_price,
  min_price,
  commision,
  createdAt,
  updatedAt,
}) => {
  return (
    <tr>
      <Td text={location} />
      <Td text={max_price} sText={"Ksh."} sColour="green" />
      <Td text={min_price} sText={"Ksh."} sColour="red" />
      <Td text={`${commision}%`} />
      <Td date={createdAt} tColour="green" />
      <Td date={updatedAt} tColour="red" />
    </tr>
  );
};

const List = ({ location, _id, remove }) => {
  return (
    <li className="bg-indigo-700 px-5 py-2 rounded text-white flex justify-between items-center">
      {location}
      <XCircleIcon
        onClick={() => remove(_id)}
        className="h-6 ml-3  cursor-pointer"
      />
    </li>
  );
};

import React, { useState } from "react";
import { PlusCircleIcon, SearchIcon } from "@heroicons/react/outline";
import { ROLE } from "../../../config/Role";
import Th from "../components/Th";
import Header from "../components/Header";
import Div from "../components/Div";
function UsersList() {
  const [search, setSearch] = useState("");
  const [userType, setUserType] = useState();
  return (
    <Div>
      <Header text="Users" num="38 Users" />

      {/* <div className="w-full mt-8  px-5  grid grid-cols-1 md:grid-cols-3 md:gap-x-10 lg:gap-x-24 ">
        <div className="px-3 py-3 text-indigo-700 bg-white border border-indigo-500 w-full rounded-full md:col-span-2 flex justify-between items-center">
          <SearchIcon className="h-6  " />
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search user"
            className="w-full h-full placeholder-gray-500 text-sm 
           focus:outline-none bg-transparent focus:border-none"
          />
        </div>
        <div className="mt-4 md:mt-0">
          <select
            onChange={(e) => setUserType(e.target.value)}
            className="w-full  shadow px-3 py-4 placeholder-gray-500 col-span-1 outline-indigo-500"
          >
            <option value="0">Select User Type</option>
            <option value={ROLE.admin}>Admin</option>
            <option value={ROLE.therapist}>Therapist</option>
            <option value={ROLE.client}>Client</option>
          </select>
        </div>
      </div> */}
      <div className="overflow-x-auto w-full h-auto px-6 mt-5 ">
        <table className="table-auto w-full ">
          <thead className="text-xs font-semibold uppercase w-full text-gray-400 bg-gray-50">
            <tr>
              <Th name="Name" />
              <Th name="Email" />
              <Th name="Phone" />
              <Th name="Role" />
              <Th name="gender" />
              <Th name="Status" />
              <Th name="View more" />
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-gray-100 overflow-y-scroll  ">
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />

            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
          </tbody>
        </table>
      </div>
    </Div>
  );
}

export default UsersList;

const User = () => {
  return (
    <tr>
      <td className="p-2 whitespace-nowrap">
        <div className="flex items-center">
          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
            <img
              className="rounded-full"
              src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-07.jpg"
              width="40"
              height="40"
              alt="Mirko Fisuk"
            />
          </div>
          <div className="font-medium text-gray-800">Mirko Fisuk</div>
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left">mirkofisuk@gmail.com</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left font-medium ">0791070041</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-lg text-center">Admin</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-lg text-center">Male</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-lg text-center text-red-600">Disabled</div>
      </td>
      <td className="p-2 whitespace-nowrap cursor-pointer">
        <div className="text-lg text-center text-indigo-700 ">More</div>
      </td>
    </tr>
  );
};

/**  */

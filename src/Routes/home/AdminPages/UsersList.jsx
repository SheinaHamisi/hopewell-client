import React, { useState } from "react";
import { PlusCircleIcon, SearchIcon } from "@heroicons/react/outline";
import { ROLE } from "../../../config/Role";
function UsersList() {
  const [search, setSearch] = useState("");
  const [userType, setUserType] = useState();
  return (
    <div className="h-full w-full bg-gray-50">
      <div className="flex justify-between items-center px-6 py-10">
        <div>
          <h1 className="text-5xl font-bold text-gray-900">Users</h1>
          <span className="text-xs text-gray-500">38 users</span>
        </div>

        <button className="px-4 py-3 bg-primary text-white font-bold flex justify-between items-center">
          <PlusCircleIcon className=" h-6 " /> Invite User
        </button>
      </div>

      <div className="w-full mt-8  px-5  grid grid-cols-1 md:grid-cols-3 md:gap-x-10 lg:gap-x-24 ">
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
      </div>
      <div class="overflow-x-auto w-full h-auto px-6 mt-5 ">
        <table class="table-auto w-full ">
          <thead class="text-xs font-semibold uppercase w-full text-gray-400 bg-gray-50">
            <tr>
              <th class="p-2 whitespace-nowrap">
                <div class="font-semibold text-left">Name</div>
              </th>
              <th class="p-2 whitespace-nowrap">
                <div class="font-semibold text-left">Email</div>
              </th>
              <th class="p-2 whitespace-nowrap">
                <div class="font-semibold text-left">Phone</div>
              </th>
              <th class="p-2 whitespace-nowrap">
                <div class="font-semibold text-left">Role</div>
              </th>
              <th class="p-2 whitespace-nowrap">
                <div class="font-semibold text-left">gender</div>
              </th>
              <th class="p-2 whitespace-nowrap">
                <div class="font-semibold text-left">Status</div>
              </th>
              <th class="p-2 whitespace-nowrap">
                <div class="font-semibold text-left">View more</div>
              </th>
            </tr>
          </thead>
          <tbody class="text-sm divide-y divide-gray-100 overflow-y-scroll  max-h-20">
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
    </div>
  );
}

export default UsersList;

const User = () => {
  return (
    <tr>
      <td class="p-2 whitespace-nowrap">
        <div class="flex items-center">
          <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
            <img
              class="rounded-full"
              src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-07.jpg"
              width="40"
              height="40"
              alt="Mirko Fisuk"
            />
          </div>
          <div class="font-medium text-gray-800">Mirko Fisuk</div>
        </div>
      </td>
      <td class="p-2 whitespace-nowrap">
        <div class="text-left">mirkofisuk@gmail.com</div>
      </td>
      <td class="p-2 whitespace-nowrap">
        <div class="text-left font-medium ">0791070041</div>
      </td>
      <td class="p-2 whitespace-nowrap">
        <div class="text-lg text-center">Admin</div>
      </td>
      <td class="p-2 whitespace-nowrap">
        <div class="text-lg text-center">Male</div>
      </td>
      <td class="p-2 whitespace-nowrap">
        <div class="text-lg text-center text-red-600">Disabled</div>
      </td>
      <td class="p-2 whitespace-nowrap cursor-pointer">
        <div class="text-lg text-center text-indigo-700 ">More</div>
      </td>
    </tr>
  );
};

/**  */

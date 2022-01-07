import React from "react";
import { useSelector } from "react-redux";

function Index() {
  const info = useSelector((state) => state.info);
  const { showNotification } = info;
  return (
    <section
      className={`absolute  px-2 py-4   shadow  ${
        showNotification
          ? "z-50 top-14 right-1 w-80 h-4/5"
          : "z-0 -top-24 -right-36 w-0 h-0"
      }   
     scrollbar-thin scrollbar  scrollbar-thumb-indigo-400 scrollbar-track-indigo-50
      overflow-hidden overflow-y-scroll  bg-white transition ease-in-out duration-500 py-4`}
    >
      <INFOBOX />
      <INFOBOX />
      <INFOBOX />
      <INFOBOX />
      <INFOBOX />
      <INFOBOX />
      <INFOBOX />
    </section>
  );
}

export default Index;

const INFOBOX = () => {
  return (
    <div className="cursor-pointer pr-2">
      <span className="text-gray-700 ml-2 text-md ">Admin</span>
      <p className="text-sm text-gray-500 bg-gray-100 px-2 py-3 shadow rounded">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
        reiciendis voluptate assumenda commodi earum, quae illo tempore aperiam
        quo modi?
      </p>
      <div className="text-xs text-gray-400 w-full flex justify-end">
        <p>10:24 am</p>
      </div>
    </div>
  );
};

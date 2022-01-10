import React from "react";

function Div(props) {
  return (
    <div className=" px-2 md:px-3 xl:px-6 py-10 bg-white w-full h-full ">
      {props.children}
    </div>
  );
}

export default Div;

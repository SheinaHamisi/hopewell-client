import React from "react";

function Menuitem({firstItem, secondItem, thirdItem}) {
  return (
    <div className=" leading-5 md:leading-6 pt-4 pr-4 md:pr-24 lg:pr-48">
      <p>{firstItem}</p>
      <p>{secondItem}</p>
      <p>{thirdItem}</p>
    </div>
  );
}

export default Menuitem;

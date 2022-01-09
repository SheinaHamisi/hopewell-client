import React from "react";

function Menuitem({firstItem, secondItem, thirdItem}) {
  return (
    <div className=" leading-6 md:leading-6 lg:leading-10 pt-4 md:pt-8 lg:pb-4 xl:w-96 pr-4 md:pr-12 lg:pr-16">
      <p>{firstItem}</p>
      <p>{secondItem}</p>
      <p className="lg:w-48">{thirdItem}</p>
    </div>
  );
}

export default Menuitem;

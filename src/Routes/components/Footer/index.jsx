import React from "react";

function index() {
  const moonLanding = new Date();
  return (
    <footer className="absolute left-0 right-0 bottom-0 z-10">
      <div className="w-full h-full  rounded-sm  flex justify-center items-center">
        <p className="px-4 py-1 z-50 bg-gray-50 ">
          @Hopewell Counceling Firm {moonLanding.getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default index;

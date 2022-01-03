import React from "react";

import Footer from "./Footer";
import Info from "./Info";
import Notes from "./Notes";
import Paticipats from "./Paticipants";

function Meeting() {
  return (
    <div className="w-screen h-screen relative   ">
      <div className="w-full absolute top-0 bottom-14 bg-gray-300 ">
        <Paticipats />
      </div>

      <Info />
      <Notes />
      <div className="absolute bottom-0 h-14 w-full ">
        <Footer />
      </div>
    </div>
  );
}

export default Meeting;

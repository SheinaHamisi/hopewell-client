import React from "react";
import PaticipantVideo from "./Paticipant";

function Paticipants() {
  return (
    <div className="w-full h-full grid gap-2 grid-cols-2 p-1 ">
      <PaticipantVideo />
      <PaticipantVideo />
    </div>
  );
}

export default Paticipants;

import React from "react";
import { MicrophoneIcon, VolumeOffIcon } from "@heroicons/react/solid";
function Paticipant() {
  return (
    <div className="w-full h-full relative rounded-lg overflow-hidden min-h-[200px] ">
      <Card>
        <video
          src="  "
          className="h-full w-full object-cover absolute bg-gray-900 inset-0"
          autoPlay
          playsInline
        ></video>
        <MicrophoneIcon className="fill-current text-white h-7 absolute top-4 right-4 rounded" />
        <div className="w-32 uppercase z-10 h-32 text-7xl shadow-lg font-bold rounded-full text-white bg-orange-400 flex justify-center items-center ">
          b
        </div>
        <div className="text-whte absolute bottom-1 text-white left-4">
          Lincoln
        </div>
      </Card>
    </div>
  );
}

export default Paticipant;

// card

const Card = (props) => {
  return (
    <div className="bg-gray-700 rounded-lg flex items-center justify-center h-full overflow-hidden">
      {props.children}
    </div>
  );
};

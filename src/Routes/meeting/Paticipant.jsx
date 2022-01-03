import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { MicrophoneIcon, VolumeOffIcon } from "@heroicons/react/solid";

function Paticipant(props) {
  let socketID = props.socketID;
  const ref = useRef();
  const { online_members } = useSelector((state) => state.meeting);

  let theUser = online_members.find((u) => u.socketID === socketID);
  useEffect(() => {
    props.peer.on("stream", (stream) => {
      ref.current.srcObject = stream;
    });
  }, []);

  return (
    <div
      id={socketID}
      className="w-full h-full relative rounded-lg overflow-hidden min-h-[200px] col-span-1"
    >
      <Card>
        <video
          ref={ref}
          id={`${socketID}-video`}
          className="h-full w-full object-cover absolute bg-gray-900 inset-0"
          autoPlay
          playsInline
        ></video>
        <MicrophoneIcon className="fill-current text-white h-7 absolute top-4 right-4 rounded" />

        <div className="text-whte absolute bottom-1 text-white left-4 font-sans font-bold tranking-wide">
          {theUser?.name?.split(" ")[0]}
        </div>
      </Card>
    </div>
  );
}

export default Paticipant;

// card

export const Card = (props) => {
  return (
    <div className="bg-gray-700 rounded-lg flex items-center justify-center h-full overflow-hidden">
      {props.children}
    </div>
  );
};

export const MyVideo = ({ mvideo, allPeers }) => {
  return (
    <div
      className={`${
        allPeers <= 0
          ? "inset-1 rounded-lg overflow-hidden "
          : "top-2 left-2 h-32 w-32"
      }  absolute shadow-xl`}
    >
      <div className="bg-gray-700 flex items-center justify-center h-full overflow-hidden">
        <video
          ref={mvideo}
          autoPlay
          muted
          playsInline
          className={`  h-full w-full    object-cover  bg-gray-900 inset-0`}
        ></video>
        <MicrophoneIcon className="fill-current text-white h-7 absolute top-4 right-4 rounded" />

        <div className="text-whte absolute bottom-1 text-white left-4">
          (You)
        </div>
      </div>
    </div>
  );
};

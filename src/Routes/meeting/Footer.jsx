import React, { useEffect } from "react";
import {
  MicrophoneIcon,
  VolumeOffIcon,
  VideoCameraIcon,
  DesktopComputerIcon,
  BookOpenIcon,
  InformationCircleIcon,
  XIcon,
  PhoneIcon,
  PhoneMissedCallIcon,
  EyeOffIcon,
} from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  notesToggle,
  shareToggle,
  endCallTogle,
  audioTogle,
  videoTogle,
  infoTogle,
} from "../../features/Slice/meeting/meeting.slice";
import { endMyMeeting } from "../../features/socket/socket.routes";
import { useParams } from "react-router-dom";
function Footer() {
  const { meetingID } = useParams();
  const { infoShow, video, audio, endCall, shareScreen, notesOpen } =
    useSelector((state) => state.meeting);

  useEffect(() => {
    // ending a call
    if (!endCall) return;
    return endMyMeeting(meetingID);
  }, [endCall]);

  return (
    <div
      className="shadow-lg flex justify-between h-full items-center px-2 md:px-5 lg:px-8 xl:px-10  bg-black 
     "
    >
      <div className="flex justify-around items-center gap-x-2">
        <Icon
          Icon1={BookOpenIcon}
          Icon2={XIcon}
          on={notesOpen}
          action={notesToggle}
        />
        <Icon
          Icon1={DesktopComputerIcon}
          Icon2={XIcon}
          on={shareScreen}
          action={shareToggle}
        />
      </div>
      <div className="flex justify-around items-center gap-x-4">
        <Icon
          Icon1={MicrophoneIcon}
          Icon2={VolumeOffIcon}
          on={audio}
          action={audioTogle}
        />
        <Icon
          Icon1={PhoneIcon}
          Icon2={PhoneMissedCallIcon}
          on={endCall}
          action={endCallTogle}
        />
        <Icon
          Icon1={VideoCameraIcon}
          Icon2={EyeOffIcon}
          on={video}
          action={videoTogle}
        />
      </div>
      <div className="flex justify-around items-center gap-x-4">
        <Icon
          Icon1={InformationCircleIcon}
          Icon2={XIcon}
          on={infoShow}
          action={infoTogle}
        />
      </div>
    </div>
  );
}

export default Footer;

const Icon = ({ Icon1, Icon2, on, action }) => {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(action(!on));
  };
  return (
    <div
      onClick={() => handleOnClick()}
      className={` ${
        on ? "bg-gray-600" : "bg-red-600"
      }  rounded-full px-2 py-2 cursor-pointer`}
    >
      {on ? (
        <Icon1 className="h-6 cursor-pointer fill-current text-white " />
      ) : (
        <Icon2 className="h-6 cursor-pointer fill-current text-white " />
      )}
    </div>
  );
};

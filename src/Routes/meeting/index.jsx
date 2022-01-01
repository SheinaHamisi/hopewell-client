import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { joinRoom } from "../../features/socket/socket.routes";
import Footer from "./Footer";
import Info from "./Info";
import Notes from "./Notes";
import Paticipats from "./Paticipants";

function Meeting() {
  const { meetingID } = useParams();
  const { user } = useSelector((state) => state.users);

  // join room
  useEffect(() => {
    let data = {
      meetingID,
      name: user?.name,
      id: user?._id,
      email: user?.email,
    };
    joinRoom(data);
  }, [meetingID]);

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

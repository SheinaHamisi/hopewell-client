import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {
  UsersIcon,
  ChatIcon,
  UserCircleIcon,
  MicrophoneIcon,
  VideoCameraIcon,
  MinusCircleIcon,
} from "@heroicons/react/solid";
import { useParams } from "react-router-dom";
import {
  getAllMessages,
  sendMessage,
} from "../../features/socket/socket.routes";
import { toast } from "react-toastify";
function Info() {
  const scrollToRef = useRef();
  const { meetingID } = useParams();
  const { infoShow, messages, online_members, latest } = useSelector(
    (state) => state.meeting
  );
  const { user } = useSelector((state) => state.users);
  const [messageUser, setMessageUser] = useState(true);
  const [test, setText] = useState("");
  const dispatch = useDispatch();

  // notify new message
  useEffect(() => {
    if (latest.sender === user._id || latest?.name === undefined) return;
    if (infoShow) toast.info(`New message from ${latest.name}`);
    return;
  }, [latest]);

  // collect messages
  useEffect(() => {
    getAllMessages({ meetingID });
  }, []);

  useEffect(() => {
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!test) return toast.error("Please type your text ");
    let data = {
      message: test,
      sender: user._id,
      name: user?.name,
      meetingID,
      date: new Date(),
    };

    sendMessage(data, dispatch);
    setText("");
  };

  return (
    <div
      className={`  ${
        !infoShow ? "block" : "hidden"
      } absolute z-40 bg-gray-50 right-1 rounded bottom-14 w-full md:w-4/5 lg:w-3/5 xl:w-80 top-2 overflow-hidden`}
    >
      <div className="flex justify-between items-center w-full   border-b px-10 py-2 bg-gray-100 ">
        <p
          onClick={() => setMessageUser(true)}
          className="flex flex-col text-xl justify-center items-center transition ease-in-out  duration-300  hover:bg-gray-300 px-2 py-2 cursor-pointer"
        >
          <ChatIcon className="h-7" /> message
        </p>
        <p
          onClick={() => setMessageUser(false)}
          className="flex flex-col text-xl justify-center items-center transition ease-in-out duration-300  hover:bg-gray-300 px-2 py-2 cursor-pointer"
        >
          <UsersIcon className="h-7" /> Users
        </p>
      </div>

      {messageUser ? (
        <form onSubmit={handleSubmit} className="w-full h-5/6 relative">
          <div className="w-full overflow-y-scroll scrollbar-thin scrollbar scrollbar-thumb-primary scrollbar-track-gray-100 h-5/6 px-2 pt-4 space-y-4 bg-white">
            {messages &&
              messages.map(({ message, sender, name, date }, i) => {
                return (
                  <div key={i}>
                    {sender === user._id ? (
                      <div className="relative ml-10 mr-2 shadow-lg">
                        <div className=" bg-gray-700 rounded-2xl text-sm px-2 py-3 text-indigo-50  ">
                          {message}
                        </div>
                        <span className="absolute -bottom-4 right-2 text-indigo-700  text-xs font-bold">
                          You{" "}
                          <span className="text-xs font-normal ml-2">
                            {moment(date).startOf("hour").fromNow()}
                          </span>{" "}
                        </span>
                      </div>
                    ) : (
                      <div className="relative mr-10 shadow-lg">
                        <div className=" bg-indigo-700 rounded-2xl text-sm  px-2 py-2 text-indigo-50 ">
                          {message}
                        </div>
                        <span className="absolute -bottom-4 left-2 text-xs font-bold">
                          {name.split(" ")[0]}
                          <span className="text-xs font-normal ml-2">
                            {moment(date).startOf("hour").fromNow()}
                          </span>{" "}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            <div ref={scrollToRef} className="text-white bg-transparent py-2">
              .
            </div>
          </div>
          <div className="h-1/6 bg-gray-200 rounded-lg w-full px-3 py-3 flex justify-between items-center">
            <input
              value={test}
              onChange={(e) => setText(e.target.value)}
              type="text"
              placeholder="Type your text here"
              className="w-9/12 h-full bg-transparent  focus:outline-none"
            />
            <button
              type="submit"
              className="w-3/12 h-5/6 rounded shadow font-semibold bg-primary text-white"
            >
              Send
            </button>
          </div>
        </form>
      ) : (
        <div className="w-full h-full space-y-2 mt-4 overflow-y-scroll px-2 ">
          <h1 className="text-center text-lg text-gray-900 font-semibold  ">
            Online users
          </h1>
          {online_members &&
            online_members.map((member) => (
              <UserComponent key={member._id} {...member} />
            ))}
        </div>
      )}
    </div>
  );
}

export default Info;

const UserComponent = ({ name }) => {
  return (
    <div className="flex justify-start items-center space-x-2">
      <UserCircleIcon className="h-10 fill-current text-indigo-700" />
      <span>{name}</span>
      <MicrophoneIcon className="h-4 cursor-pointer fill-current text-red-600" />
      <VideoCameraIcon className="h-4 cursor-pointer" />
      <MinusCircleIcon className="h-4 cursor-pointer fill-current text-red-600" />
    </div>
  );
};

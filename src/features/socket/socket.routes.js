import { io } from "socket.io-client";
import {
  accessToken,
  myrefreshToken,
  newAccessToken,
  Server_URL,
} from "../api";
import { addMessage } from "../Slice/meeting/meeting.slice";

export let socket = io(Server_URL, {
  auth: {
    refreshToken: myrefreshToken,
    accessToken: newAccessToken ? newAccessToken : accessToken,
  },
});
export const connectWithSocketServer = () => {
  // initiate connection
  socket.on("connect", () => {
    console.log("connected");
  });
};

// notes socket routes

// messages socket routes

//================================================================ send message
export const sendMessage = (data, dispatch) => {
  socket.emit("send-message", data);
  dispatch(addMessage(data));
};

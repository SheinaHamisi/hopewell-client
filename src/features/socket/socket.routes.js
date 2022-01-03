import { io } from "socket.io-client";
import { store } from "./../store";
import { Server_URL } from "../api";
import {
  addMembers,
  addMessage,
  setMessages,
} from "../Slice/meeting/meeting.slice";
import { clearUserInfo } from "../Slice/Auth/Auth.slice";

// get access to tokens
const accessToken = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))?.tokens?.accessToken
  : null;

export const authSocket = io(`${Server_URL}/socket`, {
  auth: {
    accessToken: accessToken,
  },
});
export const connectWithSocketAuthServer = () => {
  // initiate connection
  authSocket.on("connect", () => {
    // new member has joined
    authSocket.on("new-member", (data) => {
      // update store
      store.dispatch(addMembers(data));
    });

    // new message
    authSocket.on("new-message", (data) => {
      store.dispatch(addMessage(data));
    });
    // get message
    authSocket.on("All-messages", (data) => {
      console.log(data);
      store.dispatch(setMessages(data));
    });
  });
};

// join room same with meeting id
export const joinRoom = (data) => {
  authSocket.emit("join_room", data);
};
// get messages
export const getAllMessages = (data) => {
  authSocket.emit("get-messages", data);
};
// notes socket routes

// messages socket routes

//================================================================ send message
export const sendMessage = (data, dispatch) => {
  authSocket.emit("send-message", data);
  dispatch(addMessage(data));
};

//===============================

authSocket.on("connect_error", (err) =>
  // if error
  {
    // store.dispatch(clearUserInfo());
    console.log({ err });
  }
);
// socket.on("connect_failed", (err) => console.log(err));
// socket.on("disconnect", (err) => console.log(err));

export const endMyMeeting = () => {
  authSocket.disconnect();
};

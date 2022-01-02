import { io } from "socket.io-client";
import { store } from "./../store";
import { Server_URL } from "../api";
import {
  addMembers,
  addMessage,
  setMessages,
} from "../Slice/meeting/meeting.slice";

// get access to tokens
const accessToken = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))?.tokens?.accessToken
  : null;

export let socket = io(`${Server_URL}/socket`, {
  auth: {
    accessToken: accessToken,
  },
});
export const connectWithSocketServer = () => {
  // initiate connection
  socket.on("connect", () => {
    // new member has joined
    socket.on("new-member", (data) => {
      // update store
      store.dispatch(addMembers(data));
    });

    // new message
    socket.on("new-message", (data) => {
      store.dispatch(addMessage(data));
    });
    // get message
    socket.on("All-messages", (data) => {
      console.log(data);
      store.dispatch(setMessages(data));
    });
  });
};

// join room same with meeting id
export const joinRoom = (data) => {
  socket.emit("join_room", data);
};
// get messages
export const getAllMessages = (data) => {
  socket.emit("get-messages", data);
};
// notes socket routes

// messages socket routes

//================================================================ send message
export const sendMessage = (data, dispatch) => {
  socket.emit("send-message", data);
  dispatch(addMessage(data));
};

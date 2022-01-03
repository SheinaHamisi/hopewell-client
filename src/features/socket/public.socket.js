import { io } from "socket.io-client";
import { store } from "./../store";
import { Server_URL } from "../api";

export const unAuthSocket = io(`${Server_URL}`);

export const connectWithSocketServer = () => {
  unAuthSocket.on("connect", () => {
    console.log("un Authed");
  });
};

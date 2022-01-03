import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PaticipantVideo, { MyVideo } from "./Paticipant";
import Peer from "simple-peer";
import { authSocket, joinRoom } from "../../features/socket/socket.routes";
import { useParams } from "react-router-dom";
let localStream;
function Paticipants() {
  const dispatch = useDispatch();
  const [allPeers, setPeers] = useState([]);

  const socketRef = useRef();
  const peerRef = useRef([]);
  const mvideo = useRef();
  const { meetingID } = useParams();

  const { video, audio, endCall } = useSelector((state) => state.meeting);
  const { user } = useSelector((state) => state.users);
  useEffect(() => {
    if (localStream === null || localStream === undefined) return;
    localStream.getAudioTracks()[0].enabled = audio;
    localStream.getVideoTracks()[0].enabled = video;
  }, [video, audio]);

  useEffect(() => {
    socketRef.current = authSocket;
    navigator.mediaDevices
      .getUserMedia({ video, audio })
      .then((stream) => {
        mvideo.current.srcObject = stream;
        localStream = stream;
        joinRoom({
          meetingID,
          name: user?.name,
          id: user?._id,
          email: user?.email,
        });
        socketRef.current.on("all users", (members) => {
          const peers = [];
          members.forEach((member) => {
            const peer = createPeer(
              member?.socketID,
              socketRef.current.id,
              stream
            );
            peerRef.current.push({
              peerID: member?.socketID,
              peer,
            });
            peers.push({ peer: peer, socketID: member?.socketID });
          });
          setPeers(peers);
        });
        socketRef.current.on("user-disconnected", (data) => {
          const { socketID } = data;
          const videoContainer = document.getElementById(socketID);
          const video = document.getElementById(`${socketID}-video`);
          const item = peerRef.current.find((p) => p.peerID === socketID);
          let all = allPeers;
          all.filter(({ peer, socketID }) => socketID !== data.socketID);
          setPeers(all);
          if (
            item &&
            video &&
            videoContainer &&
            socketRef.current.id !== socketID
          ) {
            const tracks = video.srcObject.getTracks();
            tracks.forEach((t) => t.stop());
            videoContainer.classList.add("hidden");
            item.peer.destroy();
          }
        });
        socketRef.current.on("user-joined", (data) => {
          // if not me
          const peer = addtoPeer(data.signal, data.callerID, stream);
          if (data.callerID !== socketRef.current.id) {
            peerRef.current.push({
              peerID: data.callerID,
              peer,
            });
            setPeers((users) => [
              ...users,
              { peer: peer, socketID: data.callerID },
            ]);
          }
        });
        socketRef.current.on("receiving-returned-signal", (payload) => {
          const item = peerRef.current.find((p) => p.peerID === payload.id);
          item.peer.signal(payload.signal);
        });
      })
      .catch((err) => console.log({ err }));
  }, [meetingID]);

  function createPeer(userToSignal, callerID, stream) {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream,
    });

    peer.on("signal", (signal) => {
      socketRef.current.emit("sending-signal", {
        userToSignal,
        callerID,
        signal,
      });
    });

    return peer;
  }
  function addtoPeer(incomingSignal, callerID, stream) {
    const peer = new Peer({ initiator: false, trickle: false, stream: stream });

    peer.on("signal", (signal) => {
      socketRef.current.emit("returning-signal", { signal, callerID });
    });

    peer.signal(incomingSignal);
    return peer;
  }
  const size = allPeers.length;
  let gridsize = size === 1 ? 1 : size <= 4 ? 2 : 5;
  let McolSize = size <= 4 ? 1 : 2;
  let MrowSize = size <= 4 ? size : Math.ceil(size / 2);

  return (
    <div
      className={`w-full h-full relative grid grid-rows-${MrowSize} relative  grid-cols-${McolSize} md:grid-rows-auto  gap-2 md:grid-cols-${gridsize} p-1 overflow-y-scroll `}
    >
      {allPeers.map(({ peer, socketID }) => {
        return (
          <PaticipantVideo key={socketID} socketID={socketID} peer={peer} />
        );
      })}
      <MyVideo mvideo={mvideo} allPeers={allPeers.length} />
    </div>
  );
}

export default Paticipants;

import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PaticipantVideo from "./Paticipant";
import Peer from "simple-peer";
import { authSocket, joinRoom } from "../../features/socket/socket.routes";
import { useParams } from "react-router-dom";
import { addMembers } from "../../features/Slice/meeting/meeting.slice";
function Paticipants() {
  const dispatch = useDispatch();
  const [peers, setPeers] = useState([]);
  const socketRef = useRef();
  const peerRef = useRef([]);
  const userVideo = useRef();
  const { meetingID } = useParams();
  const { video, audio, endCall, online_members } = useSelector(
    (state) => state.meeting
  );
  const { user } = useSelector((state) => state.users);

  useEffect(() => {
    socketRef.current = authSocket;
    navigator.mediaDevices
      .getUserMedia({ video, audio })
      .then(async (stream) => {
        //  userVideo.current.srcObject = stream;
        let data = {
          meetingID,
          name: user?.name,
          id: user?._id,
          email: user?.email,
        };
        joinRoom(data);

        socketRef.current.on("new-member", (members) => {
          // update store
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
            peers.push(peer);
          });
          dispatch(addMembers(members));
        });

        setPeers(peers);

        socketRef.current.on("user-joined", (data) => {
          const peer = addtoPeer(data.signal, data.callerID, stream);

          peerRef.current.push({
            peerID: data.callerID,
            peer,
          });
          setPeers((users) => [...users, peer]);
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
  const size = peers.length;
  let gridsize = size === 1 ? 1 : size <= 4 ? 2 : 5;
  let McolSize = size <= 4 ? 1 : 2;
  let MrowSize = size <= 4 ? size : Math.ceil(size / 2);

  return (
    <div
      className={`w-full h-full grid grid-rows-${MrowSize}  grid-cols-${McolSize} lg:grid-rows-auto  gap-2 lg:grid-cols-${gridsize} p-1 overflow-y-scroll `}
    >
      {peers.map((peer, index) => {
        console.log(peer);
        return <PaticipantVideo key={index} peer={peer} />;
      })}
    </div>
  );
}

export default Paticipants;

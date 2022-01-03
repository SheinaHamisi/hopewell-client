import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import Quill from "quill";
import { useState } from "react";
import { useEffect } from "react";
import { authSocket as socket } from "../../features/socket/socket.routes";
import { useParams } from "react-router-dom";

function Notes() {
  const { notesOpen } = useSelector((state) => state.meeting);
  const [quill, setQuill] = useState();
  const { meetingID } = useParams();
  const wrapperRef = useCallback((wrapper) => {
    if (wrapper == null) return;
    wrapper.innerHTML = "";
    const edditor = document.createElement("div");
    wrapper.append(edditor);
    const q = new Quill(edditor, {
      theme: "snow",
      modules: {
        toolbar: TOOLBAR_OPTIONS,
      },
    });
    q.disable();
    q.setText("Loading document please wait ....");
    setQuill(q);
  }, []);

  // send changes to others
  useEffect(() => {
    if (socket == null || quill == null) return;
    const handler = (delta, oldDelta, source) => {
      if (source !== "user") return;
      const data = {
        delta,
        docID: meetingID,
      };

      socket.emit("send-changes", data);
    };

    quill.on("text-change", handler);
    return () => {
      quill.off("text-change", handler);
    };
  }, [socket, quill]);

  useEffect(() => {
    if (socket == null || quill == null || !meetingID) return;

    const interval = setInterval(() => {
      const data = {
        delta: quill.getContents(),
        docID: meetingID,
      };

      socket.emit("save-document", data);

      return () => {
        clearInterval(interval);
      };
    }, 5000);
  }, [quill, socket]);

  // receiving from server
  useEffect(() => {
    if (socket == null || quill == null || !meetingID) return;
    const handler = (data) => {
      quill.updateContents(data.delta);
    };
    socket.on("receive-changes", handler);

    return () => {
      socket.off("receive-changes", handler);
    };
  }, [quill, socket]);

  // getting data from db on room
  useEffect(() => {
    if (socket == null || quill == null || !meetingID) return;

    socket.once("load-document", (doc) => {
      quill.setContents(doc);
      quill.enable();
    });

    socket.emit("get-documet", meetingID);
  }, [quill, socket, meetingID]);

  return (
    <div
      className={`  ${
        notesOpen ? "hidden" : "block"
      } absolute top-0 bottom-14 left-0 bg-gray-100 w-full z-40 overflow-hidden  xl:w-3/5  `}
    >
      <div className="w-full " id="Qcontainer" ref={wrapperRef}></div>
    </div>
  );
}

export default Notes;

const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline", "strikethrough"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ align: [] }],
  ["image", "blockquote", "code-block"],
  ["clean"],
];

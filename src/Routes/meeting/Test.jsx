import React, { useRef, useEffect } from "react";

function Test() {
  const mvideo = useRef();
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((s) => {
        mvideo.current.srcObject = s;
      });
  }, []);
  return (
    <div className="h-screen w-screen ">
      <video
        ref={mvideo}
        autoPlay
        className="h-full w-full bg-gray-400"
      ></video>
    </div>
  );
}

export default Test;

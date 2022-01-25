import React, { useState } from "react";
import Sessions from "../components/Sessions";
import Graph from "../components/Graph";
import Upcoming from "../components/Upcoming";
import ClientRatings from "../components/ClientRatings";
import PerfomanceGraph from "../components/PerfomanceGraph";
import Users from "../components/Users";
import Calendar from "../components/Calendar";

import perfomance from "../../../assets/images/perfomance.png";
import graph from "../../../assets/images/graph.png";
import clientRatings from "../../../assets/images/client-ratings.png";
import sheina from "../../../assets/images/sheina.png";
import KanedaImg from "../../../assets/images/kaneda-img.png";
import calendarImg from "../../../assets/images/calendar.png";

function ClientDash() {
  const [sessions, setSessions] = useState(17);
  const [users, setUsers] = useState([
    {
      id: 1,
      img: KanedaImg,
      name: "Becky Kaneda",
      location: "Nairobi, Kenya",
    },
    {
      id: 2,
      img: KanedaImg,
      name: "Becky Kaneda",
      location: "Nairobi, Kenya",
    },
    {
      id: 3,
      img: KanedaImg,
      name: "Becky Kaneda",
      location: "Nairobi, Kenya",
    },
  ]);
  return (
    <div className="grid grid-cols-1 md:grid md:grid-cols-5 h-full w-full">
      {/* 1si & 2nd */}
      <div className="p-2">
        <Sessions sessions={sessions} />
      </div>
      <div className="md:col-span-2 p-2 row-span-2">
        <Graph graph={graph} />
      </div>
      <div className="p-2">
        <PerfomanceGraph perfomance={perfomance} />
      </div>
      <div className="row-span-1 p-2">
        <Calendar img={calendarImg} />
      </div>
      {/* 2nd & 3rd */}
      <div className="p-2 row-span-2">
        {/* clients */}
        <Users users={users} />
      </div>
      <div className="p-2">
        <ClientRatings ratings={clientRatings} />
      </div>
      {/* <div className="bg-blue-400">1</div> */}
      <div className="p-2 md:col-span-3">
        <Upcoming
          progress="In Progress"
          time="4:30 PM"
          duration="45 minutes"
          img={sheina}
          name="Sheina Hamisi"
          location="Nairobi, Kenya"
          date="January 10th"
        />
      </div>
    </div>
  );
}

export default ClientDash;

import React from "react";
import Eventscards from "../components/Eventcards";
import eventsImage from "../../assets/images/blueconcert.jpeg";

function Section2() {
  return (
    <div className="upcoming pt-12">
      <div>
        <p className="text-center text-xl md:text-3xl text-bold">UPCOMING EVENTS</p>
      </div>
      <div className="flex grid grid-cols-3 gap-2 md:gap-8 px-2 md:px-16 pb-12">
        <Eventscards
          image={eventsImage}
          title="HAPPINESS"
          description="Lorem..."
        />

        <Eventscards
          image={eventsImage}
          title="HAPPINESS"
          description="Lorem..."
        />

        <Eventscards
          image={eventsImage}
          title="HAPPINESS"
          description="Lorem..."
        />

        <Eventscards
          image={eventsImage}
          title="HAPPINESS"
          description="Lorem..."
        />

        <Eventscards
          image={eventsImage}
          title="HAPPINESS"
          description="Lorem..."
        />

        <Eventscards
          image={eventsImage}
          title="HAPPINESS"
          description="Lorem..."
        />
      </div>
    </div>
  );
}

export default Section2;

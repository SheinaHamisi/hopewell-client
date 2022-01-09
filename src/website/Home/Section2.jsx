import React from "react";
import Eventscards from "../components/Eventcards";
import eventsImage from "../../assets/images/event1.jpeg";

function Section2() {
  return (
    <div className="upcoming pt-12 xl:pt-28">
      <div>
        <p className="text-center text-xl md:text-3xl text-bold">
          UPCOMING EVENTS
        </p>
      </div>
      <div className="lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-3 xl:pt-8 xl:pr-10">
        <Eventscards
          image={eventsImage}
          title="HAPPINESS"
          description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo iure sit ipsam magnam, perferendis ut!"
          button="Read more"
          date="January 6 2021"
        />

        <Eventscards
          image={eventsImage}
          title="HAPPINESS"
          description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo iure sit ipsam magnam, perferendis ut!"
          button="Read more"
          date="January 6 2021"
        />

        <Eventscards
          image={eventsImage}
          title="HAPPINESS"
          description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo iure sit ipsam magnam, perferendis ut!"
          button="Read more"
          date="January 6 2021"
        />

        <Eventscards
          image={eventsImage}
          title="HAPPINESS"
          description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo iure sit ipsam magnam, perferendis ut!"
          button="Read more"
          date="January 6 2021"
        />

        <Eventscards
          image={eventsImage}
          title="HAPPINESS"
          description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo iure sit ipsam magnam, perferendis ut!"
          button="Read more"
          date="January 6 2021"
        />

        <Eventscards
          image={eventsImage}
          title="HAPPINESS"
          description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo iure sit ipsam magnam, perferendis ut!"
          button="Read more"
          date="January 6 2021"
        />
      </div>
    </div>
  );
}

export default Section2;

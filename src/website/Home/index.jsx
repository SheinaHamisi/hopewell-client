import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Subscribe from "./Subscribe";
import Testimonials from "./Testimonials";
import Workflow from "./Workflow";
import News from "./News";

function Home() {
  return (
    <div className=" overflow-hidden ">
      <Section1 />
      <Section2 />
      <Testimonials />
      <Subscribe />
      <Workflow />
      <News />
    </div>
  );
}

export default Home;

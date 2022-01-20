import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Section1() {
  return (
    <section className=" h-auto w-full mt-10">
      <h1 className="text-center text-4xl md:text-5xl md:font-bold md:mb-6 px-2 font-semibold">
        Mental Well-Being for Africa
      </h1>
      <p className="px-3 text-gray-500 md:mb-6 text-lg md:text-xl my-4 text-center">
        Our vision is to change the African narrative by having a continent
        whose men and women are mentally healthy.
      </p>
      <div className="flex flex-col px-4 mb-4 md:flex-row  md:justify-center ">
        <button className="shadow-md px-8 py-3 font-semibold bg-primary text-white">
          Join us Today
        </button>
        <button className="shadow-md md:ml-8 font-semibold  bg-gray-900 mt-4 md:mt-0 text-white px-8 py-3">
          Learn More
        </button>
      </div>

      <div className="my-8 w-full flex justify-center items-center">
        <iframe
          width="800"
          height="415"
          src="https://www.youtube.com/embed/Q3-jRn0tJwY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
}

export default Section1;

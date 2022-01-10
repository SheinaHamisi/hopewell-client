import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Section1() {
  return (
    <section className="sectionone xl:px-4">
      <div className="contentone flex flex-col-reverse lg:flex-row">
        <div className="pl-4 md:pl-24 md:pt-12 lg:w-8/12 xl:w-full xl:mr-12 xl:pt-28">
          <div className="text-4xl md:text-6xl font-bold leading-snug">
            <p className=" text-red-600">Mental</p>
            <p className=" text-blue-600">Well-Being</p>
            <p className=" text-blue-600">for Africa</p>
          </div>
          <p className=" text-blue-900 mt-6 leading-10 md:text-xl text-l">
            Our vision is to change the African narrative by having a continent
            whose men and women are mentally healthy.
          </p>
          <div className="seconebtn mt-8 lg:mt-16 xl:mt-24"> 
            <button
              className="bg-primary transition ease-in-out duration-500 hover:bg-white  font-semibold hover:text-primary
      px-7 md:px-18 md:text-xl rounded-3xl py-3 text-white mr-4"
            >
              App here
            </button>
            <button
              className="bg-white transition ease-in-out duration-500 hover:bg-primary  font-semibold hover:text-white 
        px-7 md:px-18 md:text-xl rounded-3xl py-3 text-blue-600"
            >
              Play Video
            </button>
          </div>
        </div>
        <div className="seconeimage px-2 md:px-12 lg:px-0 xl:pr-8 xl:w-full">
          <img
            src="hero11.jpeg "
            className="md:min-w-full lg:h-full"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Section1;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Section1() {
  return (
    <section className="sectionone xl:px-28">
  
      <div className="contentone flex flex-col-reverse lg:flex-row">
        <div className="pl-12 md:pl-48 md:pt-12 lg:w-full lg:pl-12 lg:pt-24 lg:w-7/12  xl:w-6/12 xl:pt-24 xl:pl-20">
          <div className="text-3xl md:text-6xl font-bold leading-snug">
            <p className=" text-blue-600">Mak Your</p>
            <p className=" text-primary">Life Easier</p>
            <p className=" text-primary">Than Before</p>
          </div>
          <p className=" text-primary lg:mt-12 mt-6 leading-4 md:text-xl text-l">
            Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit.
            Facilis, illo.
          </p>
          <div className="seconebtn mt-8 lg:mt-16 xl:mt-24"> 
            <button
              className="bg-primary transition ease-in-out duration-500 hover:bg-white  font-semibold hover:text-primary hover:underline
      px-7 md:px-18 md:text-xl rounded-3xl py-3 text-white mr-4"
            >
              App here
            </button>
            <button
              className="bg-white transition ease-in-out duration-500 hover:bg-primary  font-semibold hover:text-primary hover:underline
        px-7 md:px-18 md:text-xl rounded-3xl py-3 text-primary"
            >
              Play Video
            </button>
          </div>
        </div>
        <div className="seconeimage md:px-28 lg:p-0">
          <img
            src="Group 4.png "
            className="md:h-96 md:min-w-full lg:h-full"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Section1;

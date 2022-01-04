import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Section1() {
  return (
    <section className="sectionone xl:px-28">
      

      <div className="contentone flex flex-col-reverse lg:flex-row">
        <div className="pl-12 md:pl-24 md:pt-12 lg:w-full xl:w-6/12 xl:pt-24">
          <div className="text-4xl md:text-6xl font-bold leading-snug">
            <p className=" text-red-600">Mak Your</p>
            <p className=" text-blue-600">Life Easier</p>
            <p className=" text-blue-600">Than Before</p>
          </div>
          <p className=" text-blue-900 mt-6 leading-10 md:text-xl text-l">
            Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit.
            Facilis, illo.
          </p>
          <div className="seconebtn mt-8 xl:mt-24">
            <button
              className="bg-blue-600 transition ease-in-out duration-500 hover:bg-white  font-semibold hover:text-primary hover:underline
      px-7 md:px-18 md:text-xl rounded-3xl py-3 text-white mr-4"
            >
              App here
            </button>
            <button
              className="bg-white transition ease-in-out duration-500 hover:bg-blue-600  font-semibold hover:text-primary hover:underline
        px-7 md:px-18 md:text-xl rounded-3xl py-3 text-blue-600"
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

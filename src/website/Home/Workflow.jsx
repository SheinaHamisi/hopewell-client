import React from "react";

function Workflow() {
  return (
    <div className="mt-12 xl:mb-12">
      <div className="text-center">
        <p className="text-4xl text-extrabold lg:text-5xl xl:px-96">Integrated workflow designed for product teams</p>
        <p className="mt-8 text-xl lg:text-2xl xl:mt-12 xl:px-96">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit laborum — semper quis lectus nulla.
        </p>

        <button className="mt-8 md:mt-12 xl:ml-24 w-40 md:w-60 md:h-16 h-12 mr-4 md:mr-8 bg-primary text-white rounded-2xl text-xl md:w-48">Quick action</button>
        <button className="mt-2 md:mt-8 w-40 md:w-60 md:h-16 h-12 mr-4 md:mr-8 bg-primary text-white rounded-2xl text-xl">Quick action</button>
        <button className="mt-4 md:mt-8 w-40 md:w-60 md:h-16 h-12 mr-4 md:mr-8 bg-primary text-white rounded-2xl text-xl">Quick action</button>
        <button className="mt-4 md:mt-8 w-40 md:w-60 md:h-16 h-12 mr-4 md:mr-8 bg-primary text-white rounded-2xl text-xl">Quick action</button>
        <button className="mt-4 md:mt-8 w-40 md:w-60 md:h-16 h-12 bg-primary text-white rounded-2xl text-xl xl:mr-24">Quick action</button>
      </div>

      <div
        className="w-full md:w-full justify-center items-center bg-white flex flex-col mt-12 lg:flex-row-reverse xl:w-3/4 xl:mx-40 shadow-md"
      >
        <img
          src="card.jpg"
          alt=""
          title="img"
          className="w-full h-auto object-cover lg:w-1/2"
        />
        <div className="w-full p-4 justify-start flex flex-col lg:pt-12 lg:pb-12">
          <h4 className=" text-3xl text-bold">
            Optimize and scale, easy to start
          </h4>
          <p className="my-4 md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <button
            value="button"
            className="my-4 w-40 px-4 py-2 text-white hover:bg-blue-700 bg-primary md:text-xl"
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Workflow;

import React from "react";

function News() {
  return (
    <div className="mb-24">
      <p className="text-4xl md:text-5xl lg:text-5xl lg:mx-12 lg:mt-32 text-center mt-12 text-extrabold">
        Refreshing news for developers and designers
      </p>
      <div class="lg:mx-8 xl:grid xl:grid-cols-3 overflow-hidden xl:gap-12 xl:mx-48">
        <div className="w-full bg-white shadow-lg flex flex-col mt-12">
          <img
            src="card2.jpg"
            alt=""
            title="img"
            className="w-full h-auto object-cover transition duration-150 ease-out hover:ease-in"
          />
          <div className="w-full py-4 justify-start">
            <div className="flex flex-row">
              <button className="mt-2 w-24 h-8 mr-4 bg-primary text-white rounded-2xl text-l lg:text-2xl lg:w-40 lg:h-12 xl:text-sm xl:w-28 xl:h-8">
                Product
              </button>
              <button className="mt-2 w-32 h-8 mr-4 bg-primary text-white rounded-2xl text-l lg:text-2xl lg:w-48 lg:h-12 xl:text-sm xl:w-32 xl:h-8">
                Engineering
              </button>
            </div>

            <h4 className="text-3xl mt-4 xl:text-xl">
              The quick brown fox jumped over the lazy dog.
            </h4>
            <p className="my-4 lg:text-xl xl:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="flex flex-row mb-6">
            <img src="anastacia.jpg" className="rounded-full" alt="" />
            <p className="mt-6 ml-6 lg:text-xl xl:text-sm">Anastasia Dan - Jan 17, 2020</p>
          </div>
        </div>

        <div className="w-full bg-white shadow-lg flex flex-col mt-12">
          <img
            src="card2.jpg"
            alt=""
            title="img"
            className="w-full h-auto object-cover"
          />
          <div className="w-full py-4 justify-start">
            <div className="flex flex-row">
              <button className="mt-2 w-24 h-8 mr-4 bg-primary text-white rounded-2xl text-l lg:text-2xl lg:w-40 lg:h-12 xl:text-sm xl:w-28 xl:h-8">
                Product
              </button>
              <button className="mt-2 w-32 h-8 mr-4 bg-primary text-white rounded-2xl text-l lg:text-2xl lg:w-48 lg:h-12 xl:text-sm xl:w-32 xl:h-8">
                Engineering
              </button>
            </div>

            <h4 className="text-3xl mt-4 xl:text-xl">
              The quick brown fox jumped over the lazy dog.
            </h4>
            <p className="my-4 lg:text-xl xl:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="flex flex-row mb-6">
            <img src="anastacia.jpg" className="rounded-full" alt="" />
            <p className="mt-6 ml-6 lg:text-xl xl:text-sm">Markus Barker - Jan 12, 2020</p>
          </div>
        </div>

        <div className="w-full bg-white shadow-lg flex flex-col mt-12">
          <img
            src="card2.jpg"
            alt=""
            title="img"
            className="w-full h-auto object-cover"
          />
          <div className="w-full py-4 justify-start">
            <div className="flex flex-row">
              <button className="mt-2 w-24 h-8 mr-4 bg-primary text-white rounded-2xl text-l lg:text-2xl lg:w-40 lg:h-12 xl:text-sm xl:w-28 xl:h-8">
                Product
              </button>
              <button className="mt-2 w-32 h-8 mr-4 bg-primary text-white rounded-2xl text-l lg:text-2xl lg:w-48 lg:h-12 xl:text-sm xl:w-32 xl:h-8">
                Engineering
              </button>
            </div>

            <h4 className="text-3xl mt-4 xl:text-xl">
              The quick brown fox jumped over the lazy dog.
            </h4>
            <p className="my-4 lg:text-xl xl:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="flex flex-row mb-6">
            <img src="anastacia.jpg" className="rounded-full" alt="" />
            <p className="mt-6 ml-6 lg:text-xl xl:text-sm">Lisa Crockett - Jan 9, 2020</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;

import React from "react";

function Eventcards({ image, title, description, button, date}) {
  return (

    <div class="max-w-2xl md:pl-12 mx-4 md:mt-8 mt-4">
          <div className="bg-white shadow-md md:max-w-full border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img src={image} className="md:w-full" alt=""/>
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="text-gray-900 font-bold md:text-3xl text-2xl tracking-tight mb-2 dark:text-white">
                 {title}
                </h5>
              </a>
              <p className="font-normal md:text-xl text-gray-700 mb-3 md:mb-8 dark:text-gray-400">
                {description}
              </p>
              <a
                href="#"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg lg:text-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
               {button}
              </a>

              <div class="flex flex-wrap pt-8">
                                <div class="w-full md:w-1/3 text-sm lg:text-lg font-medium">
                                   {date}
                                </div>
                                <div class="2/3">
                                    <div class="text-sm lg:text-lg font-medium">
                                        SHARE:
                                        <a href="" class="text-blue-700 px-1 ">
                                            FACEBOOk
                                        </a>
                                        <a href="" class="text-blue-500 px-1 ">
                                            TWITTER
                                        </a>
                                        <a href="" class="text-red-600 px-1 ">
                                            GOOGLE+
                                        </a>
                                    </div>
                                </div>
                            </div>
            </div>
          </div>
        </div>
      
  );
}

export default Eventcards;

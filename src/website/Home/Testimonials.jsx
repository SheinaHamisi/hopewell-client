import React from "react";

function Testimonials() {
  return (
    <div className="md:mx-8 mt-8 mb-4 border-b">
      <h1 className="text-gray-900 text-center text-6xl font-semibold">
        Testimonials
      </h1>
      <Testimonial />
    </div>
  );
}

export default Testimonials;

const Testimonial = () => {
  return (
    <div className="shadow-lg px-3 py-4 bg-gray-100 mx-auto grid grid-cols-3">
      <div className="col-span-2">
        <h1 className="font-semibold text-xl mt-4">
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <p className="w-4/5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
          distinctio doloribus itaque dolores necessitatibus, perspiciatis
          veniam sint delectus iste accusantium aperiam iusto quaerat vel, quos
          maiores? Provident soluta ullam adipisci? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Commodi nisi repellat natus, deleniti
          beatae tempora porro dicta odio dolor alias!
        </p>
      </div>

      <img src="logo.png" className="col-span-1" alt="" />
    </div>
  );
};

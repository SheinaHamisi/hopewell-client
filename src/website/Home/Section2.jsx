import React from "react";
import {
  LoginIcon,
  SelectorIcon,
  DesktopComputerIcon,
} from "@heroicons/react/solid";
function Section2() {
  return (
    <div className="mt-14 border-b md:mx-8 pb-6">
      <h1 className="text-center text-4xl font-bold text-gray-900 ">
        Service created exclusively for you
      </h1>
      <p className="text-center text-gray-600 text-lg mt-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, quos.
      </p>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 mt-12 ">
        <Steps
          Icon={LoginIcon}
          title="Create Account"
          num="1"
          description="Create an account and login"
        />
        <Steps
          Icon={SelectorIcon}
          title="Select Therapist"
          num="2"
          description="Get an opportunity to choose a therapist and schedule an appointment"
        />
        <Steps
          Icon={DesktopComputerIcon}
          title="Join a therapist seshion"
          num="3"
          description="Join a therapist meeting online or physical"
        />
      </div>
    </div>
  );
}

export default Section2;

const Steps = ({ title, num, description, Icon }) => {
  return (
    <div className="col-span-1 flex flex-col justify-center items-center">
      <div className="w-16 h-16 bg-primary rounded-full flex justify-center items-center fill-current text-white">
        <Icon className="h-12 " />
      </div>
      <h2 className="font-bold text-2xl text-gray-900 text-center mt-4">
        {num}.{title}
      </h2>
      <p className="text-center mt-4 text-md text-gray-500">{description}</p>
    </div>
  );
};

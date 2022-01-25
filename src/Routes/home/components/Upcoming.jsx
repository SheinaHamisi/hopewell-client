import React from "react";
import Ellipse from "../../../assets/icons/Ellipse.svg";
import {
  LocationMarkerIcon,
  PencilAltIcon,
  XIcon,
  CheckCircleIcon,
} from "@heroicons/react/outline";

function Upcoming({ progress, time, duration, img, name, location, date }) {
  return (
    <div className="border-2 bg-white p-8 rounded-md">
      {/* <img src={upcoming} alt="upcoming" /> */}
      <p className="text-primary font-bold text-lg mb-4">Upcoming</p>
      <DesktopCard
        progress={progress}
        time={time}
        duration={duration}
        img={img}
        name={name}
        location={location}
        date={date}
      />
      <TabletCard
        progress={progress}
        time={time}
        duration={duration}
        img={img}
        name={name}
        location={location}
        date={date}
      />
      <PhoneCard
        progress={progress}
        time={time}
        duration={duration}
        img={img}
        name={name}
        location={location}
        date={date}
      />
    </div>
  );
}

export default Upcoming;

const DesktopCard = ({
  progress,
  time,
  duration,
  img,
  name,
  location,
  date,
}) => {
  return (
    <div className="hidden lg:block border-r-2 border-y-2 border-l-8 border-l-primary border-y-gray-100 rounded-md p-8">
      {/* first-row */}
      <div className="grid grid-cols-4">
        {/* col-1 */}
        <div>
          <p>{time}</p>
          <p className="text-gray-400 text-sm mt-4">{duration}</p>
        </div>
        {/* col-2 */}
        <div className="flex items-center gap-3">
          <img src={img} alt="img" />
          <div>
            <p>{name}</p>
            <div className="flex mt-1 gap-1">
              <LocationMarkerIcon className="w-4 opacity-40" />
              <p className="text-xs text-gray-400">{location}</p>
            </div>
          </div>
        </div>
        {/* col-3 */}
        <div className="flex justify-center pl-16 flex-col">
          <p>{date}</p>
          <div className="flex gap-2 ">
            <img src={Ellipse} alt="ellipse" />
            <p className="mt-1 text-xs text-primary">Confirmed</p>
          </div>
        </div>
        {/* col-4 */}
        <div className="flex items-center justify-end">
          <div className="bg-primary w-fit px-2 py-1 rounded-md">
            <p className="text-xs">{progress}</p>
          </div>
        </div>
      </div>
      {/* second row */}
      <div className="flex justify-end">
        <div className="flex justify-end w-1/2 gap-2 mt-6">
          <PencilAltIcon className="w-6 opacity-40 hover:cursor-pointer" />
          <XIcon className="w-6 opacity-40 hover:cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

const TabletCard = ({
  progress,
  time,
  duration,
  img,
  name,
  location,
  date,
}) => {
  return (
    <div className="hidden md:block lg:hidden border-r-2 border-y-2 border-l-8 border-l-primary border-y-gray-100 rounded-md p-8">
      {/* first-row */}
      <div className="grid grid-cols-3">
        <div>
          <div className="bg-primary w-fit px-2 py-1 rounded-md">
            <p className="text-xs">{progress}</p>
          </div>
          <p className="mt-4 text-sm">{time}</p>
        </div>
        <div className="flex gap-4 items-center col-span-2 pl-4">
          <img src={img} alt="img" className="w-12" />
          <div>
            <p className="text-xl">{name}</p>
            <div className="flex gap-2 items-center">
              <LocationMarkerIcon className="w-4 opacity-40" />
              <p className="text-gray-400 text-sm">{location}</p>
            </div>
          </div>
        </div>
      </div>
      {/* second-row */}
      <div className="grid grid-cols-3">
        <p className="mt-8 text-gray-400">{duration}</p>
        <div className="flex gap-4 items-center mt-8 col-span-2 pl-4">
          <div>
            <p className="text-sm">{date}</p>
            <p className="text-primary text-xs">Confirmed</p>
          </div>
          <div className="flex justify-end w-1/2 gap-2">
            <PencilAltIcon className="w-6 opacity-40" />
            <XIcon className="w-6 opacity-40" />
          </div>
        </div>
      </div>
    </div>
  );
};

const PhoneCard = ({ progress, time, duration, img, name, location, date }) => {
  return (
    <div className="md:hidden border-r-2 border-y-2 border-l-8 border-l-primary border-y-gray-100 rounded-md p-2">
      {/* first-row */}
      <div className="flex justify-between">
        <div>
          <p className="text-xs">{date}</p>
          <p className="text-lg">{time}</p>
        </div>
        <p className="text-gray-400">{duration}</p>
      </div>
      {/* second row */}
      <div className="grid grid-cols-4 mt-4">
        {/* first-col */}
        <img src={img} alt="img" />
        {/* second-col */}
        <div className="col-span-2 pl-3 flex flex-col justify-center">
          <p>{name}</p>
          <div className="flex gap-1">
            <LocationMarkerIcon className="w-3 opacity-40" />
            <p className="text-xs text-gray-400">{location}</p>
          </div>
        </div>
        {/* third-col */}
        <div className="flex items-end">
          <p className="text-xs text-primary">Confirmed</p>
        </div>
      </div>
    </div>
  );
};

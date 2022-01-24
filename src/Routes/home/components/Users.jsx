import React from "react";

function Users({ users }) {
  return (
    <div className="p-8 md:p-4 border-2 rounded-md bg-white">
      <p className="text-center font-bold mb-4 text-primary text-2xl md:text-lg">Clients</p>
      {users.map((user) => {
        const { id, img, name, location } = user;
        return (
          <div key={id} className="mb-4">
            <User img={img} name={name} location={location} />
          </div>
        );
      })}
    </div>
  );
}

export default Users;

const User = ({ img, name, location }) => {
  return (
    <div className="flex gap-4">
      <img src={img} alt="img" className="md:w-12 md:h-12" />
      <div className="flex flex-col justify-center">
        <p className="md:text-xs">{name}</p>
        <p className="text-gray-400 md:text-xs">{location}</p>
      </div>
    </div>
  );
};

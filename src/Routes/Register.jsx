import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Input from "./components/Input";
import PrimaryButton from "./components/Button";
function Register() {
  const [formData, setFormData] = useState({});

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.error("Please fill in all fields");
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-screen w-screen  relative overflow-hidden"
    >
      <a href=""></a>
      <img
        src="register.jpg"
        className="object-cover absolute inset-0  z-0 w-screen h-screen opacity-75"
        alt=""
      />

      <section className=" absolute inset-6 grid grid-cols-1 xl:grid-cols-2   overflow-hidden">
        <img src="register.jpg" className=" hidden xl:block " alt="" />
        <main className="bg-gray-100 shadow-lg w-full h-full px-4 py-6 overflow-x-scroll">
          <h2 className="text-3xl xl:text-4xl text-gray-900 font-bold tracking-wide text-center xl:text-left">
            Register with us
          </h2>
          <p className="mt-4 text-gray-700 text-md">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
            suscipit.
          </p>

          <p className="mt-3 text-sm  text-gray-700">
            Already have an account?{" "}
            <Link className="text-primary hover:underline" to="/login">
              Log in
            </Link>
          </p>
          <div>
            <div className="grid grid-cols-1 gap-y-4 mt-4 md:grid-cols-2 md:gap-x-4 ">
              <Input
                change={changeHandler}
                label="First Name"
                type="text"
                placeholder=" First Name"
                name="firstName"
              />
              <Input
                change={changeHandler}
                label="Last Name"
                type="text"
                placeholder=" Last Name"
                name="lastName"
              />
              <Input
                change={changeHandler}
                label="Email"
                type="email"
                placeholder=" hello@gmail.com"
                name="email"
              />
              <Input
                change={changeHandler}
                label="Phone"
                type="text"
                placeholder=" Phone"
                name="phone"
              />
              <Input
                label="Password"
                type="password"
                placeholder="Password"
                pass={true}
                change={changeHandler}
                name="password"
              />
              <Input
                label="Confirm Password"
                type="password"
                placeholder=" Confirm Password"
                pass={true}
                change={changeHandler}
                name="confirmPassword"
              />
            </div>
          </div>

          <div className="mt-8 w-full justify-between items-center flex">
            <div className="flex justify-start px-4 py-3 bg-white border  ">
              <span className="text-red-600">*</span>
              <select className="  focus:outline-none bg-transparent">
                <option value="">Choose User Role</option>
                <option value="1">Client</option>
                <option value="2">Therapist</option>
              </select>
            </div>

            <PrimaryButton text="Register" color="primary" type="submit" />
          </div>
        </main>
      </section>
    </form>
  );
}

export default Register;

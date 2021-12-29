import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Input from "./components/Input";
import PrimaryButton from "./components/Button";

function Forgotpassword() {
  const [formData, setFormData] = useState("");
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData?.email) {
      toast.error("Please enter your email address");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="h-screen w-screen relative overflow-hidden bg-gray-200"
    >
      <section className=" absolute inset-5 grid grid-cols-2 bg-gray-200  overflow-hidden">
        <div className=" bg-white shadow-lg w-full h-full   flex flex-col justify-center  ">
          <div className="mx-auto">
            <h2 className="text-3xl xl:text-4xl text-gray-900 font-md tracking-wide text-center">
              Forgot your password?
            </h2>
            <p className="mt-7 text-gray-600 text-sm">
              Don't worry Enter your email below to receive a reset password
              Link.
            </p>

            <div className="grid grid-cols-1 w-full mt-12 ">
              <Input
                label="Email"
                type="email"
                placeholder=" hello@gmail.com"
                name="email"
                change={changeHandler}
              />
            </div>

            <div className="mt-8 w-full">
              <PrimaryButton text="Submit" color="primary" type="submit" />
            </div>

            <div className=" w-full mt-8">
              <p className="mt-4 text-l">
                Already have an account?
                <Link className="text-primary hover:underline" to="/login">
                  Log in
                </Link>
              </p>

              <p className="mt-8">
                Don't have an account?{" "}
                <Link className="text-primary hover:underline " to="/register">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
        <img
          src="forgot.svg"
          className="w-full h-full hidden xl:block ml-4 px-16 "
          alt=""
        />
      </section>
    </form>
  );
}

export default Forgotpassword;

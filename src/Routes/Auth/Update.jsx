import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Input from "../components/Input";
import PrimaryButton from "../components/Button";

function Update() {
  return (
    <form className="h-screen w-screen relative overflow-hidden bg-gray-200 ">
      <section className=" absolute top-6 right-6 bottom-6 left-6 grid grid-cols-1  bg-gray-200 lg:grid-cols-2 xl:grid-cols-2 overflow-hidden">
        <img
          src="update.svg"
          className=" object-cover w-full h-full hidden lg:block xl:block "
          alt=""
        />
        <div className=" bg-white shadow-lg w-full h-full px-6 md:px-10 xl:px-24  overflow-x-hidden flex flex-col justify-center items-center">
          <div>
            <h2 className="text-2xl md:text-4xl xl:text-4xl text-gray-900 font-md tracking-wide">
              Hey Sheina, want to change your password?
            </h2>
            <p className="mt-7 md:mt-12 text-gray-600 text-xl">
              Enter your new password below
            </p>

            <div className="grid grid-cols-1 w-full space-y-5">
              <Input
                label="Password"
                type="password"
                placeholder="Password"
                pass={true}
                name="password"
              />
              <Input
                label="Confirm Password"
                type="password"
                placeholder=" Confirm Password"
                pass={true}
                name="confirmPassword"
              />
            </div>

            <div className="mt-8 w-full">
              <PrimaryButton text="Submit" color="primary" type="submit" />
            </div>
          </div>
          <div className=" w-full mt-8">
            <p className="mt-4 text-l  text-gray-700">
              <Link className="text-primary hover:underline" to="/login">
                Log in
              </Link>
            </p>

            <p className="mt-8">
              Don’t have an account?{" "}
              <Link className="text-primary hover:underline " to="/register">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </section>
    </form>
  );
}

export default Update;

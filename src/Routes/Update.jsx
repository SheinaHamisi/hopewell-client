import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Input from "./components/Input";
import PrimaryButton from "./components/Button";

function Update() {
  return (
    <form className="h-screen w-screen relative overflow-hidden bg-gray-200">
      <section className=" absolute top-5 right-6 bottom-6 left-0 grid grid-cols-2 bg-gray-200  overflow-hidden">
        <img
          src="update.svg"
          className=" object-cover w-full h-full hidden xl:block "
          alt=""
        />
        <div className=" bg-white shadow-lg w-full h-full px-32 py-2 overflow-x-scroll flex flex-col justify-center items-center">
          <div>
            <h2 className="text-3xl xl:text-4xl text-gray-800 font-md tracking-wide text-center">
              Hey Sheina, want to change your password?
            </h2>
            <p className="mt-4 text-gray-600 text-md">
              Enter your new password below
            </p>

            <div className="grid grid-cols-1 w-full py-12 space-y-3">
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
          <div className=" w-full mt-3">
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

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Input from "./components/Input";
import PrimaryButton from "./components/Button";

function Forgotpassword() {
    return (
        <form className="h-screen w-screen relative overflow-hidden bg-gray-200">
      <section className=" absolute top-4 right-4 bottom-4 left-4 grid grid-cols-2 bg-gray-200  overflow-hidden">
    
        <div className=" bg-white shadow-lg w-full h-full px-16 py-3 flex flex-col justify-center items-center">
          <div>
          <h2 className="text-3xl xl:text-4xl text-gray-800 font-md tracking-wide text-center">
            Hey Sheina, forgot your password?
          </h2>
          <p className="mt-7 text-gray-600 text-md">
            Enter your email below to receive a reset code.
          </p>

          <div className="grid grid-cols-1 w-full py-12 ">
          <Input
         
                label="Email"
                type="email"
                placeholder=" hello@gmail.com"
                name="email"
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
              Don’t have an account?{" "}
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
    )
}

export default Forgotpassword

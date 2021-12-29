import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Input from "./components/Input";
import PrimaryButton from "./components/Button";

function Login() {
  return <form className="h-screen w-screen bg-secondary relative overflow-hidden">
    <img
        src="login4.jpeg"
        className="object-cover absolute inset-0  z-0 w-screen h-screen opacity-75"
        alt=""
      />

<section className=" absolute inset-6 grid grid-cols-1 xl:grid-cols-2   overflow-hidden px-3 py-3">
        <img src="login3.jpeg" className=" object-cover w-full h-full hidden xl:block " alt="" />
        <main className="bg-gray-100 shadow-lg w-full h-full px-4 py-3 overflow-x-scroll flex justify-center items-center">
<div>
<h2 className="text-3xl xl:text-4xl text-gray-900 font-bold tracking-wide text-center">
            Log in 
          </h2>
          <p className="mt-7 text-gray-500 text-md">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
            suscipit.
          </p>
          <div>
          <div className="grid grid-cols-1 gap-y-4 mt-7">
          <Input
         
                label="Email"
                type="email"
                placeholder=" hello@gmail.com"
                name="email"
              />
        
              <Input
                label="Password"
                type="password"
                placeholder="Password"
                pass={true}
                name="password"/>

          </div>
          <p className="mt-4">
            forgot password
          </p>
          </div>

          <div className="mt-8 w-full">
          <PrimaryButton text="Log in" color="primary" type="submit" />
          </div>
          <div className="mt-16" >
            <p>Don’t have an account? <Link className="text-primary hover:underline" to="/register">
              Sign up
            </Link>
            </p>
          </div>

</div>
        </main>
  </section>

  </form> ;
}

export default Login;

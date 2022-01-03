import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Input from "../components/Input";
import PrimaryButton from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import decode from "jwt-decode";
import { updatePassword } from "../../features/Slice/Auth/AuthAsync";
function Update() {
  const dispatch = useDispatch();
  const { token } = useParams();
  const [formData, setFormData] = useState({
    token,
  });
  const navigate = useNavigate();
  const info = useSelector((state) => state.info);

  const { loading, message, success, error } = info;

  useEffect(() => {
    if (error && !success) {
      toast.error(error);
    } else if (message) {
      toast.success(message);
      navigate("/login");
    }
  }, [info]);
  const decoded = decode(token);
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData?.password !== formData?.confirmPassword) {
      return toast.error("Password do not match");
    }
    dispatch(updatePassword(formData));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-screen w-screen relative overflow-hidden bg-gray-200 "
    >
      <section className=" absolute top-6 right-6 bottom-6 left-6 grid grid-cols-1  bg-gray-200 lg:grid-cols-2 xl:grid-cols-2 overflow-hidden">
        <img
          src="update.svg"
          className=" object-cover w-full h-full hidden lg:block xl:block "
          alt=""
        />
        <div className=" bg-white shadow-lg w-full h-full px-6 md:px-10 xl:px-24  overflow-x-hidden flex flex-col justify-center items-center">
          <div>
            <h2 className="text-2xl md:text-4xl xl:text-4xl text-gray-900 font-md tracking-wide">
              Hey {decoded?.name?.split(" ")[0]}, want to change your password?
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
                change={changeHandler}
              />
              <Input
                label="Confirm Password"
                type="password"
                placeholder=" Confirm Password"
                pass={true}
                name="confirmPassword"
                change={changeHandler}
              />
            </div>

            <div className="mt-8 w-full">
              <PrimaryButton
                text="Submit"
                color="primary"
                type="submit"
                loading={loading}
              />
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

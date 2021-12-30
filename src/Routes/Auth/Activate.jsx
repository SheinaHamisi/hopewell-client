import React, { useState, useEffect } from "react";
import ActivateButton from "./../components/ActivateButton";
import Illustration from "./../../assets/images/illustration.png";
import { useParams, useNavigate } from "react-router-dom";
import decode from "jwt-decode";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { activateUser } from "../../features/Slice/Auth/AuthAsync";
function Activate() {
  const dispatch = useDispatch();
  const info = useSelector((state) => state.info);
  const navigate = useNavigate();
  const { loading, message, success, error } = info;
  const [remain, setRemail] = useState(30);
  const { token } = useParams();
  var decoded = decode(token);
  useEffect(() => {
    if (error && !success) {
      toast.error(error);
    } else if (message) {
      toast.success(message);
      navigate("/login");
    }
  }, [info]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(activateUser({ token: token }));
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-primary w-full h-screen sm:p-6 md:p-14 grid items-center"
    >
      <div className="bg-white grid md:grid-cols-1 xl:grid-cols-3 rounded sm:p-6 md:p-14 h-full">
        <div className="col-span-2 md:grid items-center hidden">
          <img src={Illustration} alt="happy" />
        </div>
        <div className="col-span-1 flex items-center justify-center flex-col px-5">
          <p className="text-gray-700 font-bold text-6xl text-center">
            Hooray {decoded?.name.split(" ")[0]}
          </p>
          <span className="mt-3">Token Time Out: {remain}M</span>
          <p className="mt-6 text-xl text-center mb-8">
            You're almost there! Just one click away to activate your HopeWell
            Account.
          </p>
          <ActivateButton text="Activate" type="submit" loading={loading} />
        </div>
      </div>
    </form>
  );
}

export default Activate;

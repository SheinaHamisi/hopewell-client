import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function CheckOut({ step1, step2, step3, step4, step5 }) {
  const appointment = useSelector((state) => state.appointment);
  console.log(appointment);
  return (
    <nav class="bg-grey-light  rounded font-sans w-full py-3 border-b mb-5">
      <ol class="list-reset flex text-grey-dark">
        <li>
          <Link
            to="/dashboard/apointment"
            class={`${step1 ? "text-primary" : "text-gray-900"} font-bold`}
          >
            Service
          </Link>
        </li>
        <li>
          <span class="mx-2"> > </span>
        </li>
        <li>
          <Link
            to="/dashboard/apointment/one"
            class={`${
              !appointment?.newMeeting?.service
                ? "text-gray-400 "
                : step2
                ? "text-primary"
                : "text-gray-900"
            } font-bold`}
          >
            Therapist
          </Link>
        </li>
        <li>
          <span class="mx-2">></span>
        </li>
        <li>
          <Link
            to="/dashboard/apointment/Step3"
            class={`${
              !appointment?.host
                ? "text-gray-400"
                : step3
                ? "text-primary"
                : "text-gray-900"
            } font-bold`}
          >
            Confirm
          </Link>
        </li>
        <li>
          <span class="mx-2"> > </span>
        </li>
        <li>
          <Link
            to="/dashboard/apointment/Step4"
            class={`${
              !appointment?.initiatePayment
                ? "text-gray-400"
                : step4
                ? "text-primary"
                : "text-gray-900"
            } font-bold`}
          >
            Payment
          </Link>
        </li>
      </ol>
    </nav>
  );
}

export default CheckOut;

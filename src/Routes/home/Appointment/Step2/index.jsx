import React, { useEffect } from "react";
import Div from "../../components/Div";
import CheckOut from "../CheckOut";
import { useDispatch, useSelector } from "react-redux";
import { getAllTherapists } from "../../../../features/Slice/apointment/apointment.async";
function Step2() {
  // get all therapists and admin
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTherapists());
  }, []);
  return (
    <Div>
      <CheckOut step2 />
      <div></div>
    </Div>
  );
}

export default Step2;

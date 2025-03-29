import React from "react";
import { Outlet } from "react-router-dom";
import ToastBox from "../components/toastBox/ToastBox";

const Root = () => {
  return (
    <div className="w-11/12 lg:w-10/12 max-w-[1600px] mx-auto">
      <Outlet />
      <ToastBox />
    </div>
  );
};

export default Root;

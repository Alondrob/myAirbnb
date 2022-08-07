import React from "react";
import { useNavigate } from "react-router-dom";

const Form = ({renderFormPage}) => {
  const navigate = useNavigate();
  return (
    <div className="border-2 border-gray-200 rounded-3xl bg-white p-6 h-48 w-48">
      <div className=" text-center font-extrabold space-y-4 ">
        <h4
          className=" bg-white hover:bg-slate-400"
          onClick={() => {
            navigate("./register")
             
          }}
        >
          Sign Up
        </h4>
        <h4 className=" bg-white hover:bg-slate-400">Login</h4>
      </div>
      <div className=" font-extrabold border-t-4  border-gray-200 text-center space-y-4 ">
        <h4 className="bg-white hover:bg-pink-200">Host Your Home</h4>
        <h4 className="bg-white hover:bg-pink-200">Help</h4>
      </div>
    </div>
  );
};

export default Form;

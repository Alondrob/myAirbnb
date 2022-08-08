import React from "react";
import { useNavigate } from "react-router-dom";

const Form = ({ renderFormPage }) => {
  const navigate = useNavigate();

  const signIn = () => {
    navigate('/register')
    renderFormPage();
  };

  return (
    <div className=" bg-blue-100 items-center border-2 border-gray-200 rounded-3xl  p-6 h-48 w-96 space-y-4">
      <div className=" text-center font-extrabold space-y-2 ">

        <h4
          className=" bg-white hover:bg-slate-400 rounded-3xl"
          onClick={() => navigate('/register')}
        >
            Sign Up
          </h4>

        <h4 className=" bg-white hover:bg-slate-400 rounded-3xl">Login</h4>
      </div>
      <div className=" font-extrabold border-t-22  border-gray-200 text-center space-y-2 ">
        <h4 className="bg-white hover:bg-pink-200 rounded-3xl">Host Your Home</h4>
        <h4 className="bg-white hover:bg-pink-200 rounded-3xl">Help</h4>
      </div>
    </div>
  );
};

export default Form;

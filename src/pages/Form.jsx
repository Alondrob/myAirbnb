import React from "react";
import { useNavigate } from "react-router-dom";
import FormItem from "../components/cards/FormItem";

import Header from "../components/header/Header";

const Form = ({ renderFormPage }) => {
  const navigate = useNavigate();

  const signIn = () => {
    navigate("/register");
    renderFormPage();
  };

  return (
    <div >
      <Header />
      <FormItem name='Register' />
      <FormItem name='Login'/>
      <FormItem name='Host Your Home'/>
      <FormItem name='Help'/>
      {/* <div
        className="  bg-blue-100  border-2 border-gray-200 rounded-sm  p-6 h-screen w-full space-y-16 "
      >
        <div className="text-center w-36 inline-block align-middle font-extrabold space-y-12 ">
          <h4
            className=" bg-white hover:bg-slate-400 rounded-3xl h-12 place-content-center"
            onClick={() => navigate("/register")}
          >
            Sign Up
          </h4>

          <h4
            className=" bg-white hover:bg-slate-400 rounded-3xl"
            onClick={() => navigate("/sign-in")}
          >
            Login
          </h4>
        </div>
        <div className=" font-extrabold border-t-22  border-gray-200 text-center space-y-2 ">
          <h4 className="bg-white hover:bg-pink-200 rounded-3xl">
            Host Your Home
          </h4>
          <h4 className="bg-white hover:bg-pink-200 rounded-3xl">Help</h4>
        </div>
      </div> */}
    </div>
  );
};

export default Form;

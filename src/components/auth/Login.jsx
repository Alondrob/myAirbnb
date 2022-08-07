import { render } from "@testing-library/react";
import { useState } from "react";
import { FaBars, FaUserCircle } from "react-icons/fa";
import Form from "../forms/Form";

const Login = ({ renderFormPage }) => {
  
  return (
    <div className="flex items-center justify-center space-x-4 rounded-3xl border-2 border-blue-900 h-8 w-24">
      <FaBars size={24} onClick={() => renderFormPage()} />
      <FaUserCircle size={24} />
    </div>
  );
};

export default Login;

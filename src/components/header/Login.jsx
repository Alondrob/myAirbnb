import { render } from "@testing-library/react";
import { useState } from "react";
import { FaBars, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Form from "../../pages/auth-pages/Form";

const Login = ({ renderFormPage }) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center space-x-4 rounded-3xl border-2 border-blue-900 h-8 w-24">
      <FaBars size={24} onClick={() => navigate('/form')} />
      <FaUserCircle size={24} />
    </div>
  );
};

export default Login;

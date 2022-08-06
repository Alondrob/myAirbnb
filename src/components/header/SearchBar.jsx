import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Login from "../auth/Login";

const SearchBar = ({ setHeader }) => {
  const [formPage, setFormPage] = useState(false);
  const navigate = useNavigate();

  const renderFormPage = () => {
    console.log("The formpage works!")
    navigate('/form')
  }
  return (
    <div className="flex items-center">
      <input
        onClick={() => setHeader()}
        placeholder="Where Is Your Next Vacation Spot ?"
        className="italic text-center bg-slate-50 hover:bg-red-200 rounded-3xl h-12 w-96"
      />
      <FaSearch className="-ml-9" />
      <div className="absolute right-0  mr-6">
        <Login renderFormPage={renderFormPage} />
      </div>
    </div>
  );
};

export default SearchBar;

import { render, renderHook } from "@testing-library/react";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Form from "../../pages/auth-pages/Form";

const SearchBar = ({ setHeader, renderFormPage }) => {
  const [formPage, setFormPage] = useState(false);

  return (
    <div className="flex items-center">
      <input
        onClick={() => setHeader()}
        placeholder="Where Is Your Next Vacation Spot ?"
        className="italic text-center bg-slate-50 hover:bg-red-200 rounded-3xl h-12 w-96"
      />
      <FaSearch className="-ml-9" />
    </div>
  );
};

export default SearchBar;

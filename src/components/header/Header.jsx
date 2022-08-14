import { useState } from "react";
import HomePage from "./HomePage";
import SearchBar from "./SearchBar";
import PopUpBar from "./PopUpBar";
import Form from "../../pages/Form";
import Login from "../auth/Login";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [headComp, setHeadComp] = useState(true);
  const [formPage, setFormPage] = useState(false);
  const navigate = useNavigate();

  const setHeader = () => {
    console.log("this works!");
    setHeadComp(!headComp);
  };
  const renderFormPage = () => {
    console.log("works");
    setFormPage(!formPage);
  };
  return (
    <>
      {headComp ? (
        <div className=" flex items-center justify-center  h-24  bg-lime-100 border-b-4 border-gray-300  ">
          <div className="absolute left-0 ml-4">
            <HomePage />
          </div>
          <SearchBar setHeader={setHeader}  />
          <div className="absolute right-2  mr-6">
            <Login renderFormPage={renderFormPage} />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-56 bg-blue-50 border-b-4 border-gray-300">
          <div className="absolute left-0   ml-4">
            <HomePage />
          </div>

          <PopUpBar  />
          <div className="absolute right-2  mr-6">
            <Login renderFormPage={renderFormPage} />
          </div>
        </div>
      )}
      {/* This takes care of a signIn popUp */}
      <div className="flex justify-center">{formPage ? <Form  renderFormPage={renderFormPage}/> : ""}</div>
    </>
  );
};

export default Header;

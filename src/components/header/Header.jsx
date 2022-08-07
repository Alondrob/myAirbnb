import { useState } from "react";
import HomePage from "./HomePage";
import SearchBar from "./SearchBar";
import PopUpBar from "./PopUpBar";
import Form from "../forms/Form";

const Header = () => {
  const [headComp, setHeadComp] = useState(true);
  const [formPage, setFormPage] = useState(false);

  const setHeader = () => {
    console.log("this works!");
    setHeadComp(!headComp);
  };
    const renderFormPage = () => {
        console.log("works");
        setFormPage(!formPage);
    }
  return (
    <>
      {headComp ? (
        <div className=" flex items-center justify-center  h-24  bg-lime-100 border-b-4 border-gray-300  ">
          <div className="absolute left-0 ml-4">
            <HomePage />
          </div>
          <SearchBar setHeader={setHeader} renderFormPage={renderFormPage} />
        </div>
      ) : (
        <div className="flex items-center justify-center h-56 bg-blue-50 border-b-4 border-gray-300">
          <div className="absolute left-0   ml-4">
            <HomePage />
          </div>

          <PopUpBar renderFormPage={renderFormPage} />
        </div>
      )}
      {/* This takes care of a signIn popUp */}
      <div className="absolute right-8 mr-6">
        {formPage ? <Form renderFormPage={renderFormPage} />  : ""}
      </div>

    </>
  );
};

export default Header;

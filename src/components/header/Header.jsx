import { useState } from "react";
import HomePage from "./HomePage";
import SearchBar from "./SearchBar";
import PopUpBar from "./PopUpBar";

const Header = () => {
  const [headComp, setHeadComp] = useState(true);

  const setHeader = () => {
    console.log("this works!");
    setHeadComp(!headComp);
  };
  return (
    <>
      {headComp ? (
        <div className=" flex items-center justify-center  h-24  bg-lime-100 border-b-4 border-gray-300  ">
          <div className="absolute left-0 ml-4">
            <HomePage />
          </div>
          <SearchBar setHeader={setHeader} />
        </div>
      ) : (
        <div className="flex items-center justify-center h-56 bg-blue-50 border-b-4 border-gray-300">
          <div className="absolute left-0   ml-4">
            <HomePage />
          </div>

          <PopUpBar />
        </div>
      )}
    </>
  );
};

export default Header;

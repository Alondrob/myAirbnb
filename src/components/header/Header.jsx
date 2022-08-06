import HomePage from "./HomePage";

import SearchBar from "./SearchBar";
import DateSearchBar from "./DateSearchBar";
import { FaSearch } from "react-icons/fa";
import Login from "../auth/Login";
const Header = () => {
  return (
    
      <div className=" flex items-center justify-center  h-24  bg-lime-100 border-b-4 border-gray-300  ">
        <div className="absolute left-0 ml-4">
          <HomePage />
        </div>
        <SearchBar />
      
      <div className="absolute right-0 mr-16">
        <Login />
      </div>
    </div>
  );
};

export default Header;

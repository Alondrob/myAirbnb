import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({setHeader}) => {
  return (
<div className="flex items-center" onClick={() => setHeader()} >
          <input placeholder="Where Is Your Next Vacation Spot ?" className="italic text-center bg-slate-50 hover:bg-red-200 rounded-3xl h-12 w-96"/>
                <FaSearch className="-ml-9"/>
</div>
          
    
        
    
      
  
  
  );
};

export default SearchBar;

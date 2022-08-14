import React from "react";

const DateSearchBar = ({ handleDate }) => {
  return (
    <div>
      {/* fromDate */}
      <div className="text-center">
        <input
          className="bg-slate-50 hover:bg-red-200 rounded-md h-12 w-80  text-center mb-8 "
          type="date"
          onChange={(e) => handleDate(e.target.value)}
        />
      </div>
    </div>
  );
};

export default DateSearchBar;

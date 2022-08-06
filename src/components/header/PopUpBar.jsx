import React from "react";

const PopUpBar = () => {
  return (
    <div className="flex items-center">
      <input
        placeholder="Explore Destinations..."
        type="text"
        className="italic text-center bg-slate-50 hover:bg-gray-400 rounded-3xl border-4 border-yellow-900 h-12 w-64"
      />
      <input
        type="date"
        className="italic text-center bg-slate-50 hover:bg-gray-400 rounded-3xl border-4 border-yellow-900 h-12 w-48 -ml-1"
      />
      <input
        type="date"
        className="italic text-center bg-slate-50 hover:bg-gray-400 rounded-3xl border-4 border-yellow-900  h-12 w-48 -ml-1 "
        onClick={() => console.log("change Colors")}
      />
    </div>
  );
};

export default PopUpBar;

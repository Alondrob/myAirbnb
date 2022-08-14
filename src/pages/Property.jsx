import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { testData } from "../utils/mockData";

import Header from "../components/header/Header";
import DateSearchBar from "../components/header/DateSearchBar";
import Guests from "../components/cards/Guests";

const Property = () => {
  const propertyId = useParams();
  const convertedId = parseInt(propertyId.id);
  const [noOfGuests, setNoOfGuests] = useState(0);
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();

  const selectedProperty = testData.filter(item => item.id === propertyId.id)

  const handleGuests = (val) => {
    if (noOfGuests === 0) {
      setNoOfGuests(0);
    }
    setNoOfGuests(noOfGuests + val)
    
  }
  const handleDate = (val) => {
    setFromDate(val);
}
  

  return (
    <div>
      <Header />

      <div className="flex justify-center space-x-24 mt-6">
        <div className=" max-w-sm  rounded-xl overflow-hidden shadow-sm w-9/12">
          <img
            className=" text-centerw w-96  rounded-md h-64"
            src={selectedProperty[0].image}
          />
          <p className="h-16">{selectedProperty[0].title}</p>
        </div>

        <div className="ml-96">
          <h4 className="text-center italic font-extrabold">From</h4>
          <DateSearchBar name="fromDate" value={fromDate} handleDate={val => setFromDate(val) }  />
          <h4 className="text-center italic font-extrabold">To</h4>
          <DateSearchBar name="fromDate" value={fromDate} handleDate={val => setToDate(val) }  />
          <Guests handleGuests={handleGuests} noOfGuests={noOfGuests} />
        </div>
      </div>
    </div>
  );
};

export default Property;

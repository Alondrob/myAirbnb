import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { testData } from "../utils/mockData";

const Property = () => {
  //   const [selectedProperty, setSelectedProperty] = useState({});
  const propertyId = useParams();
  const convertedId = parseInt(propertyId.id);

  // const vari = null;
    
    let random = {};
    testData.forEach((element) => {
      if (element.id === propertyId.id) {
          console.log(element.id === propertyId.id);
          random = element;
        // random.push (element);
        console.log(random);
      }
    });
    //   return random
        console.log("random")


  //   console.log(vari);

  return <div>Property</div>;
};

export default Property;

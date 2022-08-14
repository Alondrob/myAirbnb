import React from "react";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Card = ({ value }) => {
  const [color, setColor] = useState(false);
  const navigate = useNavigate();

  const getProperty = (e) => {
    const id = value.id;
    navigate(`/property/${id}`);
  };
  return (
    <button onClick={getProperty}>
      <div className=" max-w-sm rounded-xl overflow-hidden shadow-xl hover:scale-105 ">
        <div>
          <img className=" w-64 h-64" src={value.image} />
        </div>

        <div className="space-x-48">
          <p className=" h-16">{value.title} </p>
          <FaHeart
            size={24}
            className=" mt-8 mr-32"
            color={color ? 'red' : 'gray'}
            onMouseOver={() => setColor(!color)}
          />
        </div>
      </div>
    </button>
  );
};

export default Card;

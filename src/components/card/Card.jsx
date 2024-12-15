import React from "react";

const Card = ({ image, text }) => {
  return (
    <div className="relative group rounded-lg overflow-hidden shadow-md">
      <img
        src={image}
        alt={text}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
        <h3 className="text-white text-lg font-semibold">{text}</h3>
      </div>
    </div>
  );
};

export default Card;


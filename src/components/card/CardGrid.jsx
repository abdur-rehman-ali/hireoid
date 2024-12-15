import React from "react";
import Card from "./Card";

const CardGrid = ({ cardsData, cardTitle }) => {

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-primary text-3xl md:text-5xl font-bold leading-tight tracking-wide mb-10" dangerouslySetInnerHTML={{ __html: cardTitle }}>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardsData?.map((card, index) => (
          <Card key={index} image={card.image} text={card.text} />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;

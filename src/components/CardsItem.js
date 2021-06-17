//items are cards and the flip movements from back to front when i click//
import React, { useState } from "react";
import { CardWrapper } from "../style";
import ReactCardFlip from "react-card-flip";
import theback from "../images/backlogo.jpeg";

const CardsItem = (props) => {
  const [isFlipped, setIsFlipped] = useState(true);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <ReactCardFlip isFlipped={isFlipped}>
      <CardWrapper onClick={handleClick}>
        <img alt={props.name} src={props.image} />
      </CardWrapper>
      <CardWrapper onClick={handleClick}>
        <img src={theback} />
      </CardWrapper>
    </ReactCardFlip>
  );
};

export default CardsItem;

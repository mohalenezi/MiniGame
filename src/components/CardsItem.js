//items are cards and the flip movements from back to front when i click//
import React, { useState } from "react";
import { CardWrapper } from "../style";
import ReactCardFlip from "react-card-flip";
import theback from "../images/backlogo.png";

const CardsItem = (props) => {
  const [isFlipped, setIsFlipped] = useState(props.card.isOpen);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
    // props.firstClick === null
    //   ? props.setFirstClick(props.card)
    //   : props.setSecondClick(props.card);

    // if (props.secondClick !== null)
    //   props.secondClick !== props.firstClick
    //     ? setIsFlipped(true)
    //     : setIsFlipped(false);
    props.card.isOpen = true;
    setTimeout(() => {
      props.matchingCard(props.card);
    }, 700);
  };
  if (props.card.isOpen === false && isFlipped !== false) setIsFlipped(false);
  return (
    <div>
      <ReactCardFlip isFlipped={isFlipped}>
        <CardWrapper onClick={handleClick}>
          <img src={theback} />
        </CardWrapper>
        <CardWrapper>
          <img alt={props.card.name} src={props.card.image} />
        </CardWrapper>
      </ReactCardFlip>
    </div>
  );
};

export default CardsItem;

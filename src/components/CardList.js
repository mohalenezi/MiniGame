import { ListWrap } from "../style.js";
import kddphotos from "../data";
import CardsItem from "./CardsItem";
import { useState } from "react";
const shuffledKdd = kddphotos.sort(() => Math.random() - 0.5);
const CardList = () => {
  // doubled cards
  //   const pairOfKddphotos = [...kddphotos, ...kddphotos];

  //useState
  const [icecreamCards, setIcecreamCards] = useState(shuffledKdd);
  const [firstClick, setFirstClick] = useState(null);
  // const [secondClick, setSecondClick] = useState(null);

  const matchingCard = (card) => {
    if (firstClick === null) setFirstClick(card);
    else {
      if (firstClick.name === card.name) {
        console.log("match");
        setFirstClick(null);
      } else {
        console.log("not matched");
        firstClick.isOpen = false;
        card.isOpen = false;
        setFirstClick(null);
      }
    }
  };

  const cardList = icecreamCards.map((card) => (
    <CardsItem
      matchingCard={matchingCard}
      //   firstClick={firstClick}
      //   setFirstClick={setFirstClick}
      //   secondClick={secondClick}
      //   setSecondClick={setSecondClick}
      key={card.id}
      card={card}
    />
  ));

  return (
    <div>
      <ListWrap>{cardList}</ListWrap>;
    </div>
  );
};

export default CardList;

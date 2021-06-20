import { ListWrap } from "../style.js";
import kddphotos from "../data";
import CardsItem from "./CardsItem";
import { useState } from "react";
const CardList = () => {
  // doubled cards
  const pairOfKddphotos = [...kddphotos, ...kddphotos];

  const shuffledKdd = pairOfKddphotos.sort(() => Math.random() - 0.5);

  //useState
  const [icecreamCards, setIcecreamCards] = useState(shuffledKdd);
  const [firstClick, setFirstClick] = useState(null);
  const [secondClick, setSecondClick] = useState(null);

  const cardList = icecreamCards.map((card) => (
    <CardsItem
      firstClick={firstClick}
      setFirstClick={setFirstClick}
      secondClick={secondClick}
      setSecondClick={setSecondClick}
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

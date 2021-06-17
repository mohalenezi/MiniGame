import { ListWrap } from "../style.js";
import kddphotos from "../data";
import CardsItem from "./CardsItem";
const CardList = () => {
  const cardList = kddphotos.map((card) => (
    <CardsItem key={card.id} image={card.image} />
  ));

  return (
    <div>
      <ListWrap>{cardList}</ListWrap>;
    </div>
  );
};

export default CardList;

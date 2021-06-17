import { ListWrap } from "../style.js";
import kddphotos from "../data";
import CardsItem from "./CardsItem";
const CardList = () => {
  const pairOfKddphotos = [...kddphotos, ...kddphotos];
  const shuffledKdd = pairOfKddphotos.sort(() => Math.random() - 0.5);

  const cardList = shuffledKdd.map((card) => (
    <CardsItem key={card.id} image={card.image} />
  ));

  return (
    <div>
      <ListWrap>{cardList}</ListWrap>;
    </div>
  );
};

export default CardList;

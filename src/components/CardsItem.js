//items are cards and the flip movements from back to front when i click//
import CardWrapper from "../style";
import kddphotos from "../data";

const CardsItem = (props) => {
  return (
    <CardWrapper>
      <img alt={props.name} src={props.id.image} />
    </CardWrapper>
  );
};

export default CardsItem;

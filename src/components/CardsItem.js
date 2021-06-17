//items are cards and the flip movements from back to front when i click//
import { CardWrapper } from "../style";
import Flippy, { FrontSide, BackSide } from "react-flippy";
const CardsItem = (props) => {
  return (
    // <Flippy>
    //   flipOnClick={true}
    //   flipOnHover={false}
    //   flipDirection="horizontal" ref={(r) => (this.flippy = r)}
    <CardWrapper>
      <img alt={props.name} src={props.image} />
    </CardWrapper>
    /* </Flippy> */
  );
};

export default CardsItem;

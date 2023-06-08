import Image from "./Image";
import Title from "./Lizard";
import Text from "./Text";
import Button from "./Button";
import "../Styles/card.css";
import "../Styles/image.css";
import "../Styles/buttons.css";
const Card = ({ image, title, text, button }) => {
  return (
    <div className="container">
      <Image image={image} />
      <Title title={title} />
      <Text text={text} />
      <div className="buttons-container">
        <div className="buttons--display">
          <Button button={button[0]} />
          <Button button={button[1]} />
        </div>
      </div>
    </div>
  );
};
export default Card;

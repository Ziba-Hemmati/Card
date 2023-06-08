import Image from "./Image";
import Title from "./Lizard";
import Text from "./Text";
import Button from "./Button";
import "../Styles/card.css";
import "../Styles/image.css";
import "../Styles/buttons.css";
const Card = () => {
  return (
    <div className="container">
      <Image image={"../../public/Assets/car.jpeg"} />
      <Title title="Lizard" />
      <Text
        text={
          <div>
            Chevrolet is an iconic American car brand known for its reliable,
            dependable, and affordable vehicles. Founded in 1911, Chevy has
            become one of the most recognizable car brands in the world.
          </div>
        }
      />
      <div className="buttons-container">
        <div className="buttons--display">
          <Button button="SHARE" />
          <Button button="LEARN MORE" />
        </div>
      </div>
    </div>
  );
};
export default Card;

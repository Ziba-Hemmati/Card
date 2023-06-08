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
            <span className="text--bc">
              Chevrolet is an iconic American car brand known
            </span>{" "}
            <span className="text--bc">
              for its reliable, dependable, and affordable
            </span>{" "}
            <span className="text--bc">
              vehicles. Founded in 1911, Chevy has become
            </span>{" "}
            <span className="text--bc">
              one of the most recognizable car brands in the
            </span>{" "}
            <span className="text--bc">world.</span>
          </div>
        }
      />
      <div className="buttons--display">
        <Button button={<button className="button left-btn">SHARE</button>} />
        <Button
          button={<button className="button right-btn">LEARN MORE</button>}
        />
      </div>
    </div>
  );
};
export default Card;

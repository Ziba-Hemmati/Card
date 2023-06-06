import Image from "./Image";
import Title from "./Lizard";
import Text from "./Text";
import Button from "./Button";
import "../Styles/card.css";
import "../Styles/image.css";
const Card = () => {
  return (
    <div className="container">
      <Image image={<img />} />
      <Title title="Lizard" />
      <Text
        text="Chevrolet is an iconic American car brand known for its reliable,
        dependable, and affordable vehicles. Founded in 1911, Chevy has become
        one of the most recognizable car brands in the world."
      />
      <Button button={<button>Share</button>} />
      <Button button={<button>LEARN MORE</button>} />
    </div>
  );
};
export default Card;

import "../Styles/buttons.css";
const Button = ({ button }) => {
  return (
    <div>
      <button className="button">{button}</button>
    </div>
  );
};
export default Button;

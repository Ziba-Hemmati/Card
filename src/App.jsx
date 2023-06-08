import Card from "./Components/Card";
function App() {
  return (
    <div>
      <Card
        image={"../../public/Assets/car.jpeg"}
        title="Lizard"
        text="Chevrolet is an iconic American car brand known for its reliable,
      dependable, and affordable vehicles. Founded in 1911, Chevy has
      become one of the most recognizable car brands in the world."
        button={["SHARE", "LEARN MORE"]}
      />
    </div>
  );
}
export default App;

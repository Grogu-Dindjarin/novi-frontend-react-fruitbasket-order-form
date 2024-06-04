import "./App.css";

import FruitCard from "./components/FruitCard/FruitCard.jsx";

function App() {
  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
      <div className="fruit-card-container">
        <FruitCard></FruitCard>
        <FruitCard></FruitCard>
        <FruitCard></FruitCard>
        <FruitCard></FruitCard>
      </div>
    </>
  );
}

export default App;

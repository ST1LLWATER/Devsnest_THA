import "./App.css";
import React, { useState } from "react";
import Card from "./Card";
import Food from "./Food_data";

function App() {
  const [state, setState] = useState(Food);
  const Foodie = (food, id) => {
    return (
      <Card
        state={state}
        setState={setState}
        id={food.id}
        name={food.name}
        amount={food.amount}
        key={id}
      />
    );
  };
  return (
    <>
      <h1 className="head">Calorie (Read Only)</h1>
      <div className="cards">
        {state.length > 0 ? state.map(Foodie) : `No Objects Left :(`}
      </div>
    </>
  );
}

export default App;

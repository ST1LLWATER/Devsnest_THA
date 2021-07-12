import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [title, setTitle] = useState("");
  const [calorie, setCalorie] = useState("");
  const [cards, setCards] = useState([]);

  function handleClick(e) {
    e.preventDefault();

    cards.push({ title, calorie });
    setCards(cards);

    setTitle("");
    setCalorie("");
  }

  function handleDelete(index) {
    setCards(cards.filter((_, i) => i !== index));
  }



  // function handleEdit()

  return (
    <>
      <form className="form" onSubmit={handleClick}>
        <div className="wrapper">
          <div className="inputs">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Item Name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <input
              type="number"
              name="calorie"
              id="calorie"
              placeholder="Calorie Amount"
              value={calorie}
              onChange={(e) => setCalorie(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit">
            ADD ITEM
          </button>
        </div>
      </form>
      <div className="items">
        {cards.map((data, i) => (
          <Card
            key={i}
            title={data.title}
            calorie={data.calorie}
            handleDelete={() => handleDelete(i)}
          />
        ))}
      </div>
    </>
  );
}

export default App;

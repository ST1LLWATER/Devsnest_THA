import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [title, setTitle] = useState("");
  const [calorie, setCalorie] = useState("");
  const [cards, setCards] = useState([]);

  function handleClick(e) {
    e.preventDefault();

    cards.push({ title, calorie, index: cards.length });

    setCards(cards);

    setTitle("");
    setCalorie("");
  }

  function handleDelete(index) {
    setCards(
      cards.filter((card) => {
        console.log(index, card.index, card.index !== index);
        return card.index !== index;
      })
    );
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
        {cards.map((data) => (
          <Card
            key={data.index}
            title={data.title}
            calorie={data.calorie}
            handleDelete={() => handleDelete(data.index)}
          />
        ))}
      </div>
    </>
  );
}

export default App;

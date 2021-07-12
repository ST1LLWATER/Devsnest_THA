import { useState } from "react";
import "./App.css";
import Card from "./Assets/Card";

function App() {
  const [title,setTitle]=useState("");
  const [calorie,setCalorie]=useState("");
  function handleClick(e){
    e.preventDefault();
    // addItem({title,calorie});
    setTitle("");
    setCalorie("");
  }
  return (
    <>
    <form className="form" onSubmit={handleClick}>
    <div className="wrapper">
    <div className="inputs">
      <input type="text" name="name" id="name" placeholder="Item Name" value={title} onChange={e=> setTitle(e.target.value)} required />
      <input type="number" name="calorie" id="calorie" placeholder="Calorie Amount" value={calorie} onChange={e=> setCalorie(e.target.value)} required /></div>
      <button type="submit" className="submit">ADD ITEM</button></div>
    </form>
    <div className="items">
     <Card title={title} calorie={calorie}/>
     </div>
    </>
  );
}

export default App;

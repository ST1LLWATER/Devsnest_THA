import "./App.css";
import React from "react";
import Counters from "./Counters";

function Box(props) {
  console.log(props.alter, props.i);
  if (props.alter) {
    return (
      <div
        style={{ backgroundColor: props.i % 2 === 0 ? "black" : "white" }}
        className="box"
      ></div>
    );
  } else {
    return (
      <div
        style={{ backgroundColor: props.i % 2 === 0 ? "white" : "black" }}
        className="box"
      ></div>
    );
  }
}

function App() {
  let alter = true;
  return (
    <>
      <div id="wrapper">
        {[...Array(64)].map((box, i) => {
          if (i % 8 === 0 && i !== 0) {
            alter = !alter;
          }
          return <Box i={i} alter={alter} />;
        })}
      </div>
      <div className="counters">
        <Counters />
        <Counters />
        <Counters />
        <Counters />
      </div>
    </>
  );
}

export default App;

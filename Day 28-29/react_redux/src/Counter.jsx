import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  const [state, setState] = useState(0);

  return (
    <>
      <div
        className="cover"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <h1>Counter In ReDux IDK Why....</h1>
        <h3>Counter : {counter}</h3>
        <div style={{ display: "flex" }}>
          <button
            style={{ margin: "5px", padding: "5px 10px" }}
            onClick={() => dispatch({ type: "INCREMENT" })}
          >
            Increment
          </button>
          <button
            style={{ margin: "5px" }}
            onClick={() => dispatch({ type: "DECREMENT" })}
          >
            Decrement
          </button>
          <button
            style={{ margin: "5px" }}
            onClick={() => {
              dispatch({ type: "INCREMENT_BY", payload: state });
              setState("");
            }}
          >
            Increment By:
          </button>
          <input
            style={{
              margin: "5px",
              border: "none",
              padding: "0 2px",
              outline: "1px solid black",
            }}
            value={state}
            type="number"
            onChange={(e) => setState(e.target.value)}
          ></input>
        </div>
        <button onClick={() => dispatch({ type: "SIGN_IN" })}>
          {isLogged ? "SIGN OUT" : "SIGN IN"}
        </button>
        {isLogged ? <h3>Confidential Maal</h3> : ""}
      </div>
    </>
  );
}

export default Counter;

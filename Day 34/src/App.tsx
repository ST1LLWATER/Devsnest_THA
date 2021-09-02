import React, { useState } from "react";
import "./App.css";
import { reducerType } from "./reducers";
import { useDispatch, useSelector } from "react-redux";
import { addNote, deleteNote } from "./actions/index";

function App() {
  const notes = useSelector((state: reducerType) => state.notes);
  const [value, setValue] = useState<string>("");
  const dispatch = useDispatch();
  return (
    <div className="App">
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          dispatch(addNote(value));
          setValue("");
        }}
      >
        Add Note
      </button>
      {notes.map((note: string, index: number) => {
        return (
          <div key={index} className="todos">
            <h1>{note}</h1>
            <button
              onClick={() => {
                dispatch(deleteNote(index));
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;

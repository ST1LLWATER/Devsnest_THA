import axios from "./axios";
import { useState } from "react";
import "../App.css";
import Creds from "./creds";

const Meme = ({ meme, setMeme }) => {
  const [form, setForm] = useState({
    template_id: meme.id,
    username: Creds.username,
    password: Creds.password,
    font: "arial",
    boxes: [],
  });
  const [newMeme, setNewMeme] = useState(null);
  const genMeme = async () => {
    let finalMemeReq = `?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
    form.boxes.map((box, index) => {
      finalMemeReq += `&boxes[${index}][text]=${box.text}`;
    });
    // const finalMeme = await axios.post(finalMemeReq);
    const finalMeme = await fetch(
      `https://api.imgflip.com/caption_image${finalMemeReq}`,
      {
        method: "POST",
      }
    );

    let res = await finalMeme.json();
    const finalMemeTemplate = res.data.url;
    setNewMeme(finalMemeTemplate);

    // console.log(finalMeme);
  };
  return (
    <>
      <div className="meme">
        <h1 className="header">{meme.name} Template</h1>
        {newMeme ? (
          <img src={newMeme} alt={meme.name} />
        ) : (
          <img src={meme.url} alt={meme.name} />
        )}
        <div className="inputs">
          {[...Array(meme.box_count)].map((el, index) => {
            return (
              <input
                key={index}
                type="text"
                placeholder={`Caption ${index + 1}`}
                onChange={(e) => {
                  const newBoxes = form.boxes;
                  newBoxes[index] = { text: e.target.value };
                  setForm({ ...form, boxes: newBoxes });
                }}
              />
            );
          })}
        </div>
        <div className="buttons">
          <button onClick={genMeme}>Create Meme</button>
          <button onClick={() => setMeme(null)}>Back To Templates</button>
        </div>
      </div>
    </>
  );
};

export default Meme;

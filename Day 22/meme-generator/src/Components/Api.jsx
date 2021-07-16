import React, { useEffect, useState } from "react";
import Templates from "./Templates";
import Meme from "./Meme";
const axios = require("axios");

function Api() {
  const [data, setData] = useState([]);
  const [meme, setMeme] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("https://api.imgflip.com/get_memes");
      //   console.log(response);
      const info = response.data.data.memes;
      console.log(info);
      setData(info);
    };
    getData();
  }, []);
  return (
    <>
      {meme === null ? (
        <Templates data={data} setMeme={setMeme} />
      ) : (
        <Meme meme={meme} />
      )}
    </>
  );
}

export default Api;

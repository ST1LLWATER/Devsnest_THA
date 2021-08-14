import react, { useState, useEffect } from "react";
import axios from "axios";

const Tag = () => {
  const [gif, setGif] = useState("");
  const [tag, setTag] = useState("dogs");
  // const API_KEY = process.env.GIF_API_KEY;
  const API_KEY = "H79n2aGRVao5RMIKGPASLEXYRjrngVGf";
  const fetchGif = async (tag) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const { data } = await axios.get(url);
    const imgSrc = data.data.images.downsized_large.url;
    // console.log(imgSrc);
    setGif(imgSrc);
  };

  useEffect(() => {
    fetchGif();
  }, []);
  return (
    <>
      <h1>Random {tag} Gif</h1>
      <img src={gif} alt="Random Gif" />
      <input value={tag} type="text" onChange={(e) => setTag(e.target.value)} />
      <button onClick={fetchGif(tag)}>Roll On!</button>
    </>
  );
};

export default Tag;

import axios from "axios";
import react, { useEffect, useState } from "react";
import "../.env";

const Random = () => {
  const [gif, setGif] = useState("");
  // const API_KEY = process.env.GIF_API_KEY;
  const API_KEY = "H79n2aGRVao5RMIKGPASLEXYRjrngVGf";
  const fetchGif = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
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
      <h1>Random Gif</h1>
      <img src={gif} alt="Random Gif" />
      <button onClick={fetchGif}>Randomize Again</button>
    </>
  );
};

export default Random;

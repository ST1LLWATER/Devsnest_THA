import axios from "axios";

const getMeme = axios.create({
  baseURL: "https://api.imgflip.com/caption_image",
});

export default getMeme;

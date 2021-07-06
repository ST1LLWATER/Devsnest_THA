import reactDom from "react-dom";
import Card from "./Card";
import "./app.css";
import victor from "./images/image-victor.jpg";
// import "./images";

reactDom.render(
  <>
    <Card victor={victor} />
  </>,
  document.getElementById("root")
);

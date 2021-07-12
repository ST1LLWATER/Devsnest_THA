import "./Card.css";

function Card(props) {
  return (
    <>
    <div className="outer">
      <h2 className="item_name">{props.title}</h2>
      <p className="information">You Have Consumed {props.calorie} Calories</p>
      <button className="btn" id="delete">
        DELETE
      </button>
      <button className="btn" id="edit">
        EDIT
      </button>
      </div>
    </>
  );
}

export default Card;

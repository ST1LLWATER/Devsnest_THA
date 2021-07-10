import React from "react";

function Card(props) {
    const handleClick=(e)=>{
        let newData=props.state.filter(val=>val.id!==props.id)
        console.log(newData);
        props.setState(newData)
    }
  return (
      <>
      <div className="card">
      <div className="line1">
      <h2 className="name">{props.name}</h2>
      <button className="btn_delete" onClick={handleClick}>Delete</button></div>
      <p className="content">You Have consumed {props.amount} Calories Today</p>
      </div>
      </>
  );
}



export default Card;
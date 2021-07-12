import React from "react";

function Card(props) {
  return (
    <>
      <div className="card">
        <div className="image">
          <img className="victor" src={props.victor} alt="victor" />
        </div>
        <div className="text">
          <h2>
            Victor Crest <span className="age">26</span>
          </h2>
          <p>Germany</p>
        </div>
        <div className="stats">
          <div>
            80K
            <div className="stat">Followers</div>
          </div>
          <div>
            803K
            <div className="stat">Likes</div>
          </div>
          <div>
            1.4K
            <div className="stat">Photos</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

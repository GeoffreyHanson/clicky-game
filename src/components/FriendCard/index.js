import React from "react";
import "./style.css";

// Handles each randomized card.
function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} onClick={props.handleIncrement}/>
      </div>
    </div>
  );
}

export default FriendCard;

import React from "react";

// To update a child component or pass data up to its parent, create a method inside the parent for the update,
// Then bind the method to the parent, and pass it to the child as a prop

function CardBody(props) {
  return (
    <div className="card-body">
      <p className="card-text">Not loss: {props.count}</p>
      <button className="btn btn-primary" onClick={props.handleIncrement}>
        Increment
      </button>
      
    </div>
  );
}

export default CardBody;

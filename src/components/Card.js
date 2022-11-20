import React from "react";
import "../styles/Card.css";

const Card = (props) => {
  return (
    <div>
      <div className="card-container">
        <div className="main--container">
          <img className="main-img" src={props.imageUrl} alt="" />
        </div>

        <div className="info">
          <div className="location">
            <img className="small-icon" src="/images/location.svg" alt="" />
            <h6>{props.location}</h6>
            <a href={props.googleMapsUrl} target="_blank" rel="noreferrer">
              View on Google Maps
            </a>
          </div>
          <h2 className="title">{props.title}</h2>
          <h6 className="date">
            open: {props.open} - {props.close}
          </h6>
          <p className="description">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

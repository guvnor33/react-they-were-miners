import "./Card.css";
import React from "react";

export default function Card(props) {
  // let badgeText
  // if (props.openSpots === 0) {
  //     badgeText = "SOLD OUT"
  // } else if (props.location === "Online") {
  //     badgeText = "ONLINE"
  // }
  console.log(props);
  return (
    <div className="card--box">
      <div className="card">
        <p className="card--badge">
          {props.name}
          {/* Unit: {props.name} Owned: {props.numOwned} */}
        </p>
        <p className="card--stats">
          {props.name + 's: ' + props.numOwned}
          {/* Unit: {props.name} Owned: {props.numOwned} */}
        </p>

        {/* {
                badgeText && 
                <div className="card--badge">{badgeText}</div>
            }
            <img 
                src={`../images/${props.coverImg}`} 
                className="card--image" 
            />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price">
                <span className="bold">From ${props.price}</span> / person
            </p> */}
      </div>
    </div>
  );
}

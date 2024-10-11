import React from "react";

export default function Service(props) {
  return (
    <div className="service-card">
      <img src={props.image} alt="" />
      <h3>{props.service}</h3>
    </div>
  );
}

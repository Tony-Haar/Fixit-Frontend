import React from "react";
import { Link } from "react-router-dom";

export default function Service(props) {
  return (
    <Link to="/domain/service-details">
      <div className="service-card">
        <img src={props.image} alt="" />
        <h3>{props.service}</h3>
      </div>
    </Link>
  );
}

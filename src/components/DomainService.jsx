import React from "react";


export default function DomainService(props) {

    const service_one = props.serviceslist[0];
    const service_two = props.serviceslist[1];
    const service_three = props.serviceslist[2];

    return(
        <div className = "domain-service-detail-card">
            <img src = {props.image} alt="" />
            <h4>{props.servicetype}</h4>
            <ul>
                <li>{service_one}</li>
                <li>{service_two}</li>
                <li>{service_three}</li>
            </ul>
        </div>
    )
}
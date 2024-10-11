import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from '@fortawesome/free-solid-svg-icons';

import ProfileImage from "../assets/profile.jpeg"


export default function Profile(props) {

    return (
        <div className = "profile-card">
            <img className = "profile-advert-image" src = {props.image} />
            <div className = "profile-card-footer">
                <div className = "profile-card-footer-inner">
                    <img className = "professional-profile-img" src = {ProfileImage} width = "40px" height = "40px"/>
                    <p>{props.name}</p>
                </div>
                <div className = "profile-card-footer-inner">
                    <FontAwesomeIcon icon = {faStar} />
                    <p>{props.rating}</p>
                </div>
            </div>
            <p className = "profile-card-gig">{props.gig}</p>
        </div>
    )
}
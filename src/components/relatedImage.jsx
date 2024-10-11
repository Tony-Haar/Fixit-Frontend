import React from "react";


export default function RelatedImage(props) {

    return (
        <div className = "related-image-card">
            <img src = {props.image} />
            <p>{props.repair}</p>
        </div>
    )
}
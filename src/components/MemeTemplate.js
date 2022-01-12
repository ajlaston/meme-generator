import React from "react";
import "./MemeTemplate.css";

export default function MemeTemplate(props) {

    return (
        <div className="meme-preview">

            <div className="img-wrapper">
                <img className="image" alt="memeImage" src={props.image} />
            </div>

            <div className="meme-text-wrapper">
                <h3 className="top-text meme-text">{props.topText}</h3>
                <h3 className="bottom-text meme-text">{props.bottomText}</h3>
            </div>

        </div>
    )
}
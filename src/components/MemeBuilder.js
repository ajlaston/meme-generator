import React from "react";
import "./MemeBuilder.css";
import MemeTemplate from "./MemeTemplate";

export default function MemeBuilder(props) {

    const { topText, bottomText, image } = props.meme;

    return (
        <div className="meme">
            <form className="meme-input" onSubmit={props.submit}>
                <input className="text" onChange={props.change} name="topText" type="text" id="" value={topText} placeholder="Top Text" />
                <input className="text" onChange={props.change} name="bottomText" type="text" id="" value={bottomText} placeholder="Bottom Text" />
                <br />
                <button className="btn submit-btn">submit</button>
            </form>

            <div className="meme-container">

                <MemeTemplate 
                    {...props.meme}
                />

                <button onClick={props.refresh} className="btn refresh-btn">refresh meme image</button>
            </div>
        </div>
    )
}
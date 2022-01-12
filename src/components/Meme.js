import React from "react";
import "./Meme.css"

export default function Meme(props){

    return(
        <li className="meme-item" style={{backgroundImage : `url(${props.attr.image})`}}>
            <button onClick={()=>props.edit(props.attr)}>edit/preview</button>
            <button onClick={()=>props.del(props.attr)}>delete</button>
        </li>
    )
}
import React from "react";
import "./SavedMeme.css"
import Meme from "./Meme";
import MemeTemplate from "./MemeTemplate";

export default function SavedMemes(props) {

    const {saved, edit, del} = props;

    //const [mapped, setMapped] = React.useState([]);

        let mapped = [];
        for(let item in saved){
            const meme = <Meme key={item} attr={saved[item]} edit={edit} del={del}/>
            mapped.push(meme);
        }
  
    

    return (
        <div className="saved-memes">
            <ul className="meme-list">
                {mapped}
            </ul>
        </div>
    )
}
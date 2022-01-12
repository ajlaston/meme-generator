import React from "react";
import "./Body.css";
import SavedMemes from "./SavedMemes";
import MemeBuilder from "./MemeBuilder";
import * as MemeApi from "../api/memeApi.js";
import MemeTemplate from "./MemeTemplate";
import html2canvas from "html2canvas";

export default function Body() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        image: "",
        id : ""
    });

    const [count, setCount] = React.useState(0);
    const [memeList, setMemeList] = React.useState([]);
    const [savedMemes, setSavedMemes] = React.useState({});

    const getRandomMeme = () => {
        if (memeList.length > 0) {
            const rng = Math.floor(Math.random() * memeList.length);
            const randomMeme = memeList[rng].url;
            setMeme(prevState => ({ ...prevState, image: randomMeme }));
        }

    }

    function handleChange(e) {
        const { value, name } = e.target;
        setMeme(prevState => ({ ...prevState, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSavedMemes(prevState=>{
            const name = meme.id !== "" ? meme.id : count;
            const value = {...meme, id : name}
            const newState = {...prevState, [name] : value};
            return newState;
        });

        if(meme.id === ""){
            setCount(prev=>prev + 1);
        }
        

        setMeme(prevState=>({
            ...prevState,
            topText: "",
            bottomText: "",
            id : ""
        }));
    }

    function edit(obj){
        setMeme({
            topText: obj.topText,
            bottomText: obj.bottomText,
            image: obj.image,
            id : obj.id
        });
    }

    function deleteMeme(obj){
        setSavedMemes(prevState=>{
            delete prevState[obj.id]
            return prevState;
        })

        setMeme(prevState=>({
            ...prevState,
            topText: "",
            bottomText: "",
            id : ""
        }));
    }

    React.useEffect(() => {
        MemeApi.getMemeList(setMemeList);
    }, []);

    React.useEffect(() => {
        getRandomMeme();
    }, [memeList])

    return (
        <main>
            <div className="body-content">
                <MemeBuilder
                    meme={meme}
                    change={handleChange}
                    refresh={getRandomMeme}
                    submit={handleSubmit}
                />
                {Object.keys(savedMemes).length > 0 && <SavedMemes saved={savedMemes} edit={edit} del={deleteMeme}/>}
            </div>
        </main>
    )
}
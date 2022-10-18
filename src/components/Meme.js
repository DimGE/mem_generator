import React from "react";
import data from "../memeData"

const Meme = () => {

    // const [memeImage,setMemeImage] = React.useState("")
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(data)

    function getImageMeme() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: url
            }
        })
    }

    return (
        <main className="meme">
            <div className="form" action="">
                <input className="form--input" placeholder="Top text" type="text"/>
                <input className="form--input" placeholder="Bottom text" type="text"/>
                <button onClick={getImageMeme} className="form--button">Get a new meme image 🖼</button>
            </div>
            <img src={meme.randomImage} className="meme--img"/>
        </main>
    )
}
export default Meme
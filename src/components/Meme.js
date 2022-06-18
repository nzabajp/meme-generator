import React from "react";
import html2canvas from 'html2canvas'

export default function Meme() {
    
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    //image database state
    const [allMemes, setAllMemes] = React.useState([])
    
    //initial state
    const initialMeme = {
        topText: "top text",
        bottomText: "bottom text",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    }
    //meme state
    const [meme, setMeme] = React.useState(initialMeme)
    
    //func to get new image
    function getMemeImage() {
        const randomIndex = Math.floor(Math.random() * allMemes.length)
        const memeImageUrl = allMemes[randomIndex].url
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: memeImageUrl
            }
        })   
    }
    
    //func to change the top and bottom text
    function textChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }
    
    //func to select all text in textarea when the area is clicked
    function selectAllText(event) {
        event.target.select()
    }

    return (
        <main className="meme-input" >
            <input 
                type="text" 
                placeholder="top text"
                name="topText"
                value={meme.topText}
                onChange={textChange}
                onClick={selectAllText}
            />
            <input 
                type="text" 
                placeholder="bottom text"
                name="bottomText"
                value={meme.bottomText}
                onChange={textChange}
                onClick={selectAllText}
            />
            <br />
            <button onClick={getMemeImage}>Get a new meme image 🖼</button>
            <div id="exportContainer" className="meme-img">
                <img src={meme.randomImage} alt="meme" />
                <h2 className="top-text">{meme.topText}</h2>
                <h2 className="bottom-text">{meme.bottomText}</h2>
            </div>
        </main>
    )
}
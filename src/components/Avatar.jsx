import React, { useState } from 'react';
// import Axios from 'axios';
import '../styles/Avatar.css';


export default function Avatar(){
    const [sprite, setSprite] = useState("bottts");
    const [seed, setSeed] = useState(1000);

    function handleSprite(spritetype) {
        setSprite(spritetype);
    }

    function handleGenerate() {
        setSeed(Math.floor(Math.random() * 5000));
    }

    function downloadImage() {
        fetch(`https://api.dicebear.com/8.x/${sprite}/svg?seed=${seed}`)
            .then(response => response.blob())
            .then(blob => {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = `${seed}.svg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            }).catch(console.error);
    }
    return (
        <div className="container">
            <div className="nav">
                <p>Random Avatar Generator</p>
            </div>
            <div className="home">
                <div className="btns">
                    <button onClick={() => { handleSprite("avataaars") }}>Human</button>
                    <button onClick={() => { handleSprite("pixel-art") }}>Pixel</button>
                    <button onClick={() => { handleSprite("bottts") }}>Bots</button>
                    <button onClick={() => { handleSprite("notionists-neutral") }}>Notionist</button>
                    <button onClick={() => { handleSprite("fun-emoji") }}>Fun Emoji</button>
                    <button onClick={() => { handleSprite("personas") }}>Personas</button>
                    <button onClick={() => { handleSprite("micah") }}>Micah</button>
                </div>
                <div className="avatar-container">
                    <img
                        src={`https://api.dicebear.com/8.x/${sprite}/svg?seed=${seed}`}
                        alt="Avatar"
                        className="avatar-img"
                    />
                </div>
                <div className="generate">
                    <button id="gen-btn" onClick={handleGenerate}>Next</button>
                    <button id="down-btn" onClick={downloadImage}>Download</button>
                </div>
            </div>
        </div>
    );
}
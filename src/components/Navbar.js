import React from "react";
import logo from "../images/troll-logo.png";

export default function Navbar() {
    return (
        <nav>
            <img src={logo} alt="logo" />
            <h1>Meme Generator</h1>
            <p>React Course - Project 3</p>
        </nav>
    )
}
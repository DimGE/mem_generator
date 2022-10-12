import React from "react";
import trol from "../img/trol.png"

const Header = ()=>{
    return(
        <div className="header">
            <div className="header--logo">
                <img className="logo--img" src={trol} alt=""/>
                <h2 className="logo--text">Meme generator</h2>
            </div>
            <p className="header--name">React Course - Project 3</p>

        </div>
    )
}
export default Header
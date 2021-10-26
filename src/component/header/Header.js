import React from "react";
import webmotors from '../assets/webmotors.png';
import './Header.css'

const Home = () => {

    return(
        <div>
            <header className="header">
                <a href="/"> <img className="logo" src={webmotors}  alt="logo"/> </a>
            </header>
        </div>
    );
}

export default Home;
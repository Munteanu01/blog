import React from "react";
import { useState } from 'react';
import { Squeeze as Squeeze } from 'hamburger-react'
export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
    setIsOpen(!isOpen);
    }
    return (
    <nav className="">
        <div className="">
        <a href=""><img className="w-[48px]" src="./img/logo.png"></img></a>
        <button className="" onClick={toggleMenu}>
            <Squeeze size={30} duration={0.2} color="black" label="Show menu"/>
        </button>
        </div>
        <div className="">
            <ul className="">
            <li><a className="" href="">Menu 1</a></li>
            <li><a className="" href="">Menu 2</a></li>
            <li><a className="" href="">Menu 3</a></li>
            </ul>
        </div>
    </nav>
    );
}
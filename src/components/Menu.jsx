import React from "react";
import { useState } from 'react';
import { Squeeze as Hamburger, Squeeze } from 'hamburger-react'
export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
    setIsOpen(!isOpen);
    }
    return (
    <nav className={`${isOpen ? 'block' : 'flex'}`}>
        <a href=""><img className={`${isOpen ? 'hidden' : 'w-[48px] ml-5'}`} src="./img/logo.png"></img></a>
        <button className="md:hidden flex ml-auto mr-3" onClick={toggleMenu}>
            <Squeeze size={30} duration={0.2} color="black" label="Show menu"/>
        </button>
        <div className={`${isOpen ? 'block h-[100vh] md:h-[auto]' : 'hidden'} md:block `}>
            <ul className="md:flex">
            <li><a className="px-5" href="">Menu 1</a></li>
            <li><a className="px-5" href="">Menu 2</a></li>
            <li><a className="px-5" href="">Menu 3</a></li>
            </ul>
        </div>
    </nav>
  );
}
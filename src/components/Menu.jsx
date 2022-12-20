import React from "react";
import { useState } from 'react';
import { Squeeze as Squeeze } from 'hamburger-react'
export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
    setIsOpen(!isOpen);
    }
    return (
    <nav className="md:flex block justify-between">
        <div className="md:inline-block flex">
        <a href=""><img className="w-[48px] ml-5" src="./img/logo.png"></img></a>
        <button className="md:hidden flex ml-auto mr-3" onClick={toggleMenu}>
            <Squeeze size={30} duration={0.2} color="black" label="Show menu"/>
        </button>
        </div>
        <div className={`${isOpen ? 'block h-[100vh] md:h-[auto]' : 'hidden'} md:flex`}>
            <ul className="md:flex text-center md:py-[13px] py-[25vh] ">
            <li><a className="px-5 md:leading-[1rem] leading-[4rem]" href="">Menu 1</a></li>
            <li><a className="px-5 md:leading-[1rem] leading-[4rem]" href="">Menu 2</a></li>
            <li><a className="px-5 md:leading-[1rem] leading-[4rem]" href="">Menu 3</a></li>
            </ul>
        </div>
    </nav>
  );
}
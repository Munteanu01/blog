import React from "react";
import { useState } from 'react';
import { Squeeze as Squeeze } from 'hamburger-react'
export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
    setIsOpen(!isOpen);
    }
    return (
    <nav className="flex justify-between top-0">
        <a className="z-[2]" href="">
            <img className="w-[48px] ml-5" src="./img/logo.png"></img>
        </a>
        <button className="z-[2] md:hidden" onClick={toggleMenu}>
            <Squeeze size={30} duration={0.3} color="black" label="Show menu"/>
        </button>
        <div className={`md:py-0 py-10 absolute md:static bg-white md:z-auto z-[1] w-full md:w-auto transition-all duration-[0.4s] ease-in-out ${isOpen ? 'top-[40px] ':'top-[-80px]'}`}>
            <ul className="flex justify-between mx-20"
                style={{
                    animationName: isOpen ? 'navOpacityOn' : 'navOpacityOff',
                    animationDuration: isOpen ? '300ms' : '150ms',
                    animationFillMode: 'both',
                }}>
            <li><a className="" href="">Menu 1</a></li>
            <li><a className="px-10" href="">Menu 2</a></li>
            <li><a className="" href="">Menu 3</a></li>
            </ul>
        </div>
    </nav>
    );
}
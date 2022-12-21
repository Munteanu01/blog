import React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";
import { Squeeze as Squeeze } from 'hamburger-react'


export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
    setIsOpen(!isOpen);
    }
    return (
    <nav className="flex justify-between top-0">
        <Link to="/Home" className="z-[2]"><img className="w-[48px] ml-5" src="./img/logo.png"></img></Link> 
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
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/All">All</Link></li>
            <li><Link to="/Tech">Tech</Link></li>
            <li><Link to="/Science">Science</Link></li>
            </ul>
        </div>
    </nav>
    );
}
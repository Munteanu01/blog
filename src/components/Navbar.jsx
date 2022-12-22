import React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";


export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
    setIsOpen(!isOpen);
    }
    return (
    <nav className="flex  justify-between md:justify-end md:pt-10 pt-1 sticky top-0">
        <Link to="/Home" className="z-[2]"><img className="w-[48px] ml-5" src="./img/logo.png"></img></Link> 
        <button className="z-[2] md:hidden mr-5" onClick={toggleMenu}><img className="w-[24px]" src='/img/menu-white.png'alt=""/></button>
        <div className={`md:py-0 md:flex md:items-center sm:py-7 absolute md:static md:z-auto z-[1] w-full md:w-auto transition-all duration-[0.4s] ease-in-out ${isOpen ? 'top-[40px] ':'top-[-80px]'}`}>
            <ul className="sm:flex grid grid-cols-2 justify-between mx-24 md:w-[33vw] md:max-w-[550px] md:mr-28 md:ml-16 font-semibold text-lg"
                style={{
                    animationName: isOpen ? 'navOpacityOn' : 'navOpacityOff',
                    animationDuration: isOpen ? '300ms' : '150ms',
                    animationFillMode: 'both',
                }}>
            <li className="col-span-1 text-center pb-1 md:pb-0" onClick={toggleMenu}><Link to="/Home">Home</Link></li>
            <li className="col-span-1 text-center pb-1 md:pb-0" onClick={toggleMenu}><Link to="/Tech">Tech</Link></li>
            <li className="col-span-1 text-center pb-2 md:pb-0" onClick={toggleMenu}><Link to="/Science">Science</Link></li>
            <li className="col-span-1 text-center pb-2 md:pb-0" onClick={toggleMenu}><Link to="/All">All</Link></li>
            </ul>
        </div>
    </nav>
    );
}
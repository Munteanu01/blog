import React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";


export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
    setIsOpen(!isOpen);
    }
    return (
    <nav className="bg-black flex justify-between lg:justify-end lg:pt-10 md:pt-6 pt-1 md:ml-20 sticky top-0">
        <Link to="/Home" className="z-[2]"><img className="w-[48px] md:w-[58px] ml-5" src="../img/logo.png"></img></Link> 
        <button className="z-[2] md:hidden mr-5" onClick={toggleMenu}><img className="w-[24px]" src='/img/menu-white.png'alt=""/></button>
        <div className={`bg-black md:py-0 md:flex md:items-center sm:py-7 absolute md:static md:z-auto z-[1] w-full md:w-auto transition-all duration-[0.4s] ease-in-out ${isOpen ? 'top-[40px] ':'top-[-80px]'}`}>
            <ul className="sm:flex grid grid-cols-2 justify-between mx-24 md:w-[40vw] lg:w-[33vw] md:max-w-[550px] md:mr-20 lg:mr-28 lg:ml-16 md:ml-10 font-semibold text-lg"
                style={{
                    animationName: isOpen ? 'navOpacityOn' : 'navOpacityOff',
                    animationDuration: isOpen ? '300ms' : '150ms',
                    animationFillMode: 'both',
                }}>
            <li className="col-span-1 text-center pb-1 md:pb-0" onClick={toggleMenu}><Link to="/Home">Home</Link></li>
            <span className="hidden md:inline-block">/</span>
            <li className="col-span-1 text-center pb-1 md:pb-0" onClick={toggleMenu}><Link to="/Tech">Tech</Link></li>
            <span className="hidden md:inline-block">/</span>
            <li className="col-span-1 text-center pb-2 md:pb-0" onClick={toggleMenu}><Link to="/Science">Science</Link></li>
            <span className="hidden md:inline-block">/</span>
            <li className="col-span-1 text-center pb-2 md:pb-0" onClick={toggleMenu}><Link to="/All">All</Link></li>
            </ul>
        </div>
    </nav>
    );
}
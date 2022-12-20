import React from "react";
import { useState } from 'react';
import { Squeeze as Hamburger, Squeeze } from 'hamburger-react'
export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
    setIsOpen(!isOpen);
    }
    return (
    <nav className="">
        <button className="md:hidden flex ml-auto mr-1" onClick={toggleMenu}>
            <Squeeze size={30} duration={0.2} color="black" label="Show menu"/>
        </button>
        <div className={`${isOpen ? 'block h-[100vh] md:h-[auto]' : 'hidden'} md:block `}>
            <ul className="md:flex">
            <li><a className="px-5" href="">Menu item 1</a></li>
            <li><a className="px-5" href="">Menu item 2</a></li>
            <li><a className="px-5" href="">Menu item 3</a></li>
            </ul>
        </div>
    </nav>
  );
}
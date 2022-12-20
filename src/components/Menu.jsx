import React from "react";
import { useState } from 'react';
export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
    setIsOpen(!isOpen);
    }
    return (
    <>
        <button onClick={toggleMenu} className="md:hidden">
            Toggle Menu
        </button>
        <div className={`${isOpen ? 'block' : 'hidden'} md:block`}>
            <ul>
            <li><a href="">Menu item 1</a></li>
            <li><a href="">Menu item 2</a></li>
            <li><a href="">Menu item 3</a></li>
            </ul>
        </div>
    </>
  );
}
import React from "react";
import { useState } from 'react';
export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
    setIsOpen(!isOpen);
    }
    return (
    <nav className="my-4">
        <button onClick={toggleMenu} className="md:hidden">
            Toggle Menu
        </button>
        <div className={`${isOpen ? 'block h-[100vh] md:h-[auto]' : 'hidden'} md:block `}>
            <ul className="md:flex">
            <li><a href="">Menu item 1</a></li>
            <li><a href="">Menu item 2</a></li>
            <li><a href="">Menu item 3</a></li>
            </ul>
        </div>
    </nav>
  );
}
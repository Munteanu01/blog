import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Menu() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true)
    const handleScroll = () => {
    const currentScrollPos = window.scrollY
    if(currentScrollPos > prevScrollPos){
        setVisible(false)
    }else{
        setVisible(true)
    }
    setPrevScrollPos(currentScrollPos)
    }
    useEffect( () => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
    })
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
    setIsOpen(!isOpen);
    }
    return (
    <nav className={`dark:bg-black bg-white flex justify-between mx-auto max-w-[1025px]
        sticky transition-all duration-[0.4s] ${visible ? "top-0" : "top-[-150px]"}`}>
        <Link to="/Home" className="z-[2] hidden dark:block"><img className="w-[48px] ml-5 md:ml-0" src="../img/logo-light.png"></img></Link> 
        <Link to="/Home" className="z-[2] block dark:hidden"><img className="w-[48px] ml-5 md:ml-0" src="../img/logo-dark.png"></img></Link> 
        <button className="z-[2] md:hidden mr-5 hidden dark:block" onClick={toggleMenu}><img className="w-[24px]" src='/img/menu-light.png'alt=""/></button>
        <button className="z-[2] md:hidden mr-5 block dark:hidden" onClick={toggleMenu}><img className="w-[24px]" src='/img/menu-dark.png'alt=""/></button>
        <div className={`w-full md:w-auto  sm:py-7 md:flex md:py-0 md:items-center  
            dark:bg-black bg-white md:static absolute z-[1] md:z-auto transition-all duration-[0.4s] ease-in-out ${isOpen ? 'top-[40px] ':'top-[-80px]'}`}>
            <ul className="grid grid-cols-2 justify-between max-w-[200px] mx-auto sm:flex sm:max-w-md 
                font-semibold text-lg"
                style={{
                    animationName: isOpen ? 'navOpacityOn' : 'navOpacityOff',
                    animationDuration: isOpen ? '300ms' : '150ms',
                    animationFillMode: 'both',
                }}>
            <li className="col-span-1 text-center pb-1 md:pb-0 md:pr-5" onClick={toggleMenu}><Link to="/Home">Home</Link></li>
            <li className="col-span-1 text-center pb-1 md:pb-0 md:pr-5" onClick={toggleMenu}><Link to="/Tech">Tech</Link></li>
            <li className="col-span-1 text-center pb-2 md:pb-0 md:pr-5" onClick={toggleMenu}><Link to="/Science">Science</Link></li>
            <li className="col-span-1 text-center pb-2 md:pb-0" onClick={toggleMenu}><Link to="/All">All</Link></li>
            </ul>
        </div>
    </nav>
    );
}
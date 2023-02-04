<<<<<<< HEAD
import { FaBars, FaTimes } from "react-icons/fa";
=======
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
>>>>>>> main
import navbar from '../../services/navbar.json';


const NavBar = ({nav, setNav, scrollToSection, arrayRef}: any) => {
  const content = navbar.content;
  const links = content.links;

  return (
    <div className="flex shadow-gray-900 justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-50">
      <div>
        <h1 className="text-5xl font-signature ml-2">Adrian Villa</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link },index) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <a onClick={()=> scrollToSection(arrayRef[index], false)}>
              {link}
            </a>
          </li>
        ))}
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
          <a href={content.resume} target="_blank">Download C.V</a>
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link },index) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <a onClick={()=> scrollToSection(arrayRef[index], true)}>
              {link}
            </a>
            </li>
          ))}
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
          <a href={content.resume} target="_blank">Download C.V</a>
        </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;

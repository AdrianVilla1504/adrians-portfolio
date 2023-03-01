import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";

import { FaBars, FaTimes } from "react-icons/fa";
import { TbLanguage } from "react-icons/tb";
import { AiOutlineCaretDown, AiFillCaretUp } from "react-icons/ai";
import { NavProps } from "../../services/sectionTypes/navbarTypes";

const NavBar = ({ nav, setNav, scrollToSection, arrayRef }: NavProps) => {
  const { t, i18n } = useTranslation("navbar");
  const [open, setOpen] = useState<boolean>(false);
  const refLang: any = useRef(null);

  const resumeURL = `https://res.cloudinary.com/dkagy4g5m/image/upload/${t(
    "content.resumeV"
  )}/Portfolio/${t("content.resumeId")}`;

  const links: { id: number; link: string }[] = t("content.links", {
    returnObjects: true,
  });

  const setLanguage = (lng: string): void => {
    i18n.changeLanguage(lng);
  };

  const closeDrop = (e: any) => {
    if (refLang.current && open && !refLang.current.contains(e.target)) {
      setOpen(false);
    }
  };

  document.addEventListener("mousedown", closeDrop);

  return (
    <div className="flex shadow-gray-900 justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-50">
      <div>
        <h1 className="text-5xl font-signature ml-2">Adrian Villa</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(
          ({ id, link }: { id: number; link: string }, index: number) => (
            <li
              key={id}
              className="px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200"
            >
              <a onClick={() => scrollToSection(arrayRef[index], false)}>
                {link}
              </a>
            </li>
          )
        )}
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
          <a href={resumeURL} target="_blank">
            {t("content.resumeTitle")}
          </a>
        </li>
        <div ref={refLang}>
          <li className="sm:invisible md:visible px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
            <button
              className="flex mt-[5px] flex-row items-center justify-center gap-1"
              onClick={() => setOpen((prev) => !prev)}
            >
              <TbLanguage size={20} />
              {!open ? (
                <AiOutlineCaretDown size={15} />
              ) : (
                <AiFillCaretUp
                  className={`${
                    open === true ? "text-white" : "text-gray-500"
                  } `}
                  size={15}
                />
              )}
            </button>

            {open && (
              <ul className="absolute mt-[3px] ml-[-47px] z-50 flex flex-col bg-slate-700 w-[95px] rounded-xl p-[20px]">
                <li
                  className={`ppx-4 cursor-pointer capitalize font-medium ${
                    i18n.language === "en" ? "text-white" : "text-gray-500"
                  } hover:scale-105 duration-200`}
                >
                  <button
                    onClick={(): void => {
                      setLanguage("en");
                    }}
                  >
                    English
                  </button>
                </li>
                <li
                  className={`ppx-4 cursor-pointer capitalize font-medium ${
                    i18n.language === "es" ? "text-white" : "text-gray-500"
                  } hover:scale-105 duration-200`}
                >
                  <button
                    onClick={(): void => {
                      setLanguage("es");
                    }}
                  >
                    Español
                  </button>
                </li>
              </ul>
            )}
          </li>
        </div>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(
            ({ id, link }: { id: number; link: string }, index: number) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <a onClick={() => scrollToSection(arrayRef[index], true)}>
                  {link}
                </a>
              </li>
            )
          )}
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <a href={resumeURL} target="_blank">
              {t("content.resumeTitle")}
            </a>
          </li>
          <li
            className={`px-4 cursor-pointer capitalize py-6 text-4xl ${
              i18n.language === "en" ? "text-white" : "text-gray-500"
            }`}
          >
            <button
              onClick={(): void => {
                setLanguage("en");
              }}
            >
              English
            </button>
          </li>
          <li
            className={`px-4 cursor-pointer capitalize py-6 text-4xl ${
              i18n.language === "es" ? "text-white" : "text-gray-500"
            }`}
          >
            <button
              onClick={(): void => {
                setLanguage("es");
              }}
            >
              Español
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;

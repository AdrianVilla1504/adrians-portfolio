import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";

import { FaBars, FaTimes } from "react-icons/fa";
import { TbLanguage } from "react-icons/tb";
import { NavMobileProps } from "../../services/sectionTypes/navbarTypes";

function NavbarMobile({
  links,
  scrollToSection,
  resumeURL,
  arrayRef,
  setLanguage,
  nowRef,
}: NavMobileProps) {
  const { t, i18n } = useTranslation("navbar");

  return (
    <div>
      <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800">
        {links.map(
          ({ id, link }: { id: number; link: string }, index: number) => (
            <li
              key={id}
              className={`${
                nowRef === arrayRef[index] ? "text-white" : "text-gray-500"
              } px-4 cursor-pointer capitalize py-6 text-2xl`}
            >
              <a onClick={() => scrollToSection(arrayRef[index], true)}>
                {link}
              </a>
            </li>
          )
        )}
        <li className=" active:text-white  text-gray-500 px-4 cursor-pointer capitalize py-6 text-2xl">
          <a href={resumeURL} target="_blank">
            {t("content.resumeTitle")}
          </a>
        </li>
        <li className="pt-[20px]">
          <TbLanguage className="text-white text-4xl" />
        </li>
        <div className="flex mt-[-20px]">
          <li
            className={`px-4 cursor-pointer capitalize py-6 text-xl ${
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
            className={`px-4 cursor-pointer capitalize py-6 text-xl ${
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
        </div>
      </ul>
    </div>
  );
}

export default NavbarMobile;

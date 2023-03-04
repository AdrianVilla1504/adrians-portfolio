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
}: NavMobileProps) {
  const { t, i18n } = useTranslation("navbar");

  return (
    <div>
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
    </div>
  );
}

export default NavbarMobile;

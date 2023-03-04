import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";

import { FaBars, FaTimes } from "react-icons/fa";
import { TbLanguage } from "react-icons/tb";
import { AiOutlineCaretDown, AiFillCaretUp } from "react-icons/ai";
import { NavProps } from "../../services/sectionTypes/navbarTypes";

import NavbarMobile from "../../subcomponents/navbarMobile/index";
import NavbarFullScreen from "../../subcomponents/navbarFullScreen";

const NavBar = ({
  nav,
  setNav,
  scrollToSection,
  arrayRef,
  nowRef,
}: NavProps) => {
  const { t, i18n } = useTranslation("navbar");
  const [open, setOpen] = useState<boolean>(false);
  const refLang = useRef<HTMLDivElement>(null);

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

      <NavbarFullScreen
        refLang={refLang}
        open={open}
        setOpen={setOpen}
        scrollToSection={scrollToSection}
        resumeURL={resumeURL}
        links={links}
        arrayRef={arrayRef}
        setLanguage={setLanguage}
        nowRef={nowRef}
      />

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-[0px] z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <>
          <NavbarMobile
            scrollToSection={scrollToSection}
            resumeURL={resumeURL}
            links={links}
            arrayRef={arrayRef}
            setLanguage={setLanguage}
            nowRef={nowRef}
          />
        </>
      )}
    </div>
  );
};

export default NavBar;

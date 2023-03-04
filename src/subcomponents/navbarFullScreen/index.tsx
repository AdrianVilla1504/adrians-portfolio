import { useTranslation } from "react-i18next";

import { AiOutlineCaretDown, AiFillCaretUp } from "react-icons/ai";

import { TbLanguage } from "react-icons/tb";
import { NavFullProps } from "../../services/sectionTypes/navbarTypes";

function NavbarFullScreen(
  {
    refLang,
    open,
    setOpen,
    links,
    scrollToSection,
    resumeURL,
    arrayRef,
    setLanguage,
    nowRef,
  }: any /* NavFullProps */
) {
  const { t, i18n } = useTranslation("navbar");

  return (
    <div>
      <ul className="hidden md:flex">
        {links.map(
          ({ id, link }: { id: number; link: string }, index: number) => (
            <li
              key={id}
              className={`px-4 cursor-pointer font-medium ${
                nowRef === arrayRef[index] ? "text-white" : "text-gray-500"
              } hover:scale-105 duration-200`}
            >
              <a onClick={() => scrollToSection(arrayRef[index], false)}>
                {link}
              </a>
            </li>
          )
        )}
        <li className="px-4 cursor-pointer capitalize active:text-white font-medium text-gray-500 hover:scale-105 duration-200">
          <a href={resumeURL} target="_blank">
            {t("content.resumeTitle")}
          </a>
        </li>
        <div ref={refLang}>
          <li className="sm:invisible md:visible px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
            <button
              className={`flex mt-[5px] ${
                open ? "text-white" : "text-gray-400"
              } flex-row items-center justify-center gap-1`}
              onClick={() => setOpen((prev: boolean) => !prev)}
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
    </div>
  );
}

export default NavbarFullScreen;

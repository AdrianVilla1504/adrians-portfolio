import { useTranslation } from "react-i18next";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavProps } from "../../services/sectionTypes/navbarTypes";

const NavBar = ({ nav, setNav, scrollToSection, arrayRef }: NavProps) => {
  const { t, i18n } = useTranslation("navbar");
  const resumeURL = `https://res.cloudinary.com/dkagy4g5m/image/upload/${t(
    "content.resumeV"
  )}/Portfolio/${t("content.resumeId")}`;

  const links: { id: number; link: string }[] = t("content.links", {
    returnObjects: true,
  });

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
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
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
        </ul>
      )}
    </div>
  );
};

export default NavBar;

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { ContactLinksObject } from "../../services/sectionTypes/contactBarTypes";
import { useTranslation } from "react-i18next";

const ContactBar = () => {
  const { t, i18n } = useTranslation("navbar");

  const links: ContactLinksObject[] = [
    {
      id: 1,
      icon: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/adrian-villa-776783175/",
      style: "rounded-tr-md",
      target: "_blank",
    },
    {
      id: 2,
      icon: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/AdrianVilla1504",
      target: "_blank",
    },
    {
      id: 3,
      icon: (
        <>
          E-mail
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:adriancvilla@gmail.com",
      target: "self",
    },
    {
      id: 4,
      icon: (
        <>
          {t("content.barCvTitle")} <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "https://res.cloudinary.com/dkagy4g5m/image/upload/v1676416184/Portfolio/CV._Adrian_Villa_rb8age.pdf",
      style: "rounded-br-md",
      target: "_blank",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, icon, href, style, target }: ContactLinksObject) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              target={target}
              rel="noreferrer"
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactBar;

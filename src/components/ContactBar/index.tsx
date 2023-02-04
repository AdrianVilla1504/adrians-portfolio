import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const ContactBar = () => {
  const links = [
    {
      id: 1,
      icon: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/adrian-villa-776783175/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      icon: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/AdrianVilla1504",
    },
    {
      id: 3,
      icon: (
        <>
          E-Mail me<HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:adriancvilla@gmail.com",
    },
    {
      id: 4,
      icon: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
<<<<<<< HEAD
      href: "https://res.cloudinary.com/dkagy4g5m/image/upload/v1675535697/Portfolio/C.V_Adrian_Villa_tymhql.pdf",
=======
      href: "https://res.cloudinary.com/dkagy4g5m/image/upload/v1675463156/Portfolio/CV._Adrian_Villa_qz1npq.pdf",
>>>>>>> main
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, icon, href, style, download }) => (
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
              target="_blank"
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

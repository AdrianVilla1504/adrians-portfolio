import React from "react";
import { Link } from "react-scroll";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import home from "../../services/home.json";

const Home = () => {
  return (
    <div
      className="pt-[70px] h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Full stack javascript developer, passionate about Technology and coding with the M.E.R.N stack.<br/>

            I describe myself as a person that has the capacity to adapt to new technologies rapidly and find the most efficient solution to the problems and commitments related to code. I'm proactive, creative, and persistent.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={home.content.profilePic.url}
            alt={home.content.profilePic.alt}
            className="rounded-2xl mx-auto w-2/3 md:w-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

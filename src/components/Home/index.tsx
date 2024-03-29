import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import homeData from "../../services/home.json";
import { HomeProps } from "../../services/sectionTypes/homeTypes";
import { useTranslation } from "react-i18next";

const Home = ({ scrollToSection, experience, home, nav }: HomeProps) => {
  const { t, i18n } = useTranslation("home");

  return (
    <div
      ref={home}
      className="pt-[100px] min-[373px]:pt-[20px] px-[30px] md:px-[0px] h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center wh-full">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">
            {t("content.salutation")}
          </h2>
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
            {t("content.title")}
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            {t("content.description")}
          </p>

          <div>
            <a
              onClick={() => {
                scrollToSection(experience, nav);
              }}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-red-500 cursor-pointer"
            >
              {t("content.portfolioBtn")}
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </a>
          </div>
        </div>

        <div className="flex justify-center mt-[50px]">
          <img
            src={homeData.content.profilePic.url}
            alt={homeData.content.profilePic.alt}
            className="rounded-2xl w-[220px] md:w-[300px] md:ml-[10px] min-[840px]:ml-[60px] md:mr-[-30px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

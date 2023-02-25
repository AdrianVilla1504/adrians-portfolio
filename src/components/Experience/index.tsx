import i18next from "i18next";
import { useTranslation } from "react-i18next";
import exp from "../../services/experience.json";
import {
  ExpProps,
  Projects,
} from "../../services/sectionTypes/experienceTypes";

const Experience = ({ experience }: ExpProps) => {
  const { t, i18n } = useTranslation("experience");

  const portfolioTeam: Projects[] = t("teamwork.content", {
    returnObjects: true,
  });

  const portfolioSingle: Projects[] = t("mywork.content", {
    returnObjects: true,
  });
  console.log(typeof experience);
  return (
    <div
      ref={experience}
      className="py-[10vh] px-[20px] bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full"
    >
      <div className="flex flex-col max-w-screen-lg p-4 mx-auto justify-center w-full h-full">
        <div className="pb-8 mb-[-50px] md:mb-[-65px]">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            {t("title")}
          </p>
          <p className="py-6">{t("description")}</p>
        </div>

        <div className="pb-0">
          <h3 className="py-6 text-2xl font-bold">{t("teamwork.title")}</h3>
        </div>

        <div className="grid sm:grid-cols-2  gap-8 px-0 sm:px-0">
          {portfolioTeam.map(
            ({
              id,
              title,
              description,
              techs,
              img,
              liveDemo,
              BackendRepo,
              frontEndRepo,
            }: Projects) => (
              <div
                key={id}
                className="flex flex-col items-center justify-around shadow-md shadow-gray-600 rounded-lg"
              >
                <img
                  src={img}
                  alt={title}
                  className="rounded-md duration-200 w-full hover:scale-105"
                />
                <h3 className="text-lg font-bold py-[20px]">{title}</h3>
                <div className="flex flex-col px-[30px] items-center justify-center">
                  <p className="text-justify">{description}</p>
                  <h4 className="text-lg font-bold mt-[20px]">
                    {t("teamwork.titleTech")}
                  </h4>
                  <div className="mt-[10px] gap-x-6  grid w-full grid-cols-3 md:grid-cols-4   ">
                    {techs.map((tech, i) => (
                      <ul className="flex items-center">
                        <li>⭐</li>
                        <li key={i} className="text-sm w-[100%]">
                          {tech}
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={liveDemo?.url}
                    className={
                      liveDemo?.disabled
                        ? "hidden"
                        : "w-1/3 font-bold cursor-pointer text-center w-1/3 px-0 py-3 m-4 duration-200 hover:scale-105"
                    }
                  >
                    {exp.demoButton}
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={BackendRepo.url}
                    className={
                      BackendRepo?.disabled
                        ? "hidden"
                        : "w-1/3	font-bold cursor-pointer text-center px-0 py-3 m-4 duration-200 hover:scale-105"
                    }
                  >
                    {exp.BackendRepoButton}
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={frontEndRepo.url}
                    className={
                      frontEndRepo?.disabled
                        ? "hidden"
                        : "w-1/3	font-bold cursor-pointer text-center px-0 py-3 m-4 duration-200 hover:scale-105"
                    }
                  >
                    {exp.frontEndRepoButton}
                  </a>
                </div>
              </div>
            )
          )}
        </div>

        <div className="flex pb-0 mt-[50px]">
          <h3 className="py-6 text-2xl font-bold ">{t("mywork.title")}</h3>
        </div>

        <div className="grid sm:grid-cols-2  gap-8 px-0 sm:px-0">
          {portfolioSingle.map(
            (
              {
                id,
                title,
                description,
                techs,
                img,
                liveDemo,
                BackendRepo,
                frontEndRepo,
              },
              index
            ) => (
              <div
                key={id}
                className="flex flex-col items-center justify-around shadow-md shadow-gray-600 rounded-lg"
              >
                <img
                  src={img}
                  alt={title}
                  className="rounded-md duration-200 w-full hover:scale-105"
                />
                <h3 className="text-lg py-[20px] font-bold">{title}</h3>
                <div className="flex flex-col px-[30px] items-center justify-center">
                  <p className="text-justify">{description}</p>
                  <h4 className="text-lg font-bold">
                    {t("teamwork.titleTech")}
                  </h4>
                  <div className="mt-[10px] gap-x-6  grid w-full grid-cols-3 md:grid-cols-4">
                    {techs.map((tech, i) => (
                      <ul className="flex items-center">
                        <li>⭐</li>
                        <li key={i} className="text-sm w-[100%]">
                          {tech}
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={liveDemo.url}
                    className={
                      liveDemo?.disabled
                        ? "hidden"
                        : "font-bold w-1/3	cursor-pointer text-center px-0 py-3 m-4 duration-200 hover:scale-105"
                    }
                  >
                    {exp.demoButton}
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={BackendRepo.url}
                    className={
                      BackendRepo?.disabled
                        ? "hidden"
                        : "font-bold w-1/3	cursor-pointer text-center  px-0 py-3 m-4 duration-200 hover:scale-105"
                    }
                  >
                    {exp.BackendRepoButton}
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={frontEndRepo.url}
                    className={
                      frontEndRepo?.disabled
                        ? "hidden"
                        : "font-bold w-1/3	cursor-pointer text-center px-0 py-3 m-4 duration-200 hover:scale-105"
                    }
                  >
                    {exp.frontEndRepoButton}
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;

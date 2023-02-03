import React from "react";
import exp from "../../services/experience.json";

const Experience = ({experience}:any) => {
  const portfolioTeam = exp.teamwork.content;
  const portfolioSingle = exp.mywork.content;

  return (
    <div ref={experience}
      className=" py-[10vh] bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full"
    >
      <div className="flex flex-col max-w-screen-lg p-4 mx-auto  justify-center w-full h-full">
        <div className="pb-8 md:mb-[-65px]">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            {exp.title}
          </p>
          <p className="py-6">{exp.description}</p>
        </div>

        <div className="pb-0">
          <h3 className="py-6 text-2xl font-bold">{exp.teamwork.title}</h3>
        </div>

        <div className="grid sm:grid-cols-2  gap-8 px-0 sm:px-0">
          {portfolioTeam.map(({ id, title, description, img, liveDemo, BackendRepo, frontEndRepo }, index) => (
            <div key={id} className="flex flex-col items-center justify-around shadow-md shadow-gray-600 rounded-lg">
              <img
                src={img}
                alt={title}
                className="rounded-md duration-200 w-full hover:scale-105"
              />
              <h3 className="text-lg py-[20px]">{title}</h3>
              <div className="flex flex-col px-[30px] items-center justify-center">
                <p className="text-justify">{description}</p>
              </div>
              <div className="flex items-center justify-center">
                <a target="_blank" rel="noreferrer" href={liveDemo?.url} className={liveDemo?.disabled ? "hidden" : "w-1/3 cursor-pointer text-center w-1/3 px-0 py-3 m-4 duration-200 hover:scale-105"}>
                  {exp.demoButton}
                </a>
                <a target="_blank" rel="noreferrer" href={BackendRepo.url} className={BackendRepo?.disabled ? "hidden" : "w-1/3	cursor-pointer text-center px-0 py-3 m-4 duration-200 hover:scale-105"}>
                  {exp.BackendRepoButton}
                </a>
                <a target="_blank" rel="noreferrer" href={frontEndRepo.url} className={frontEndRepo?.disabled ? "hidden" : "w-1/3	cursor-pointer text-center px-0 py-3 m-4 duration-200 hover:scale-105"}>
                  {exp.frontEndRepoButton}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex pb-0 mt-[50px]">
          <h3 className="py-6 text-2xl font-bold ">{exp.mywork.title}</h3>
        </div>

        <div className="grid sm:grid-cols-2  gap-8 px-0 sm:px-0">
          {portfolioSingle.map(({ id, title, description, img, liveDemo, BackendRepo, frontEndRepo }, index) => (
            <div key={id} className="flex flex-col items-center justify-around shadow-md shadow-gray-600 rounded-lg">
              <img
                src={img}
                alt={title}
                className="rounded-md duration-200 w-full hover:scale-105"
              />
              <h3 className="text-lg py-[20px]">{title}</h3>
              <div className="flex flex-col px-[30px] items-center justify-center">

                <p className="text-justify">{description}</p>
              </div>
              <div className="flex flex-row items-center justify-center">
                <a target="_blank" rel="noreferrer" href={liveDemo.url} className={liveDemo?.disabled ? "hidden" : "w-1/3	cursor-pointer text-center px-0 py-3 m-4 duration-200 hover:scale-105"}>
                  {exp.demoButton}
                </a>
                <a target="_blank" rel="noreferrer" href={BackendRepo.url} className={BackendRepo?.disabled ? "hidden" : "w-1/3	cursor-pointer text-center  px-0 py-3 m-4 duration-200 hover:scale-105"}>
                  {exp.BackendRepoButton}
                </a>
                <a target="_blank" rel="noreferrer" href={frontEndRepo.url} className={frontEndRepo?.disabled ? "hidden" : "w-1/3	cursor-pointer text-center px-0 py-3 m-4 duration-200 hover:scale-105"}>
                  {exp.frontEndRepoButton}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

import techno from "../../services/technologies.json";
import { TechProps, ListTech } from "../../services/sectionTypes/techsTypes";

import homeData from "../../services/home.json";
import { useTranslation } from "react-i18next";

const Technologies = ({ technologies }: TechProps) => {
  const { t, i18n } = useTranslation("technologies");
  const techs: ListTech[] = techno.content;
  return (
    <div
      ref={technologies}
      className="bg-gradient-to-b from-gray-800 to-black w-full h-fit py-[10vh]"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="mb-[-30px] md:mb-[-40px]">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            {t("title")}
          </p>
          <p className="py-6">{t("description")}</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }: ListTech) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg${style}`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;

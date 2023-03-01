import { aboutProps } from "../../services/sectionTypes/aboutTypes";
import { useTranslation } from "react-i18next";
import aboutImg from "../../services/about.json";

const AboutMe = ({ about }: aboutProps) => {
  const { t, i18n } = useTranslation("about");

  return (
    <div
      ref={about}
      className="h-[1250px] w-[100%] min-[373px]:pt-[70px] md:h-[720px] bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto md:pr-[3vw] flex flex-col justify-center w-[100%] h-full">
        <div className="px-[10px] pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            {t("title")}
          </p>
        </div>
        <div className="w-[100%] px-[10px] grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1">
          <div className="mt-[0px]">
            <p className="text-[16px] mb-4 ">{t("content1")}</p>

            <p className="text-[16px] font-medium my-4">{t("content2")}</p>

            <p className="text-[16px] my-4">{t("content3")}</p>
          </div>
          <div className="flex flex-col md:mt-[-10px] min-[400px]:mt-[-20vw] md:flex-row items-center justify-center gap-3">
            <div className="h-[100%] w-[60%] min-[520px]:h-[300px] min-[520px]:z-40 w-[60%] ml-[-80px] md:ml-[0px] md:w-[80%] md:basis-1/2 flex justify-center">
              <img
                src={aboutImg.pics.one.url}
                alt={aboutImg.pics.one.url}
                className="object-cover rounded-2xl md:w-[100%]  md:ml-[60px] md:h-[380px]"
              />
            </div>
            <div className="h-[100%] w-[60%] min-[520px]:h-[300px] mr-[-80px] md:mr-[0px] md:mt-[-60px] md:w-[80%] md:basis-1/2 flex justify-center ">
              <img
                src={aboutImg.pics.two.url}
                alt={aboutImg.pics.two.url}
                className="object-cover rounded-2xl md:w-[100%] md:ml-[60px] md:h-[380px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

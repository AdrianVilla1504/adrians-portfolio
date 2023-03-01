import { useState } from "react";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

import contactData from "../../services/contact.json";
import {
  ContactProps,
  ContactForm,
} from "../../services/sectionTypes/contactTypes";

const Contact = ({ contact }: ContactProps) => {
  const { t, i18n } = useTranslation("contact");
  const form = {
    contactWay: {
      default: t("form.contactway.title"),
      wpp: t("form.contactway.phone"),
      mail: t("form.contactway.mail"),
    },
    name: t("form.name"),
    email: t("form.email"),
    phone: t("form.phone"),
    message: t("form.message"),
    submitBtn: t("form.submitBtn"),
  };

  const [contactWay, setContactWay] = useState<ContactForm>({});
  const handleChange = (e: any) => {
    setContactWay({ ...contactWay, [e.target.name]: e.target.value });
  };

  const WhatsappLink = `https://api.whatsapp.com/send?phone=573205200706&text=Message%20from%20Adrian%27s%20developer%20website.%20%0A%0A%F0%9F%93%8C%20Name%3A%20${contactWay.name}%0A%F0%9F%93%8C%20E-mail%3A%20${contactWay.email}%0A%F0%9F%93%8C%20Message%3A%20${contactWay.message}%0A%0A`;

  const validatorWpp = () => {
    if (
      !contactWay.type ||
      !contactWay.name ||
      !contactWay.email ||
      !contactWay.message
    ) {
      Swal.fire({
        title: "Error",
        text: "Some fields were not filled.",
        icon: "warning",
        confirmButtonText: "Accept",
        confirmButtonColor: "#1BA2E1",
      });
    } else {
      window.open(WhatsappLink, "_blank");
    }
  };

  return (
    <div
      ref={contact}
      className="w-full h-[100%] bg-gradient-to-b from-black to-gray-800 p-4 text-white pt-[40px] md:pt-[90px]"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            {t("title")}
          </p>
          <p className="py-6">{t("description")}</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action={process.env.REACT_APP_EMAIL_ENDPOINT}
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <select
              name="type"
              required
              onChange={handleChange}
              placeholder={form.contactWay.default}
              className="p-2 mb-[20px] bg-transparent border-2 rounded-md text-white focus:outline-none"
            >
              <option
                className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
                disabled
                selected
                value=""
              >
                {form.contactWay.default}
              </option>
              <option
                className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
                value="whatsapp"
              >
                {form.contactWay.wpp}
              </option>
              <option
                className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
                value="email"
              >
                {form.contactWay.mail}
              </option>
            </select>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              required
              placeholder={form.name}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            {contactWay.type === "email" ? (
              <input
                type="text"
                name="phone"
                onChange={handleChange}
                required
                placeholder={form.phone}
                className="my-4 p-2 mb-[0px] bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
            ) : (
              <input hidden />
            )}

            <input
              type="email"
              name="email"
              onChange={handleChange}
              required
              placeholder={form.email}
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              onChange={handleChange}
              required
              placeholder={form.message}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            {contactWay.type === "whatsapp" ? (
              <a
                onClick={validatorWpp}
                className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
              >
                {form.submitBtn}
              </a>
            ) : (
              <button
                type="submit"
                className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
              >
                {form.submitBtn}
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

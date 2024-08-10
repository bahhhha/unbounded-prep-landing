import React from "react";
import i18n from "../../utils/i18n";
import { Select } from "antd";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";

export const Header = (): JSX.Element => {
  const { t } = useTranslation("header");
  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:w-[60rem] w-full gap-4 md:gap-0 mt-4">
      <img src="images/logos/logo.png" className="w-12 h-12" alt="Logo" />
      <div className="flex gap-8">
        <a
          href="#services"
          className="duration-100 hover:text-zinc-500"
          onClick={(e) => handleScroll(e, "services")}
        >
          {t("services")}
        </a>
        <a
          href="#contact"
          className="duration-100 hover:text-zinc-500"
          onClick={(e) => handleScroll(e, "contact")}
        >
          {t("contact")}
        </a>
        <a
          href="#faq"
          className="duration-100 hover:text-zinc-500"
          onClick={(e) => handleScroll(e, "faq")}
        >
          {t("faq")}
        </a>
      </div>
      <Select
        value={i18n.language}
        // options={[
        //   {
        //     value: "en",
        //     label: "EN",
        //   },
        //   {
        //     value: "ru",
        //     label: "RU",
        //   },
        //   // {
        //   //   value: "kk",
        //   //   label: "Қазақша",
        //   // },
        // ]}
        onChange={(value) => i18n.changeLanguage(value as string)}
      >
        <Select.Option value="en">
          <ReactCountryFlag
            countryCode="US"
            svg
            style={{
              width: "1.5em",
              height: "1em",
            }}
            className="rounded-sm mr-1"
          />
          EN
        </Select.Option>
        <Select.Option value="ru">
          <ReactCountryFlag
            countryCode="RU"
            svg
            style={{
              width: "1.5em",
              height: "1em",
            }}
            className="rounded-sm mr-1"
          />
          RU
        </Select.Option>
      </Select>
    </div>
  );
};

export default Header;

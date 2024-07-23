import React from "react";

export const Header = (): JSX.Element => {
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
    <div className="flex flex-col md:flex-row justify-between items-center md:w-[40rem] w-full gap-4 md:gap-0 mt-4">
      <img src="images/logos/logo.png" className="w-12 h-12" alt="Logo" />
      <div className="flex gap-8">
        <a
          href="#services"
          className="duration-100 hover:text-zinc-500"
          onClick={(e) => handleScroll(e, "services")}
        >
          Our services
        </a>
        <a
          href="#contact"
          className="duration-100 hover:text-zinc-500"
          onClick={(e) => handleScroll(e, "contact")}
        >
          Contact us
        </a>
        <a
          href="#faq"
          className="duration-100 hover:text-zinc-500"
          onClick={(e) => handleScroll(e, "faq")}
        >
          FAQ
        </a>
      </div>
    </div>
  );
};

export default Header;

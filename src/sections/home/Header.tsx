export const Header = (): JSX.Element => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:w-[40rem] w-full gap-4 md:gap-0 mt-4">
      <img src="images/logos/logo.png" className="w-12 h-12" alt="Logo" />
      <div className="flex gap-8">
        <a href="#services">Our services</a>
        <a href="#contact">Contact us</a>
        <a href="#faq">FAQ</a>
      </div>
    </div>
  );
};

export default Header;

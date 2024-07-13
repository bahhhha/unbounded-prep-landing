export const Header = (): JSX.Element => {
  return (
    <div className="flex justify-between items-center w-[40rem] mt-4">
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

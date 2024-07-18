import {
  InstagramOutlined,
  SendOutlined,
  MailOutlined,
  PhoneOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

export const Footer = (): JSX.Element => {
  return (
    <div className="bg-zinc-900 w-screen items-center p-4 flex justify-between gap-4">
      <div className="flex gap-4 text-sm">
        <a
          href="mailto:arthur.muratovich@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-500 duration-100 cursor-pointer flex items-center"
        >
          <MailOutlined size={20} className="mr-2" />
          arthur.muratovich@gmail.com
        </a>
        <a
          href="tel:+77005670123"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-500 duration-100 cursor-pointer flex items-center"
        >
          <PhoneOutlined size={20} className="mr-2" />
          +77005670123
        </a>
      </div>
      <div className="flex gap-4">
        <a
          href="https://wa.me/+77005670123"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-500 duration-100 cursor-pointer"
        >
          <WhatsAppOutlined size={20} />
        </a>
        <a
          href="https://t.me/arthur_muratov"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-500 duration-100 cursor-pointer"
        >
          <SendOutlined size={20} />
        </a>
        <a
          href="https://www.instagram.com/unbounded.prep/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-500 duration-100 cursor-pointer"
        >
          <InstagramOutlined size={20} />
        </a>
      </div>
      <p className="text-white flex gap-4 text-sm">
        <span className="font-bold">Unbounded Prep.</span>
        <span>All rights reserved.</span>
      </p>
    </div>
  );
};

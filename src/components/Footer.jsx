import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaLinkedinIn,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Schools", link: "/schools" },
    { name: "Parents", link: "/parents" },
    { name: "About Us", link: "/about" },
    { name: "Contact Us", link: "/contact" },
  ];

  const socialMedia = [
    { name: "Instgram", icon: FaInstagram },
    { name: "Facebook", icon: FaFacebookF },
    { name: "TikTok", icon: FaTiktok },
    { name: "LinkedIn", icon: FaLinkedinIn },
  ];

  const contactInfo = [
    { name: "Phone", details: "0712345678", link: "", icon: FaPhone },
    {
      name: "Email",
      details: "schoollie",
      link: "",
      icon: MdEmail,
    },
    {
      name: "Visit Us",
      details: "Nairobi Kenya",
      link: "",
      icon: FaLocationDot,
    },
  ];

  return (
    <div className="bg-primary">
      <div className="max-w-[1440px] px-5 md:px-10 mx-auto w-full py-10 gap-10 md:gap-20 grid md:flex justify-center">
        <div>
          <h1 className="font-syne font-bold text-3xl">SCHOOLLIE</h1>
        </div>
        <div>
          <h1 className="font-syne font-semibold mb-3">LINKS</h1>
          <ul className="grid gap-1">
            {navLinks.map((item, index) => (
              <Link key={index} to={item.link}>
                <li className="text-muted-foreground hover:underline">
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="font-syne font-semibold mb-3">SOCIALS</h1>
          <ul className="grid gap-1">
            {socialMedia.map((item, index) => (
              <Link key={index}>
                <li className="text-muted-foreground flex gap-2 hover:underline">
                  <item.icon className="my-auto" />
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="font-syne font-semibold mb-3">CONTACT INFO</h1>
          <ul className="grid gap-1">
            {contactInfo.map((item, index) => (
              <Link key={index}>
                <li className="text-muted-foreground flex gap-2 hover:underline">
                  <item.icon className="my-auto" />
                  {item.details}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-center py-5 max-w-[1440px] border-t border-muted-foreground/50 mx-auto">
        Copyright {new Date().getFullYear()} © Schoolie Technologies
      </p>
    </div>
  );
};

export default Footer;

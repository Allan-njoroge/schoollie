import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { name: "HOME", link: "/" },
    { name: "SCHOOLS", link: "/schools" },
    { name: "PARENTS", link: "/parents" },
    { name: "ABOUT US", link: "/about" },
    { name: "CONTACT US", link: "/contact" },
  ];

  // getting the location of the path
  let location = useLocation();
  console.log(location.pathname);

  return (
    <div className="shadow-md shadow-muted-foreground/20">
      <nav className="max-w-[1440px] h-[10vh] px-5 md:px-10 flex relative mx-auto">
        <div className="flex justify-between w-full items-center">
          {/* Page logo */}
          <Link to={`/`}>
            <h1 className="font-bold text-3xl text-primary font-syne">
              SCHOOLLIE
            </h1>
          </Link>

          {/* Navigation links */}
          <ul
            className={`md:flex gap-5 absolute md:static top-[10vh] left-0 bg-primary md:bg-transparent w-2/3 md:w-auto h-[90vh] md:h-auto p-10 z-20 transition-all ease-in-out duration-500 ${
              menuOpen ? "ml-0" : "-ml-[700px]"
            }`}
          >
            {navLinks.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                onClick={() => setMenuOpen(false)}
              >
                <li
                  className={`text-lg md:text-sm hover:text-primary hover:font-semibold transition-all ease-in-out duration-300 my-5 border-b-2 p-2 ${
                    location.pathname === item.link
                      ? "border-b-black"
                      : "border-b-transparent"
                  }`}
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>

          {/* Navigation Menu Icons */}
          <div
            className={`flex flex-col justify-end gap-1 md:hidden relative align-end items-end`}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <div
              className={`h-1 bg-black rounded-full transition-all ease-in-out duration-500 ${
                menuOpen ? "w-6 -rotate-45" : "w-5"
              } origin-right`}
            />
            <div
              className={`h-1 bg-black w-6 rounded-full transition-all ease-in-out duration-500 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <div
              className={`h-1 bg-black rounded-full transition-all ease-in-out duration-500 ${
                menuOpen ? " w-6 rotate-45" : "w-5"
              } origin-right`}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

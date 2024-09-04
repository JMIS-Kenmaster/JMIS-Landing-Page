import { useState } from "react";
import logo from "../images/logo_black.png";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ClearIcon from "@mui/icons-material/Clear";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    { link: "Overview", path: "home" },
    { link: "About Us", path: "about_us" },
    { link: "Services", path: "services" },
    { link: "Pricing", path: "pricing" },
    { link: "Contact Us", path: "contact_us" },
  ];

  return (
    <>
      <nav className="bg-white md:px-14 p-4 max-w-screen-2xl mx-auto fixed top-0 right-0 left-0">
        <div className=" text-lg container mx-auto flex justify-between items-center font-medium">
          <div className=" flex space-x-14 items-center">
            <a
              className=" text-2xl font-semibold flex items-center space-x-3"
              href="/"
            >
              <img
                className=" inline-block items-center w-[50px] h-[50px]"
                src={logo}
                alt="not found"
              ></img>
              <span>JM INNOVATIONS SERVICES LLC</span>
            </a>

            {/*here the nav items in a map*/}
            <ul className="md:flex space-x-12 hidden">
              {navItems.map(({ link, path }) => (
                <Link
                  spy={true}
                  smooth={true}
                  offset={-100}
                  activeClass="active"
                  className="block hover:text-gray-300 cursor-pointer"
                  to={path}
                  key={link}
                >
                  {link}
                </Link>
              ))}
            </ul>
          </div>

          {/*here the div right side items*/}
          <div className=" space-x-12 hidden md:flex items-center">
            <button className="bg-black text-white py-2 px-4 transition-all duration-300 rounded hover:text-[#34B002]">
              <LocalPhoneIcon />
              <a href="tel:609-377-7727">Call Us</a>
            </button>
          </div>

          {/*menu button that will only be available on mobile version*/}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className=" text-white focus:outline-none focus:text-gray-300"
            >
              {isMenuOpen ? (
                <ClearIcon className=" w-6 h-6 text-black" />
              ) : (
                <MenuIcon className=" w-6 h-6 text-black" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/*menu Items that will only be available on mobile version*/}
      <div
        className={`mobile-menu space-y-4 px-4 pt-5 pb-32 bg-[#0000009a] text-white ${
          isMenuOpen ? "md:hidden block fixed  top-0 left-0 right-0" : "hidden"
        }`}
      >
        {navItems.map(({ link, path }) => (
          <Link
            onClick={toggleMenu}
            spy={true}
            smooth={true}
            offset={-100}
            activeClass="active"
            className="block mt-24 hover:text-gray-300"
            to={path}
            key={link}
          >
            {link}
          </Link>
        ))}
      </div>
    </>
  );
}

export default Navbar;

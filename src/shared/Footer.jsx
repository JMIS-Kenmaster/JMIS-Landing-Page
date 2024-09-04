import logo from "../images/logo_black.png";
import fbimg from "../images/fbimg.png";
import instagram from "../images/instaimg.png";
import linkedin from "../images/inimg.png";
import twitter from "../images/twitter.png";

function Footer() {
  return (
    <div className="gradientBG md:px-14 max-w-screen-2xl mx-auto">
      <div className="my-12 flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 space-y-1">
          <a
            className="text-2xl font-semibold flex items-center space-x-3 text-white" // White text color
            href="/"
          >
            <img
              className="inline-block items-center w-[50px] h-[50px]"
              src={logo}
              alt="not found"
            />
            <span>JM INNOVATIONS SERVICES LLC</span>
          </a>
          <p className="md:w-1/2 text-white">Contact us</p>{" "}
          {/* White text color */}
          <form
            className="space-y-2"
            action="mailto:ask@jm-innovations-llc.info"
            method="post"
            enctype="text/plain"
          >
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              className="bg-[#f5f5f5ee] py-2 px-4 w-[380px] rounded-md block focus:outline-none text-black" // Black text color
            />
            <input
              type="tel"
              name="tel"
              id="tel"
              placeholder="Your Phone Number"
              className="bg-[#f5f5f5ee] py-2 w-[380px] px-4 rounded-md block focus:outline-none text-black" // Black text color
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email address"
              className="bg-[#f5f5f5ee] w-[380px] py-2 px-4 rounded-md focus:outline-none text-black" // Black text color
            />
            <textarea
              id="comments"
              name="Subject"
              rows="10"
              cols="40"
              placeholder="Tell us about your problem"
              className="bg-[#f5f5f5ee] py-2 px-4 rounded-md block focus:outline-none text-black"
            ></textarea>
            <input
              type="submit"
              value="Send"
              className="px-4 py-2 bg-[#cacacaee] rounded-md text-white  cursor-pointer hover:bg-black hover:text-white duration-300 transition-all" // White text color
            />
          </form>
        </div>

        <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-2 items-start">
          <div className="space-y-2 mt-1">
            <h4 className="text-2xl text-white">Platform</h4>
            <ul className="space-y-1">
              <a href="/" className="block hover:text-gray-300">
                Overview
              </a>
              <a href="/" className="block hover:text-gray-300">
                Features
              </a>
              <a href="/" className="block hover:text-gray-300">
                About
              </a>
              <a href="/" className="block hover:text-gray-300">
                Pricing
              </a>
            </ul>
          </div>

          <div className="space-y-2 mt-1">
            <h4 className="text-2xl text-white">Questions</h4>
            <ul className="space-y-1">
              <a href="/" className="block hover:text-gray-300">
                Overview
              </a>
              <a href="/" className="block hover:text-gray-300">
                Features
              </a>
              <a href="/" className="block hover:text-gray-300">
                About
              </a>
              <a href="/" className="block hover:text-gray-300">
                Pricing
              </a>
            </ul>
          </div>

          <div className="md:w-1/4 space-y-2 mt-1">
            {" "}
            {/* Adjust the width here as needed */}
            <h4 className="text-2xl text-white">Contact</h4>
            <ul className="space-y-1">
              <p className=" hover:text-gray-300">
                JM INNOVATIONS SERVICES LLC
              </p>
              <p className=" hover:text-gray-300">
                714 Pineview Ave. Egg Harbor Township, NJ 08234
              </p>
              <p className=" hover:text-gray-300">609-377-7727</p>
              <p className=" hover:text-gray-300">
                ask@jm-innovations-llc.info
              </p>
            </ul>
          </div>
        </div>
      </div>
      <hr />

      <div className="flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8">
        <p> @ JM INNOVATIONS SERVICES LLC 2024. All rights reserved</p>
        <div className="items-center flex space-x-5">
          <img
            src={fbimg}
            alt=""
            className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300 hover:bg-white"
          ></img>
          <img
            src={instagram}
            alt=""
            className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300 hover:bg-white"
          ></img>
          <img
            src={linkedin}
            alt=""
            className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300 hover:bg-white"
          ></img>
          <img
            src={twitter}
            alt=""
            className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300 hover:bg-white"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Footer;

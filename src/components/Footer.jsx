import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTelegram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-yellow-50 py-8 px-4 md:px-16 lg:px-24">
        <div className="container mx-auto grid grid-cols-1  md:grid-cols-3 gap-3">
          <div>
            <h3 className="text-xl font-semibold">
              <span className="hover:text-orange-400">
                Lu
                <span className="text-3xl text-red-700 hover:text-black">
                  xeUni
                </span>
                verse
              </span>
            </h3>
            <p className="mt-4">
              your one-step fot all your needs. shop with use and experience the
              best online shopping experiences.
            </p>
          </div>
          <div className="flex flex-col md:items-center">
            <h4 className="text-lg font-semibold">Ouick Links</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>{" "}
              <li>
                <Link to="/shop" className="hover:underline">
                  Shop
                </Link>
              </li>{" "}
              <li>
                <Link to="/contact-us" className="hover:underline">
                  Contact
                </Link>
              </li>{" "}
              <li>
                <Link to="/about-us" className="hover:underline">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="text-xl font-semibold">Follow us</h4>
            <div className="flex space-x-4 mt-4">
              <a href="" className="hover:text-fuchsia-300">
                <FaFacebook />
              </a>
              <a href="" className="hover:text-fuchsia-300">
                <FaInstagram />
              </a>
              <a href="" className="hover:text-fuchsia-300">
                <FaTelegram />
              </a>
              <a href="" className="hover:text-fuchsia-300">
                <FaYoutube />
              </a>{" "}
              <a href="" className="hover:text-fuchsia-300">
                <FaTwitter />
              </a>{" "}
              <a href="" className="hover:text-fuchsia-300">
                <FaGithub />
              </a>
            </div>
            <form className="flex items-center justify-center mt-8">
              <input
                placeholder="enter email"
                type="email"
                className="w-full p-2 rounded-l-lg border border-yellow-700"
              />
              <button className="bg-red-900 text-white py-2 px-4 rounded-r-lg ml-3 border border-red-950">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t- border-yellow-700 pt-4">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 LuxeUniverse rights reserved.</p>
            <div className="flex space-x4 md:mt-0">
              <a href="" className="hover:under">
                Privacy Policy
              </a>
              <a href="" className="hover:under">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

import {
  FaMapMarkerAlt,
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { MdMessage } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <div className="w-full h-[4rem] bg-primary"></div>
      <div className="bg-gray-800 py-7 px-5 w-full sm:px-10">
        <div className="text-white flex flex-col md:flex-row justify-between gap-10">
          <div className="space-y-5 pb-10">
            <h1 className="text-3xl">Be Ready To Grow</h1>
            <p className="text-md">
              Get Exclusive Updatestraigt to your inbox.
            </p>
            <div className="flex">
              <input
                className="bg-transparent px-3 py-1 border-2 border-white flex-1 max-w-xs"
                type="email"
                placeholder="Email"
              />
              <button className="px-4 py-1 bg-teal-500 rounded-tr-lg rounded-br-lg font-semibold">
                OK
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3">
            <div>
              <h1 className="text-2xl mb-5">Quick Links</h1>
              <ul className="space-y-3">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-2xl mb-5">Quick Links</h1>
              <ul className="space-y-3">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
              </ul>
            </div>
            <div className="pt-12 sm:pt-0">
              <h1 className="text-2xl mb-5">Contact Us</h1>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <FaMapMarkerAlt />
                  <span>Noida, Uttar Pradesh</span>
                </li>
                <li className="flex items-center gap-3">
                  <MdMessage />
                  <span>abc@gmail.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaPhone />
                  <span>+91 123456789</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center text-white py-5 mt-7 border-t border-white flex-wrap gap-10">
          <p className="">copyright © {new Date().getFullYear()} by TCJ</p>
          <div className="flex items-center justify-center gap-5 text-xl">
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
          </div>
          <p>Privacy Policy Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

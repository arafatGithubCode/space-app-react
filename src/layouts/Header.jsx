import { useState } from "react";
import logo from "../assets/logo.png";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black/10 border-b border-gray-500 backdrop:blur-sm">
      <div className="container">
        <div className="flex items-center justify-between py-4 px-3">
          <div className="flex items-center gap-3">
            <img className="w-[2.5rem]" src={logo} alt="Logo" />
            <span className="text-white font-semibold text-2xl whitespace-nowrap">
              TCJ-SPACE
            </span>
          </div>
          <div className="text-white hidden md:block">
            <ul className="flex items-center gap-6 text-xl font-semibold">
              <li>
                <a
                  className="hover:underline underline-offset-8  decoration-gray-500"
                  href="#"
                >
                  Technology
                </a>
              </li>
              <li>
                <a
                  className="hover:underline underline-offset-8  decoration-gray-500"
                  href="#"
                >
                  Galaxy
                </a>
              </li>
              <li>
                <a
                  className="hover:underline underline-offset-8  decoration-gray-500"
                  href="#"
                >
                  Satellite
                </a>
              </li>
              <li>
                <a
                  className="hover:underline underline-offset-8  decoration-gray-500"
                  href="#"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
          <button className="text-white px-3 py-1 rounded-lg border-2 font-semibold">
            Login
          </button>
          <div className="md:hidden relative">
            <div className="bg-white p-2 rounded-full cursor-pointer">
              {showMenu ? (
                <IoClose
                  className="text-4xl text-black"
                  onClick={() => setShowMenu(!showMenu)}
                />
              ) : (
                <TiThMenu
                  onClick={() => setShowMenu(!showMenu)}
                  className="text-4xl text-black"
                />
              )}
            </div>
            {showMenu && (
              <ul className="absolute bg-white/50 top-[4.4rem] right-[-1.7rem] min-h-screen flex flex-col gap-4 p-5 text-xl font-semibold text-white">
                <li onClick={() => setShowMenu(!showMenu)}>
                  <a
                    className="hover:underline underline-offset-8  decoration-gray-500"
                    href="#"
                  >
                    Technology
                  </a>
                </li>
                <li onClick={() => setShowMenu(!showMenu)}>
                  <a
                    className="hover:underline underline-offset-8  decoration-gray-500"
                    href="#"
                  >
                    Galaxy
                  </a>
                </li>
                <li onClick={() => setShowMenu(!showMenu)}>
                  <a
                    className="hover:underline underline-offset-8  decoration-gray-500"
                    href="#"
                  >
                    Satellite
                  </a>
                </li>
                <li onClick={() => setShowMenu(!showMenu)}>
                  <a
                    className="hover:underline underline-offset-8  decoration-gray-500"
                    href="#"
                  >
                    About
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
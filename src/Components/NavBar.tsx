import { useState } from "react";
import logo from "../assets/Logo.png";
import Logo from "../assets/logo-text.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto flex h-16 w-[90%] items-center justify-between px-4 md:h-20 md:px-8">
        {/* =========================
            LEFT - Hamburger + Brand
        ========================== */}

        <div className="flex items-center">
          {/* Hamburger - Mobile Only */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mr-3 flex flex-col gap-1.5 md:hidden"
          >
            <span className="block h-0.5 w-6 bg-black"></span>
            <span className="block h-0.5 w-6 bg-black"></span>
            <span className="block h-0.5 w-6 bg-black"></span>
          </button>

          {/* Brand */}
          <a href="#home" className="flex items-center gap-2">
            <img
              src={Logo}
              alt="Dev Stack Logo"
              className="h-30 w-30 object-contain"
            />
          </a>
        </div>

        {/* =========================
            CENTER - Desktop Menu
        ========================== */}

        <div className="hidden items-center gap-8 md:flex ">
          <a href="#home" className="text-[17px] font-medium text-purple-600">
            Home
          </a>

          <a
            href="#technologies"
            className="text-[17px] font-medium text-gray-700 hover:text-purple-700"
          >
            Technologies
          </a>

          <a
            href="#projects"
            className="text-[17px] font-medium text-gray-700 hover:text-purple-700"
          >
            Projects
          </a>

          <a
            href="#about"
            className="text-[17px] font-medium text-gray-700 hover:text-purple-700"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-[17px] font-medium text-gray-700 hover:text-purple-700"
          >
            Contact
          </a>
        </div>

        {/* =========================
            RIGHT - Sign In / Sign Up
        ========================== */}

        <div className="flex items-center gap-2">
          <button className="px-2 py-2 text-[17px] font-medium text-gray-800 hover:text-fuchsia-600 sm:px-3">
            Sign In
          </button>

          <button className="rounded-full hover:bg-black px-4 py-2 text-[15px] font-medium text-white bg-fuchsia-600 sm:px-5">
            Sign Up
          </button>
        </div>
      </div>

      {/* =========================
          MOBILE MENU
      ========================== */}

      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a
              href="#home"
              onClick={() => setIsMenuOpen(false)}
              className="font-medium text-gray-700 hover:text-blue-600"
            >
              Home
            </a>

            <a
              href="#technologies"
              onClick={() => setIsMenuOpen(false)}
              className="font-medium text-gray-700 hover:text-blue-600"
            >
              Technologies
            </a>

            <a
              href="#projects"
              onClick={() => setIsMenuOpen(false)}
              className="font-medium text-gray-700 hover:text-blue-600"
            >
              Projects
            </a>

            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="font-medium text-gray-700 hover:text-blue-600"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="font-medium text-gray-700 hover:text-blue-600"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

"use client";
import { SiApple } from "react-icons/si";
import { IoMdSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center justify-evenly py-4">
        <ul>
          <li>
            <SiApple size={25} />
          </li>
        </ul>
        <ul className="flex gap-8 text-[#86868B]">
          <li>
            <a href="/store" className="hover:text-white transition-all">
              Store
            </a>
          </li>
          <li>
            <a href="/mac" className="hover:text-white transition-all">
              Mac
            </a>
          </li>
          <li>
            <a href="/iphone" className="hover:text-white transition-all">
              iPhone
            </a>
          </li>
          <li>
            <a href="/support" className="hover:text-white transition-all">
              Support
            </a>
          </li>
        </ul>
        <ul className="flex gap-4">
          <li>
            <IoMdSearch size={25} />
          </li>
          <li>
            <IoBagOutline size={25} />
          </li>
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex justify-between items-center p-4 ">
        <SiApple size={25} />
        <button onClick={handleOpen}>
          {isOpen ? <RxCross1 size={25} /> : <RxHamburgerMenu size={25} />}
        </button>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="lg:hidden flex flex-col items-center bg-gray-900 text-white py-4 absolute right-0   w-1/2 rounded-xl">
          <ul className="flex flex-col gap-4 text-left">
            <li>
              <a href="/store" className="hover:text-white transition-all">
                Store
              </a>
            </li>
            <li>
              <a href="/mac" className="hover:text-white transition-all">
                Mac
              </a>
            </li>
            <li>
              <a href="/iphone" className="hover:text-white transition-all">
                iPhone
              </a>
            </li>
            <li>
              <a href="/support" className="hover:text-white transition-all">
                Support
              </a>
            </li>
          </ul>
          <ul className="flex gap-4 mt-4">
            <li>
              <IoMdSearch size={25} />
            </li>
            <li>
              <IoBagOutline size={25} />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

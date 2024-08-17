import React, { useState } from "react";
import "./Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import {
  Link as ScrollLink,
  Element,
  animateScroll as scroll,
} from "react-scroll";
import { GrLocation } from "react-icons/gr";
import { MdOutlineMailOutline } from "react-icons/md";
import ProgrammersMarathonLogo from "../../Assets/Webiste Logo.png";

function HomeNavbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="navbar bg-transparent z-50  text-white overflow-x-hidden flex justify-between pt-8 py-5 px-12 items-center">
      <div className="navbar-logo flex-grow">
        <Link to="/">
          <img src={ProgrammersMarathonLogo} alt="" className=" w-[12rem]" />
        </Link>
      </div>
      <div className="main-pages flex-grow lg:flex-grow-[2] flex lg:block justify-center items-center">
        {/* Hamburger menu */}
        <div className="hamburgr-menu lg:hidden">
          <div className="hamburger-btn">
            <button
              className="border-[1px] border-white rounded-full p-3 hover:bg-primary transition duration-300 ease-in-out"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              <RxHamburgerMenu className="w-5 h-5" />
            </button>
          </div>
          {toggleMenu && (
            <div
              className={`fixed inset-0 bg-[#14121E] bg-opacity-50 transition-opacity duration-300 ease-in-out`}
              onClick={() => setToggleMenu(false)}
            ></div>
          )}
          <div
            className={`hamburger-menu-items fixed bg-secondary py-5 h-full w-52 md:w-80 right-0 top-0 transform transition-transform duration-300 ease-in-out ${
              toggleMenu ? "translate-x-0" : "translate-x-full"
            } overflow-y-auto z-50`}
          >
            <div className="logo-cross-btn flex justify-between items-center gap-x-10 pt-7 pb-16">
              <div className="logo pl-3">
                <Link to="/">
                  <img
                    src={ProgrammersMarathonLogo}
                    alt=""
                    className="w-[12rem]"
                  />
                </Link>
              </div>
              <div className="btn px-3">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <MdOutlineCancel className="w-7 h-7" />
                </button>
              </div>
            </div>
            <ul className="flex flex-col items-center justify-center text-center w-full">
              <li className="w-full border-t-[1px] border-b-[1px] border-white">
                <span className="py-5 block hover:bg-primary transition duration-300 ease-in-out">
                  <Link to="/">Home</Link>
                </span>
              </li>
              <li className="w-full border-b-[1px] border-white">
                <span className="py-5 block hover:bg-primary transition duration-300 ease-in-out">
                  <ScrollLink
                    to="about"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    delay={100}
                  >
                    About
                  </ScrollLink>
                </span>
              </li>
              <li className="w-full border-b-[1px] border-white cursor-pointer">
                <span className="py-5 block hover:bg-primary transition duration-300 ease-in-out">
                  <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    delay={100}
                  >
                    Contact
                  </ScrollLink>
                </span>
              </li>

              <li className="w-full border-b-[1px] border-white">
                <span className="py-5 block hover:bg-primary transition duration-300 ease-in-out">
                  <Link to="/RegistrationForm">Register</Link>
                </span>
              </li>
            </ul>
            <div className="contact-info p-5 w-full">
              <div className="heading-contact-info pb-5">
                <h1 className="text-xl md:text-4xl font-bold">Contact Info</h1>
              </div>
              <div className="contact-all-information w-full flex flex-col gap-6">
                <div className="location flex justify-start items-center">
                  <div className="logo-info hover:bg-primary transition duration-300 ease-in-out p-4 rounded-md bg-[#2f2e2e]">
                    <GrLocation className="w-3 h-3 md:w-7 md:h-7" />
                  </div>
                  <div className="content-info px-4">
                    <p className="break-words">Shamshabad, Rawalpindi</p>
                  </div>
                </div>
                <div className="call-number flex justify-start items-center">
                  <div className="logo-info p-4 rounded-md bg-[#2f2e2e] hover:bg-primary transition duration-300 ease-in-out">
                    <IoCallOutline className="w-3 h-3 md:w-7 md:h-7" />
                  </div>
                  <div className="content-info px-4">
                    <p className="break-words">+92 3277846657</p>
                  </div>
                </div>
                <div className="gmail flex justify-start items-center">
                  <div className="logo-info p-4 rounded-md bg-[#2f2e2e] hover:bg-primary transition duration-300 ease-in-out">
                    <MdOutlineMailOutline className="w-3 h-3 md:w-7 md:h-7" />
                  </div>
                  <div className="content-info px-4">
                    <p className="break-words">
                      programmers marathon @gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className="justify-evenly items-center hidden lg:flex">
          <li className="underline-animation text-xl font-semibold curs">
            <Link to="/">Home</Link>
          </li>
          <li className="underline-animation text-xl font-semibold cursor-pointer">
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-50}
              delay={100}
            >
              About
            </ScrollLink>
          </li>
          <li className="underline-animation text-xl font-semibold cursor-pointer">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-50}
              delay={100}
            >
              Contact
            </ScrollLink>
          </li>

          <li className="underline-animation text-xl font-semibold">
            <Link to="/RegistrationForm">Register</Link>
          </li>
          {/* <li>
            <Button content="Contact Us" />
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default HomeNavbar;

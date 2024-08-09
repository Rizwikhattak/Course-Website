import React from "react";
import {
  FaInstagramSquare,
  FaLinkedin,
  FaWhatsappSquare,
  FaFacebookSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import {
  Link as ScrollLink,
  Element,
  animateScroll as scroll,
} from "react-scroll";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <Element name="contact" className="element">
      <section className="footer p-5 bg-white h-[80%] flex justify-between items-center">
        <div className="w-full h-full py-5">
          <h1 className="text-center pb-5 font-semibold text-2xl">
            Visit Our Socials
          </h1>
          <p className="text-center">
            We are available at various social platforms for your bookings,
            Support and Queries.
          </p>
          <div className="socials flex flex-wrap justify-center gap-6 items-center py-5">
            <a
              href="https://www.instagram.com/programmersmarathon24/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagramSquare className="w-10  h-10 cursor-pointer" />
            </a>

            <a
              href="mailto:programmersmarathon@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail className="w-12  h-12 cursor-pointer" />
            </a>

            <a
              href="https://www.linkedin.com/in/programmers-marathon-e-institute/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-10 h-10 cursor-pointer" />
            </a>

            <a
              href="https://wa.me/923277846657"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsappSquare className="w-10 h-10 cursor-pointer" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61562892962134"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare className="w-10 h-10 cursor-pointer" />
            </a>
            <a
              href="https://x.com/EducatorsPM_24"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter className="w-10 h-10 cursor-pointer" />
            </a>
          </div>
        </div>
        {/* <div className="w-[60%] h-full flex gap-1">
        <div className="first-social-box w-full h-full">
          <div
            className="card-first bg-black w-auto h-[320px]"
            style={{
              clipPath: "inset(5% 20% 15% 10% round 5% 20% 0 10%)",
            }}
          >
            <div className="logo-text">
              <div className="logo">
                <FaWhatsapp />
              </div>
              <div className="social-text">
                <h1>Whatsapp</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="second-social-box w-full h-full relative ">
          <div
            className="card-first bg-[#17262B] w-auto h-[320px] z-20 relative"
            style={{
              clipPath: "inset(5% 20% 15% 10% round 5% 20% 0 10%)",
            }}
          >
            <div className="logo-text">
              <div className="logo">
                <FaWhatsapp />
              </div>
              <div className="social-text">
                <h1>Whatsapp</h1>
              </div>
            </div>
          </div>
          <div
            className="card-first bg-black w-40px h-[320px] z-10"
            style={{
              clipPath: "inset(5% 20% 15% 10% round 5% 20% 0 10%)",
            }}
          ></div>
        </div>
      </div> */}
      </section>
    </Element>
  );
};

export default Footer;

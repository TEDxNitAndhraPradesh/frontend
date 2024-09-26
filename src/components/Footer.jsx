import {
  IoGitNetworkOutline,
  IoGlobe,
  IoGlobeOutline,
  IoLogoWebComponent,
  IoMailOutline,
} from "react-icons/io5";
import { MdOutlineLink } from "react-icons/md";
import React from "react";
import logoWhite from "../../public/images/logo-white.png";
import Image from "next/image";
import GetYourTickets from "./GetYourTickets";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-screen px-4 lg:px-24 xl:px-32 py-20 flex flex-col gap-5"
    >
      <div className="flex flex-col sm:flex-row items-center gap-3 justify-between">
        <Image src={logoWhite} className="h-20 sm:h-32 w-auto" />
        <GetYourTickets />
      </div>
      <div className="flex flex-col-reverse gap-3 sm:flex-row items-center sm:items-start justify-between px-3 sm:text-left text-center sm:px-7">
        <p className="text-neutral-500 leading-[1.6]">
          This independent TEDx event is operated under license from TED. <br />
          &copy; 2024 TEDxNITAndhraPradesh
        </p>
        <div className="flex flex-row items-center gap-4">
          <button className="group inline-flex items-center">
            <IoMailOutline size={50} color="white" />
            <div className="ml-2 overflow-hidden transition-all duration-[1600ms] ease-in-out max-w-0 group-hover:max-w-xs">
              <p className="text-white">tedx@nitandhra.ac.in</p>
            </div>
          </button>
          <Link
            href="https://www.facebook.com/TEDxNITAndhraPradesh/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="50px"
              height="50px"
            >
              <path
                fill="white"
                d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"
              />
            </svg>
          </Link>
          <Link
            href="https://www.instagram.com/tedxnitandhrapradesh/"
            target="_blank"
          >
            <FaInstagram size={50} color="white" />
          </Link>
          <Link href="https://nitandhra.ac.in/main/" target="_blank">
            <IoGlobeOutline size={50} color="white" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

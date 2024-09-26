"use client";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import logoWhite from "../../public/images/logo-white.png";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import { IoIosClose } from "react-icons/io";
gsap.registerPlugin(ScrollTrigger);
export default function NavBar() {
  const nav = useRef();
  useGSAP(() => {
    gsap.to(nav.current, {
      scrollTrigger: {
        trigger: ".title",
        start: "top center",
        // markers: true,
        scrub: true,
      },
      backgroundColor: "#000",
    });
  });
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const sideBar = document.getElementById("sideBar");
    if (isOpen) {
      sideBar.classList.remove("translate-x-[20rem]");
    } else {
      sideBar.classList.add("translate-x-[20rem]");
    }
  }, [isOpen]);
  return (
    <>
      <div
        ref={nav}
        className="z-20 fixed top-0 left-0 flex justify-between py-2 sm:py-3 px-4 sm:px-20 items-center w-full "
      >
        <Link href={"/"}>
          <div className="flex-col justify-center">
            <Image
              src={logoWhite}
              className="h-12 sm:h-20 w-auto"
              alt="TEDxNITAndhraPradesh"
            />
          </div>
        </Link>

        <ul className="text-white h-full hidden sm:flex items-center gap-6 text-[1.1rem]">
          <li className="nav-link">
            <Link href="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link href="/speakers">Speakers</Link>
          </li>
          <li className="nav-link">
            <Link href="/about" scroll={true}>
              About
            </Link>
          </li>
          <li className="nav-link">
            <Link href="#contact" scroll={true}>
              Connect with us
            </Link>
          </li>
        </ul>

        <div
          className="flex sm:hidden group flex-col justify-center h-full  gap-[0.5rem] pr-2"
          onClick={() => setIsOpen(true)}
        >
          <div className="duration-150 w-[2rem] h-[0.15rem] rounded-lg bg-white group-hover:bg-tedred"></div>
          <div className="duration-150 w-[1.5rem] group-hover:bg-tedred h-[0.15rem] rounded-lg bg-white"></div>
          <div className="duration-150 w-[2rem] group-hover:w-[1rem] h-[0.15rem] rounded-lg bg-white group-hover:bg-tedred"></div>
        </div>
      </div>
      <div
        id="sideBar"
        className="w-[20rem] translate-x-[20rem] h-[100vh] bg-black fixed top-0 right-0  flex sm:hidden transform-all duration-150 z-20"
      >
        <ul className=" text-white h-full w-full flex-col flex justify-center gap-2 items-center  text-[1.5rem] font-medium">
          <li>
            <IoIosClose
              onClick={() => setIsOpen(false)}
              size={60}
              className="top-5 hover:rotate-90 duration-[500ms] right-2 text-white hover:text-tedred absolute"
            />
          </li>
          <li className="side-link">
            <Link href="/" onClick={() => setIsOpen(false)}>
              HOME
            </Link>
          </li>
          <li className="side-link">
            <Link href="/speakers" onClick={() => setIsOpen(false)}>
              SPEAKERS
            </Link>
          </li>

          <li className="side-link">
            <Link href="/about" onClick={() => setIsOpen(false)}>
              ABOUT
            </Link>
          </li>
          <li className="side-link">
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              scroll={true}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

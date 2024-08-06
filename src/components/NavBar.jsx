"use client";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
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
        className="z-10 fixed top-0 flex justify-between p-2 items-center h-[5rem] w-full "
      >
        {/* <div className="z-10 sticky top-0 bg-black/95 bg-opacity-80 backdrop-blur flex justify-between p-2 items-center h-[5rem] w-full "> */}
        <div className="w-[15rem] sm:pl-[3rem] flex gap-2 pl-2 justify-start ">
          {/* <div className="w-[5rem] bg-green-100"></div> */}
          <div className="flex-col justify-center">
            <div className="font-helvitica -mb-1  font-extrabold text-xl text-[#FF2B06]">
              TED<sup>x</sup>
            </div>
            <div className="font-light -mt-1 text-[0.8rem] text-white">
              NIT Andhra Pradesh
            </div>
            <div className="-mt-[0.7rem]">
              <span className="text-tedred text-[0.5rem]">x=</span>
              <span className="text-white text-[0.5rem]">
                Independently Organized TED Event
              </span>
            </div>
          </div>
        </div>
        <div className="h-full  sm:w-[60%]">
          <ul className=" text-white h-full hidden sm:flex justify-around items-center text-[0.8rem] font-light">
            <li className="nav-link">
              <Link href="/">HOME</Link>
            </li>
            <li className="nav-link">
              <Link href="/speakers">SPEAKERS</Link>
            </li>
            <li className="nav-link">
              <Link href="/sponsers">SPONSERS</Link>
            </li>
            <li className="nav-link">
              <Link href="/about">ABOUT</Link>
            </li>
            <li className="nav-link">
              <Link href="#contact" scroll={true}>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
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
        className="w-[20rem] translate-x-[20rem] h-[100vh] bg-black fixed top-0 right-0 z-10 flex sm:hidden transform-all duration-150"
      >
        <ul className=" text-white h-full w-full flex-col flex justify-center gap-10 items-center  text-[1.5rem] font-medium">
          <li>
            <IoIosClose
              onClick={() => setIsOpen(false)}
              size={60}
              className="top-5 hover:rotate-90 duration-[500ms] right-2 text-white hover:text-tedred absolute"
            />
          </li>
          <li className="side-link">
            <Link href="/">HOME</Link>
          </li>
          <li className="side-link">
            <Link href="/speakers">SPEAKERS</Link>
          </li>
          <li className="side-link">
            <Link href="/sponsers">SPONSERS</Link>
          </li>
          <li className="side-link">
            <Link href="/about">ABOUT</Link>
          </li>
          <li className="side-link">
            <Link href="#contact" scroll={true}>
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

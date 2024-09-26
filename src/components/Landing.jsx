import React from "react";
import to from "../../public/images/1(2).svg";
import Image from "next/image";
import { Syne } from "next/font/google";
import { AiOutlineCalendar } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import GetYourTickets from "./GetYourTickets";

const syne = Syne({ subsets: ["latin"] });

export default function Landing() {
  return (
    <div className="noise min-h-screen w-full flex flex-col sm:flex-row justify-end sm:justify-center items-center sm:items-end px-4 py-2 sm:px-20 sm:py-10">
      <div className="title text-center pr-6">
        <p
          className={`text-[3.5rem] sm:text-[5.1rem] opacity-5 leading-none text-white font-bold ${syne.className}`}
        >
          ALCHEMY
        </p>
        <p
          className={`text-[3.5rem] sm:text-[5.1rem] opacity-20 leading-none text-white font-bold ${syne.className}`}
        >
          ALCHEMY
        </p>
        <p
          className={`text-[3.5rem] sm:text-[5.1rem] leading-none text-white font-bold ${syne.className}`}
        >
          ALCHEMY
        </p>
        <p
          className={`text-[1rem] sm:text-[1.4rem] text-neutral-300 ${syne.className}`}
        >
          Transformation of Ordinary to Extraordinary
        </p>
      </div>
      <div className="flex flex-col items-start sm:items-end w-full justify-between mb-6 sm:py-0 py-9">
        <div className="flex text-[0.9rem] sm:text-base flex-col items-start sm:items-end text-white justify-between">
          <div className="flex sm:flex-row flex-row-reverse gap-2">
            <p className="font-thin">5th October, 2 PM - 6 PM, 2024</p>
            <AiOutlineCalendar
              size={20}
              className="scale-75 sm:scale-100 text-tedred"
            />
          </div>

          <div className="flex sm:flex-row flex-row-reverse gap-2">
            <p className="font-thin">NIT Andhra Pradesh</p>
            <IoLocationOutline
              size={20}
              className="text-tedred scale-75 sm:scale-100"
            />
          </div>

          <div className="flex sm:flex-row flex-row-reverse gap-2">
            <p className="font-thin">6 Speakers</p>
            <CiUser size={20} className="text-tedred scale-75 sm:scale-100" />
          </div>
        </div>
        <br />
        <GetYourTickets />
      </div>
    </div>
  );
}

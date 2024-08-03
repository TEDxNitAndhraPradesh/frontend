import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
export default function Event() {
  return (
    <>
      <div className="flex justify-center sm:justify-around flex-wrap items-start sm:items-center h-max p-5 min-h-[20rem]  w-full bg-black flex-col sm:flex-row gap-5 ">
        <div className="flex gap-2">
          <AiOutlineCalendar size={60} className="text-tedred" />
          <div className="flex text-white justify-center flex-col font-light">
            <p>DATE</p>
            <p>2:00 PM, 29nd September, 2024</p>
          </div>{" "}
        </div>
        <div className="flex gap-2">
          <IoLocationOutline size={60} className="text-tedred" />
          <div className="flex text-white justify-center flex-col font-light">
            <p>LOCATION</p>
            <p>NIT AndhraPradesh</p>
          </div>{" "}
        </div>
        <div className="flex gap-2">
          <CiUser size={60} className="text-tedred" />
          <div className="flex text-white justify-center flex-col font-light">
            <p>SPEAKERS</p>
            <p>TBA</p>
          </div>{" "}
        </div>
      </div>
      <div className="justify-around items-center h-[10rem] w-full bg-white flex ">
        <p className="hidden justify-center sm:flex font-bold text-center w-[70%] font-poppins text-xl sm:text-3xl md:text-5xl">
          GET YOUR TICKETS
        </p>
        <span className=" h-full sm:w-[.2rem] bg-black"></span>
        <div className="flex h-full w-full sm:w-[30%] justify-center items-center font-bold font-poppins text-2xl sm:text-xl md:text-3xl">
          <span>Register Now</span>
          <IoIosArrowRoundForward size={50} />
          {/* <FaArrowRight size={50} /> */}
        </div>
      </div>
    </>
  );
}

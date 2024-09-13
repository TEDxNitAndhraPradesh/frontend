import { IoMailOutline } from "react-icons/io5";
import { MdOutlineLink } from "react-icons/md";
import React from "react";
import { FaInstagram } from "react-icons/fa6";
import {
  TiSocialFacebook,
  TiSocialYoutube,
  TiSocialLinkedin,
} from "react-icons/ti";
import Link from "next/link";
export default function Footer() {
  return (
    <>
      <div
        id="contact"
        className=" w-full flex  flex-col h-[21rem] overflow-clip bg-black"
      >
        <div className="w-full flex flex-wrap justify-around gap-5 items-center h-[16.5rem] p-2 ">
          {/* <Image src={logo} className="w-[7.5rem] " alt="" /> */}
          <div className="  flex gap-2  justify-start ">
            <div className="flex-col justify-center">
              <div className="font-helvitica -mb-1  font-extrabold text-2xl sm:text-3xl text-[#FF2B06]">
                TED<sup>x</sup>
              </div>
              <div className="font-light -mt-2 text-[0.8rem] sm:text-[1rem] text-white">
                NIT Andhra Pradesh
              </div>
              <div className="-mt-[0.2rem] text-[0.5rem] sm:text-[0.7rem]">
                <span className="text-tedred ">x=</span>
                <span className="text-white ">
                  Independently Organized TED Event
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-white font-poppins font-bold tracking-tight">
              CONTACT US
            </p>
            <div className="flex flex-wrap  gap-10">
              <div className="font-poppins font-bold text-[#777777]">
                <p className="items-center  flex gap-2 hover:text-tedred duration-150">
                  <MdOutlineLink /> Nit Andhra Pradesh
                </p>

                <p className="inline-flex gap-2 justify-center items-center hover:text-tedred duration-150">
                  <IoMailOutline /> tedx@nitandhra.ac.in
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-between flex-wrap-reverse gap-5 items-center  w-full p-5">
          <p className="font-poppins text-white font-light text-center w-full md:w-max text-opacity-50 ">
            © Copyright 2024. All Rights Reserved.
          </p>
          <div className="flex text-[0.8rem] font-metrapolis-bold text-white justify-center flex-wrap w-full md:w-max items-center gap-4">
            <Link
              href="https://www.instagram.com/tedxnitandhrapradesh/"
              target="_blank"
            >
              {" "}
              <p className="flex gap-2 items-center hover:text-tedred duration-150">
                <FaInstagram size={15} /> INSTAGRAM{" "}
              </p>
            </Link>
            {/* <Link href=" " target="_blank"> */}
            {/*   {" "} */}
            {/*   <p className="flex gap-2 items-center hover:text-tedred duration-150"> */}
            {/*     <TiSocialFacebook size={15} /> FACEBOOK */}
            {/*   </p>{" "} */}
            {/* </Link> */}
            <Link href="" target="_blank">
              {" "}
              <p className="flex gap-2 items-center hover:text-tedred duration-150">
                <TiSocialLinkedin size={15} /> LINKED IN
              </p>{" "}
            </Link>
            <Link href="" target="_blank">
              {" "}
              <p className="flex gap-2 items-center hover:text-tedred duration-150">
                <TiSocialYoutube size={15} /> YOUTUBE
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

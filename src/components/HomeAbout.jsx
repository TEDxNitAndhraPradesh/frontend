"use client";
import { data } from "@/data/about";
import React, { useState } from "react";

export default function HomeAbout() {
  const [about, setAbout] = useState(0);
  return (
    <div className="flex-col max-h-max min-h-[40rem] bg-black justify-around items-start p-5 w-full flex">
      {/* <p className="  text-white text-start font-poppins font-bold text-[5rem]  "> */}
      {/*   About Us */}
      {/* </p>{" "} */}
      <div className=" h-full flex-wrap flex justify-evenly gap-5 items-center ">
        <div className="text-white w-full mdl:w-[70%] flex flex-col gap-5">
          <h1 className="font-bold text-3xl sm:text-4xl text-tedred font-poppins">
            {data[about].head}
          </h1>
          <p className="font-poppins text-xl  sm:text-2xl text-justify">
            {data[about].para}
          </p>
        </div>
        <div className=" flex mdl:flex-col gap-5 h-full items-end justify-center">
          <button
            className="ted-button"
            onClick={() => {
              setAbout(0);
            }}
          >
            TED
          </button>{" "}
          <button
            onClick={() => {
              setAbout(1);
            }}
            className="ted-button"
          >
            TEDx
          </button>{" "}
          <button
            onClick={() => {
              setAbout(2);
            }}
            className="ted-button"
          >
            TEDxNITAndhraPradesh
          </button>
        </div>
      </div>
    </div>
  );
}

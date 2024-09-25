import React from "react";
import to from "../../public/images/1(2).svg";
import Image from "next/image";

export default function HomeFirst() {
  return (
    <>
      <div className="flex bg-no-repeat relative top-0 bg-[url('../../public/images/Home.png')] h-[100vh] justify-center w-full bg-cover">
        <div className="p-2 sm:p-5 sm:pl-[3rem] gap-6 flex justify-end flex-col items-start bg-gradient-to-tr from-black/10 via-black/60 to-tedred/10 backdrop-filter backdrop-blur-sm bg-opacity-45 h-full w-full ">
          {/* <div> */}
          <div className="title text-[#FF2B06] text-2xl md:text-3xl">
            <span className="font-helvitica font-extrabold">
              TED<sup>x</sup>
            </span>
            <span className="text-white font-light">NITAndhraPradesh</span>
          </div>
          <div>
            <div className="text-white text-3xl sm:text-5xl flex gap-5 flex-col">
              <p className="font-poppins font-bold">Alchemy :</p>
              <p className="font-light sm:text-3xl gap-2 md:text-5xl flex-wrap inline-flex items-center">
                Transformation of{" "}
                <span className="font-poppins"> Ordinary</span>{" "}
                <span className="font-poppins inline-flex items-center">
                  <Image
                    src={to}
                    width={500}
                    height={500}
                    className="w-[1.5rem] md:w-[2.3rem]"
                  />{" "}
                  <span className=" text-tedred ">o</span>{" "}
                </span>
                <span className="font-poppins">Extraordinary</span>
              </p>
            </div>
          </div>
        </div>
        {/* <div className="h-full overflow-clip flex justify-center items-center  w-[40%] bg-[#ff2b06]"> */}
        {/*   <p className="tracking-tighter p-0 m-0 font-helvitica font-extrabold text-[15rem] sm:text-[18rem] text-white transform rotate-90"> */}
        {/*     TED<sup>x</sup> */}
        {/*   </p> */}
        {/* </div>{" "} */}
      </div>
    </>
  );
}

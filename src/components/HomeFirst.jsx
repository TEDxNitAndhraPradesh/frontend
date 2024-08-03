import React from "react";

export default function HomeFirst() {
  return (
    <>
      <div className="flex bg-no-repeat relative top-0 bg-[url('../images/Home.png')] h-[100vh] justify-center w-full bg-cover">
        <div className="p-5 pl-[3rem] gap-6 flex justify-end flex-col items-start bg-gradient-to-tr from-black/10 via-black/60 to-tedred/10 backdrop-filter backdrop-blur-sm bg-opacity-45 h-full w-full ">
          {/* <div> */}
          <div className="title text-[#FF2B06] text-2xl md:text-3xl">
            <span className="font-helvitica font-extrabold">
              TED<sup>x</sup>
            </span>
            <span className="text-white font-light">NITAndhraPradesh</span>
          </div>
          <div>
            <div className="text-white text-3xl sm:text-5xl md:text-7xl flex gap-5 flex-col font-extrabold ">
              Alchemy :
              <p className="font-thin ">Turning of Ordinary to Extraordinary</p>
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

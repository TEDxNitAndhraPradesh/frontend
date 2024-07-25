import React from "react";

export default function HomeFirst() {
  return (
    <>
      <div className="flex  h-[100vh] justify-center w-full">
        <div className="p-5 gap-6 flex col-span-2 justify-center flex-col items-start bg-black h-full w-[60%]">
          <div className="-mt-5 text-[#FF2B06]">
            <span className="font-helvitica font-extrabold text-[1.5rem]">
              TED<sup>x</sup>
            </span>
            <span className="text-white text-[1.5rem] font-light">
              NITAndhraPradesh
            </span>
          </div>
          <div>
            <div className="text-white text-[3rem] font-extrabold">
              Alchemy :
              <p className="font-thin ">Turning of Ordinary to Extraordinary</p>
            </div>
          </div>
        </div>
        <div className="h-full overflow-clip flex justify-center items-center  w-[40%] bg-[#ff2b06]">
          <p className="tracking-tighter p-0 m-0 font-helvitica font-extrabold text-[15rem] sm:text-[18rem] text-white transform rotate-90">
            TED<sup>x</sup>
          </p>
        </div>{" "}
      </div>
    </>
  );
}

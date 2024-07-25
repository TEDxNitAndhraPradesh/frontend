import React from "react";

export default function Footer() {
  return (
    <div
      className="h-[30rem] w-full bg-black/50 grid  grid-cols-5 "
      id="contact"
    >
      {" "}
      <div className="bg-black"></div>
      <div className="col-span-2 bg-tedred"></div>
      <div className="bg-white col-span-2 flex justify-center items-center">
        <p>Hello</p>
      </div>
    </div>
  );
}

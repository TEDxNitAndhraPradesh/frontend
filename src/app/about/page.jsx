import React from "react";
import { Syne } from "next/font/google";
const syne = Syne({ subsets: ["latin"] });
import Image from "next/image";
import team1 from "../../../public/images/speakers/Israel_Jebasingh.jpg";

function Page() {
  return (
    <section className="flex flex-col text-white px-4 sm:px-20 py-40 gap-20 min-h-screen items-center">
      <div className="flex flex-col sm:flex-row items-center justify-around w-full">
        <h1 className={`${syne.className} text-[2.26rem] sm:text-[3.4rem]`}>
          VISION
        </h1>
        <div className="w-[90%] sm:w-[50%] text-neutral-400 text-lg">
          This year, we are excited to host a grand and well-organized TEDx
          event themed “Alchemy” featuring speakers from diverse domains such as
          Public Services, Entrepreneurship, Personal Transformation, NGOs,
          musicians, and other local talents. By focusing on local speakers, we
          aim to ensure that the community benefits from the insights shared,
          fostering meaningful interactions and discussions.
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-around w-full">
        <h1 className={`${syne.className} text-[2.26rem] sm:text-[3.4rem]`}>
          MOTTO
        </h1>
        <div className="w-[90%] sm:w-[50%] text-neutral-400 text-lg">
          This year, we are excited to host a grand and well-organized TEDx
          event themed “Alchemy” featuring speakers from diverse domains such as
          Public Services, Entrepreneurship, Personal Transformation, NGOs,
          musicians, and other local talents. By focusing on local speakers, we
          aim to ensure that the community benefits from the insights shared,
          fostering meaningful interactions and discussions.
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-around w-full">
        <h1 className={`${syne.className} text-[2.26rem] sm:text-[3.4rem]`}>
          TEAM
        </h1>
        <div className="w-[90%] sm:w-[50%] grid grid-cols-2 gap-10 py-2 md:grid-cols-3">
          <Image
            src={team1}
            alt="Team Member 1"
            className="rounded-full h-32 w-32"
          />
          <Image
            src={team1}
            alt="Team Member 1"
            className="rounded-full h-32 w-32"
          />
          <Image
            src={team1}
            alt="Team Member 1"
            className="rounded-full h-32 w-32"
          />
          <Image
            src={team1}
            alt="Team Member 1"
            className="rounded-full h-32 w-32"
          />
          <Image
            src={team1}
            alt="Team Member 1"
            className="rounded-full h-32 w-32"
          />
          <Image
            src={team1}
            alt="Team Member 1"
            className="rounded-full h-32 w-32"
          />
          <Image
            src={team1}
            alt="Team Member 1"
            className="rounded-full h-32 w-32"
          />
          <Image
            src={team1}
            alt="Team Member 1"
            className="rounded-full h-32 w-32"
          />
          <Image
            src={team1}
            alt="Team Member 1"
            className="rounded-full h-32 w-32"
          />
          <Image
            src={team1}
            alt="Team Member 1"
            className="rounded-full h-32 w-32"
          />
          <Image
            src={team1}
            alt="Team Member 1"
            className="rounded-full h-32 w-32"
          />
          <Image
            src={team1}
            alt="Team Member 1"
            className="rounded-full h-32 w-32"
          />
        </div>
      </div>
    </section>
  );
}

export default Page;

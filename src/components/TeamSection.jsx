import { Syne } from "next/font/google";
const syne = Syne({ subsets: ["latin"] });
import Image from "next/image";

const TeamSection = ({ title, teamMembers }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-around w-full my-8">
      <h1
        className={`${syne.className} font-semibold self-start text-[2.26rem] sm:text-[3rem] text-start w-full sm:w-1/4 pl-5 pt-5 sm:pl-0`}
      >
        {title}
      </h1>
      <div className="w-full sm:w-[50%] grid justify-center grid-cols-2 gap-10 py-2 md:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex justify-center items-center h-32 w-32 mx-auto"
          >
            <Image
              src={member.pic}
              alt={member.name}
              className="rounded-full"
              width={128}
              height={128}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;

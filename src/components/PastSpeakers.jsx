import { speakersData } from "@/data/speakersData";
const PastSpeakers = () => {
  return (
    <>
      <div className="w-full h-max flex flex-col justify-center gap-5 p-10 bg-black">
        <div className="gap-3 flex flex-col">
          <p className="text-2xl sm:text-4xl font-poppins text-white bg-black font-bold ">
            PAST SPEAKERS
          </p>
          <div className="w-[5rem] h-[0.2rem] bg-tedred"></div>
        </div>
        <div
          id="pastSpeakers"
          className="flex flex-wrap gap-3 justify-evenly items-center w-full h-max"
        >
          {speakersData[2019].map((speaker, index) => (
            <div key={index} className="card p-6 bg-black rounded-lg ">
              <img
                src={speaker.pic}
                alt={speaker.name}
                className="w-36 h-40 object-cover mx-auto mb-4 border-2 border-aqua"
              />
              <h3 className="text-xl font-semibold mb-2 text-center text-white">
                {speaker.name}
              </h3>
              <p className="text-sm italic text-white mb-4 text-center">
                {speaker.profession}
              </p>
              <p className="text-sm text-center text-white">{speaker.info}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PastSpeakers;

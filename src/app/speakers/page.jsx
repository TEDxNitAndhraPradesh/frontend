"use client";
import React, { useState } from "react";

const speakersData = {
  2019: [
    {
      name: "Jane Smith",
      profession: "Scientist",
      info: "Jane is a renowned scientist who has made groundbreaking discoveries in biotechnology.",
      pic: "https://via.placeholder.com/150",
    },
    {
      name: "David Lee",
      profession: "Author",
      info: "David is an award-winning author of several best-selling novels.",
      pic: "https://via.placeholder.com/150",
    },
    {
      name: "John Doe",
      profession: "Engineer",
      info: "John is an innovative engineer who has worked on several groundbreaking projects.",
      // pic: msd, // Use the imported image
    },
    {
      name: "Alice Johnson",
      profession: "Artist",
      info: "Alice is a renowned artist known for her abstract paintings.",
      pic: "https://via.placeholder.com/150", // Placeholder for now
    },
  ],
  2024: [
    {
      name: "Jane Smith",
      profession: "Scientist",
      info: "Jane is a renowned scientist who has made groundbreaking discoveries in biotechnology.",
      pic: "https://via.placeholder.com/150",
    },
    {
      name: "David Lee",
      profession: "Author",
      info: "David is an award-winning author of several best-selling novels.",
      pic: "https://via.placeholder.com/150",
    },
    {
      name: "John Doe",
      profession: "Engineer",
      info: "John is an innovative engineer who has worked on several groundbreaking projects.",
      // pic: msd, // Use the imported image
    },
    {
      name: "Alice Johnson",
      profession: "Artist",
      info: "Alice is a renowned artist known for her abstract paintings.",
      pic: "https://via.placeholder.com/150", // Placeholder for now
    },
  ],
};

const SpeakersPage = () => {
  const [selectedYear, setSelectedYear] = useState(2024);

  return (
    <div className="bg-black text-white min-h-screen relative p-4">
      <div className="flex flex-col sm:flex-row min-h-screen relative justify-center top-20">
        {/* Left Div - Years */}
        <div className="sm:w-1/4  p-6 flex sm:flex-col flex-wrap items-center sm:items-start sm:space-y-4 sm:h-screen">
          {/* <h2 className="text-2xl font-bold text-aqua mb-4">EVENT YEARS</h2> */}
          {Object.keys(speakersData).map((year) => (
            <div
              key={year}
              onClick={() => setSelectedYear(parseInt(year))}
              className={`cursor-pointer sm:py-2 px-6 rounded-lg font-medium text-lg transition-all duration-300 ${selectedYear === parseInt(year)
                  ? "text-tedred"
                  : "text-white  hover:text-red-900"
                }`}
            >
              {year}
            </div>
          ))}
        </div>

        {/* Right Div - Speakers */}
        <div className="sm:w-3/4 p-6">
          <h2 className="sm:text-3xl font-bold text-tedred mb-6">
            SPEAKERS ATTENDED IN YEAR{" "}
            <span className="text-white">{selectedYear}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakersData[selectedYear].map((speaker, index) => (
              <div
                key={index}
                className=" p-6 rounded-lg shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <img
                  src={speaker.pic}
                  alt={speaker.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-aqua"
                />
                <h3 className="text-xl font-semibold mb-2 text-center text-aqua-800">
                  {speaker.name}
                </h3>
                <p className="text-sm italic text-aqua-600 mb-4 text-center">
                  {speaker.profession}
                </p>
                <p className="text-sm text-center text-aqua-800">
                  {speaker.info}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakersPage;

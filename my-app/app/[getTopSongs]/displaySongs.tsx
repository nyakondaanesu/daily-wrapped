"use client";

import React, { useState } from "react";

const DisplaySongs = ({
  navbarChild,
  short_termChildren,
  long_termChildren,
  medium_termChildren,
}: {
  short_termChildren: React.ReactNode;
  long_termChildren: React.ReactNode;
  medium_termChildren: React.ReactNode;
  navbarChild: React.ReactNode;
}) => {
  const [component, setComponent] = useState(short_termChildren);
  const [activeButton, setActiveButton] = useState<string>("4 weeks");
  return (
    <>
      {navbarChild}
      <main>
        <h1 className="font-futura mx-5 text-4xl md:mx-28 mt-10 md:text-6xl">
          Your Top <span className="text-spotifyGreen">Songs</span>
        </h1>
        <div className="flex space-x-5 mx-5 md:mx-28 mt-5">
          <button
            onClick={() => {
              setActiveButton("4 weeks");
              setComponent(short_termChildren);
            }}
            className={
              activeButton == "4 weeks"
                ? "bg-white text-black rounded-lg p-1"
                : ""
            }
          >
            4 weeks
          </button>
          <button
            onClick={() => {
              setActiveButton("6 months");
              setComponent(medium_termChildren);
            }}
            className={
              activeButton == "6 months"
                ? "bg-white text-black rounded-lg p-1"
                : ""
            }
          >
            6 months
          </button>
          <button
            onClick={() => {
              setActiveButton("12 months");
              setComponent(long_termChildren);
            }}
            className={
              activeButton == "12 months"
                ? "bg-white text-black rounded-lg p-1"
                : ""
            }
          >
            12 months
          </button>
        </div>

        <div className=" md: mt-10">{component}</div>
      </main>
    </>
  );
};

export default DisplaySongs;

"use client";
import Link from "next/link";
import { useState } from "react";
const Buttons = () => {
  const [activeButton, setActiveButton] = useState("6 months"); // Default active button

  return (
    <div>
      <button
        className={`rounded-md px-3 ${
          activeButton === "4 weeks" ? "bg-white text-black" : " text-white"
        }`}
        onClick={() => setActiveButton("4 weeks")}
      >
        <Link href="/top-artists">4 weeks</Link>
      </button>

      <button
        className={`rounded-lg px-3 ${
          activeButton === "6 months" ? "bg-white text-black" : " text-white"
        }`}
        onClick={() => setActiveButton("6 months")}
      >
        <Link href="/top-artist-medium">6 months</Link>
      </button>

      <button
        className={`rounded-lg px-3 ${
          activeButton === "12 months" ? "bg-white text-black" : " text-white"
        }`}
        onClick={() => setActiveButton("12 months")}
      >
        <Link href="/top-artist-long">12 months</Link>
      </button>
    </div>
  );
};

export default Buttons;

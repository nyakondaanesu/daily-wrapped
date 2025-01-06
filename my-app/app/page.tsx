import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex mx-5 min-h-screen items-center md:flex-col md:items-start md:justify-center md:min-h-[38rem] ">
        <div className="">
          <h1 className="text-5xl text-cinemaYellow  md:text-7xl">
            Unlock Your Sound Journey:
          </h1>
          <h4 className="text-xs my-2" />
          Track your listening habits, explore your favorite artists, and
          uncover trends in your music taste.
          <br /> Get personalized insights to enhance your music experience.
          <h4 />
          <button className="flex items-center rounded-full bg-white text-black p-3 my-14">
            login with Spotify
            <img
              width="25"
              height="24"
              src="https://img.icons8.com/ios/50/long-arrow-right--v1.png"
              className="mx-3"
              alt="long-arrow-right--v1"
            />
          </button>
        </div>
      </div>
    </>
  );
}

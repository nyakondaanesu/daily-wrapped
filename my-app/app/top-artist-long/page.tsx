import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Navbar from "../navbar";
import Buttons from "./buttons";
import GetTopLong from "./GetTopLong";
import { Suspense } from "react";

const TopArtistPage = () => {
  //don't forget to add the auth function to get the session

  return (
    <>
      <Navbar></Navbar>
      <main>
        <h1 className="font-futura mx-5 text-4xl md:mx-28 mt-10 md:text-6xl">
          Your Top artists
        </h1>
        <div className="flex mx-5 md:mx-28 mt-4">
          <Buttons />
        </div>
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-vh-screen">
              <div className="mt-10">
                <img src="/loader.gif" alt="" width={50} />
              </div>
            </div>
          }
        >
          <GetTopLong />
        </Suspense>
      </main>
    </>
  );
};

export default TopArtistPage;

import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Navbar from "./_components/navbar";
import GetTopArtists from "./getTopArtist";

const TopArtistPage = async () => {
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  }

  return (
    <>
      <Navbar></Navbar>
      <main>
        <h1 className="font-futura mx-5 text-5xl md:mx-28 mt-10">
          Top artists
        </h1>
        <div className="flex mx-5 md:mx-28 mt-4">
          <button className="rounded-md px-3 bg-white text-black">
            4 weeks
          </button>
          <button className="rounded-lg px-3">6 months</button>
          <button className="rounded-lg px-3 ">12 months</button>
        </div>

        <GetTopArtists />
      </main>
    </>
  );
};

export default TopArtistPage;

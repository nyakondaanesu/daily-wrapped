"use server";
import { auth } from "@/auth";
import { Image } from "next-auth/providers/42-school";
import Link from "next/link";
import { Session } from "next-auth";

const Navbar = async ({ pageType }: { pageType: string }) => {
  const session = await auth();
  return (
    <>
      <header className="flex justify-between items-center  ">
        <div className="flex items-center my-5 mx-5 md:mx-28">
          <span
            className="flex justify-center items-center space-x-3"
            id="logo"
          >
            <img src="/spotifylogo.png" width={36} alt="" />
            <label htmlFor="logo" className="text-white text-xs font-bold">
              Daily-Wrap
            </label>
          </span>
        </div>

        <div className="flex items-center justify-center mx-5 md:mx-10 space-x-3">
          <button className="text-sm text-black px-2 py-1 bg-spotifyGreen rounded-full">
            <Link
              href={pageType == "Top Artists" ? "/top-artists" : "top-songs"}
            >
              {" "}
              {pageType}
            </Link>
          </button>
          <button className="bg-spotifyGreen rounded-full ">
            <img
              src={session?.user?.image as string}
              width={36}
              className="rounded-full border-2 border-spotifyGreen"
              alt="spotify profile image"
            />
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;

import { auth, signIn } from "@/auth";

import { redirect } from "next/navigation";
export default async function Home() {
  const session = await auth();

  if (session?.user) {
    console.log(session?.expires);
    redirect("/top-artists");
    return <> redirecting ...</>;
  }
  return (
    <>
      <main className="md:min-vh-screen">
        <header className="flex justify-between items-center py-4">
          <div className="flex items-center justify-bet  md:mx-28">
            <span className="flex justify-center items-center" id="logo">
              <img src="/spotifylogo.png" width={25} alt="" />
              <label htmlFor="logo" className="text-white text-xs font-bold">
                Daily-Wrap
              </label>
            </span>
          </div>

          <div className="flex items-center justify-center mr-4">
            <button className="bg-white rounded-lg text-black text-xs p-1 px-3">
              Login
            </button>
          </div>
        </header>
        <div className="mt-32 md:mt-20 items-center justify-center md:flex ">
          <div className="md:w-1/2 mx-1 md:mx-20">
            <h1 className=" text-4xl text-white font-futura  md:text-6xl">
              Unlock Your Sound Journey:
            </h1>

            <form
              action={async () => {
                "use server";
                await signIn("spotify", { redirectTo: "/top-artists" });
              }}
            >
              <button className="flex items-center font-futuraThin rounded-lg bg-white text-black text-sm p-2 my-14 ">
                login with Spotify
                <img
                  width="12"
                  height="12"
                  src="https://img.icons8.com/ios/50/long-arrow-right--v1.png"
                  className="mx-2"
                  alt="long-arrow-right--v1"
                />
              </button>
            </form>
          </div>
          <div className="md:w-1/2 items-center justify-center ">
            <div className="relative flex items justify-center  ">
              <img
                src="/drake.png"
                width={200}
                className="z-10 rotate-[-12deg] absolute md:left-24  -left-2 -top-0 "
                alt=""
              />

              <img src="/frank.png" width={200} className="z-30" alt="" />

              <img
                src="/song.png"
                width={200}
                className="z-10 rotate-12 absolute md:right-24 -right-2 -top-4 -top-0"
                alt=""
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

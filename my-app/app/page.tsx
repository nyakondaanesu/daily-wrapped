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
      <main className="bg-bannerImg bg-cover h-dvh">
        <header className="flex justify-between items-center mx-auto bg-black/30 backdrop-blur-sm shadow-sm z-50 ">
          <div className="flex items-center my-5 mx-5 md:mx-28">
            <span
              className="flex justify-center items-center space-x-3"
              id="logo"
            >
              <img src="/spotifylogo.png" width={50} alt="" />
              <label htmlFor="logo" className="text-white text-xs font-bold">
                Daily-Wrap
              </label>
            </span>
          </div>

          <div className="flex items-center justify-center mr-4">
            <button className="bg-white rounded-lg text-black p-1 px-3">
              Login
            </button>
          </div>
        </header>
        <div className="flex mx-5 min-h-screen items-center md:w-3/4 md:flex-col md:items-start md:justify-center md:min-h-[40rem] ">
          <div className="mx-1 md:mx-24">
            <h1 className="text-5xl text-cinemaYellow font-futura  md:text-7xl">
              Unlock Your Sound Journey:
            </h1>
            <h4 className="font-futuraThin my-2" />
            Track your listening habits, explore your favorite artists, and
            uncover trends in your music taste.
            <br /> Get personalized insights to enhance your music experience.
            <h4 />
            <form
              action={async () => {
                "use server";
                await signIn("spotify", { redirectTo: "/top-artists" });
              }}
            >
              <button className="flex items-center font-futuraThin rounded-full bg-white/80 text-black p-3 my-14 hover:bg-spotifyGreen/60 hover:text-white">
                login with Spotify
                <img
                  width="25"
                  height="24"
                  src="https://img.icons8.com/ios/50/long-arrow-right--v1.png"
                  className="mx-3"
                  alt="long-arrow-right--v1"
                />
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

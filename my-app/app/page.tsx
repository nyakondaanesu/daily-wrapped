import { auth, signIn } from "@/auth";

import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    console.log(session?.expires);
    redirect(
      "https://daily-wrapped-h5kizb1nd-nyakondaanesus-projects.vercel.app/top-artists"
    );
    return <> redirecting ...</>;
  }
  return (
    <>
      <main className="min-vh-dvh">
        <header className="flex justify-between items-center py-4">
          <div className="flex items-center justify-center mx-5   md:mx-28">
            <span className="flex justify-center items-center" id="logo">
              <img src="/spotifylogo.png" className="pr-5" width={64} alt="" />
              <label htmlFor="logo" className="text-white text-xs  font-bold">
                Daily-Wrap
              </label>
            </span>
          </div>
        </header>
        <div className="mt-32 md:mt-20 items-center justify-center md:flex ">
          <div className=" md:w-3/5 mx-5 md:mx-28 md:mt-14">
            <h1 className=" text-4xl text-white font-futura  md:text-6xl">
              Discover the soundtrack of your life with our music tracking
              platform
            </h1>
            <p className="text-sm mt-5 font-futuraThin">
              By monitoring your listening habits, we provide you with insights
              into your unique musical tastes, preferences, and patterns over
              time.
            </p>

            <form
              action={async () => {
                "use server";
                await signIn("spotify", { redirectTo: "/top-artists" });
              }}
            >
              <button className="flex items-center font-futuraThin rounded-lg bg-white text-black text-sm p-2 my-14 ">
                SignIn with Spotify
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

          <div className="d">
            <img src="/banner.png" alt="" />
          </div>
        </div>
      </main>
    </>
  );
}

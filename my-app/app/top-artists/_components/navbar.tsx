import { auth } from "@/auth";
const Navbar = async () => {
  const session = await auth();
  return (
    <>
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
          <button className="bg-spotifyGreen rounded-full ">
            <img
              src={session?.user?.image as any}
              width={48}
              className="rounded-full p-1"
              alt="spotify profile image"
            />
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;

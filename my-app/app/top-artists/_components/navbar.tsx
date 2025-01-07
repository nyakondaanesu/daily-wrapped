const Navbar = () => {
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
          <button className="bg-white rounded-lg text-black p-1 px-3">
            Login
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;

export const Navbar = () => {
  //   useEffect(() => {
  //     document.body.style.overflow = menuOpen ? "hidden" : "";
  //   }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-8">
        <div className="flex justify-between items-center h-20 sm:h-16">
          <div className="logo flex items-center justify-center gap-2">
            <img
              className="w-[34px]"
              src="https://raw.githubusercontent.com/junnn6ix/src/5af71f66ccac973bd3970ab62167d3f5c78efc67/assets/logo.svg"
              alt=""
            />
            <a
              href="#"
              className="md:text-2xl sm:text-xl font-bold text-white hover:text-purple-700/70 duration-300 transition-all ease-in-out">
              .jun
            </a>
          </div>

          {/* <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onCLick={() => setMenuOpen((prev) => !prev)}>
            &#9776;
          </div> */}

          {/* <div className="hidden md:flex items-center space-x-8">
            <a
              href=""
              className="text-gray-300 hover:text-white transition-colors">
              Home
            </a>
            <a
              href=""
              className="text-gray-300 hover:text-white transition-colors">
              About
            </a>
            <a
              href=""
              className="text-gray-300 hover:text-white transition-colors">
              Project
            </a>
            <a
              href=""
              className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
          </div> */}

          <div className="flex md:gap-4 gap-2 items-center justify-between">
            <a href="https://github.com/junnn6ix" target="_blank">
              <i className="ri-github-fill text-[24px] hover:text-purple-700/70 duration-300 transition-all ease-in-out"></i>
            </a>
            <a
              href="https://instagram.com/neckjun__?igsh=MXVucjNjY3VkNno1ZA=="
              target="_blank">
              <i className="ri-instagram-line text-[24px] hover:text-purple-700/70 duration-300 transition-all ease-in-out "></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

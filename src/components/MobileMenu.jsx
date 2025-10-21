export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={` fixed md:hidden lg:hidden xl:hidden top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
                     transition-all duration-300 ease-in-out backdrop-blur-lg

                     ${
                       menuOpen
                         ? "h-screen opacity-100 pointer-events-auto"
                         : "h-0 opacity-0 pointer-events-none"
                     }
`}>
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-4 right-4 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu">
        <i className="ri-close-line"></i>
      </button>

      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 hover:text-purple-700/70
                    ${
                      menuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }        
            `}>
        Home
      </a>
      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 hover:text-purple-700/70
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }        
    `}>
        About
      </a>
      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 hover:text-purple-700/70
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }        
    `}>
        Projects
      </a>
      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 hover:text-purple-700/70
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }        
    `}>
        Contact
      </a>
      <div className="icons flex items-center justify-center gap-2 p-2 mt-4">
        <a href="https://github.com/junnn6ix" target="_blank">
          <i className="ri-github-fill text-3xl py-2 px-4 bg-white/10 rounded-full hover:bg-purple-700/20 duration-300 transition-all ease-in-out"></i>
        </a>
        <a
          href="https://instagram.com/neckjun__?igsh=MXVucjNjY3VkNno1ZA=="
          target="_blank">
          <i className="ri-instagram-line text-3xl py-2 px-4 bg-white/10 rounded-full hover:bg-purple-700/20 duration-300 transition-all ease-in-out "></i>
        </a>
        <a href="https://linkedin.com/in/neckjss" target="_blank">
          <i className="ri-linkedin-line text-3xl py-2 px-4 bg-white/10 rounded-full hover:bg-purple-700/20 duration-300 transition-all ease-in-out "></i>
        </a>
      </div>
    </div>
  );
};

import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="logo flex items-center justify-center gap-2">
            <img
              className="w-[34px]"
              src="https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202509/20250916004905658b9663bc5a7.jpg"
              alt=""
            />
            <a
              href="#"
              className="md:text-2xl sm:text-xl font-bold text-white hover:text-purple-700/70 duration-300 transition-all ease-in-out">
              .jun
            </a>
          </div>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 text-2xl flex md:hidden items-center justify-center"
            onClick={() => setMenuOpen((prev) => !prev)}>
            <i class="ri-menu-4-line"></i>
          </div>

          <div className="hidden md:flex lg:flex xl:flex items-center">
            <a
              href="#home"
              className="px-4 py-2 flex items-center justify-center rounded-full hover:bg-purple-950/50 transition-all duration-300 ease-in-out">
              Home
            </a>
            <a
              href="#about"
              className="px-4 py-2 flex items-center justify-center rounded-full hover:bg-purple-950/50 transition-all duration-300 ease-in-out">
              About
            </a>
            <a
              href="#projects"
              className="px-4 py-2 flex items-center justify-center rounded-full hover:bg-purple-950/50 transition-all duration-300 ease-in-out">
              Projects
            </a>
            <a
              href="#contact"
              className="px-4 py-2 flex items-center justify-center rounded-full hover:bg-purple-950/50 transition-all duration-300 ease-in-out">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

//  <a
//               href="#"
//               className="px-4 py-2 flex items-center justify-center rounded-full hover:bg-purple-950/50 transition-all duration-300 ease-in-out">
//               Home
//             </a>

{
  /* <div className="{burger_class} md:hidden flex gap-4 items-center justify-between">
                  <a href="https://github.com/junnn6ix" target="_blank">
                    <i className="ri-github-fill text-[24px] hover:text-purple-700/70 duration-300 transition-all ease-in-out"></i>
                  </a>
                  <a
                    href="https://instagram.com/neckjun__?igsh=MXVucjNjY3VkNno1ZA=="
                    target="_blank">
                    <i className="ri-instagram-line text-[24px] hover:text-purple-700/70 duration-300 transition-all ease-in-out "></i>
                  </a>
                  <a href="https://linkedin.com/in/neckjss" target="_blank">
                    <i className="ri-linkedin-line text-[24px] hover:text-purple-700/70 duration-300 transition-all ease-in-out "></i>
                  </a>
                </div> */
}

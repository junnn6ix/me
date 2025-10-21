export const Footer = () => {
  return (
    <footer className="flex items-center justify-center bg-gray-950/50">
      <div className="max-w-5xl flex items-center justify-between mx-auto px-6 md:px-4 h-fit py-6">
        <div className="flex flex-wrap md:flex-nowrap md:flex-row justify-between gap-2 items-start md:items-center">
          <div className="w-[25%] md:w-[30%] logo flex items-start flex-col flex-wrap gap-4">
            <div className="flex items-center gap-2 w-[20%]">
              <img
                className="w-[24px] md:w-[28px]"
                src="https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202509/20250916004905658b9663bc5a7.jpg"
                alt=""
              />
              <a
                href="#"
                className="md:text-xl sm:text-lg font-bold text-white hover:text-purple-700/70 duration-300 transition-all ease-in-out">
                .jun
              </a>
            </div>
            <div className="flex items-center flex-col gap-3">
              <p className="text-sm md:text-md">Sapere Aude!</p>

              {/* <div className="hidden md:hidden items-center flex-wrap gap-3">
                <a href="#">
                  <i className="ri-github-fill text-[16px] hover:text-purple-700/70 duration-300 transition-all ease-in-out"></i>
                </a>
                <a href="#">
                  <i className="ri-instagram-line text-[16px] hover:text-purple-700/70 duration-300 transition-all ease-in-out"></i>
                </a>
                <a href="#">
                  <i className="ri-whatsapp-line text-[16px] hover:text-purple-700/70 duration-300 transition-all ease-in-out"></i>
                </a>
                <a href="#">
                  <i className="ri-mail-line text-[16px] hover:text-purple-700/70 duration-300 transition-all ease-in-out"></i>
                </a>
              </div> */}
            </div>
          </div>

          <div className="w-[40%] md:w-[60%] flex items-start flex-col gap-4">
            <h3 className="font-bold">Lorem Ipsum</h3>
            <p className="font-product text-[12px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vero
              quasi praesentium reprehenderit mollitia ab, rem corrupti
              voluptatibus.
            </p>
          </div>

          <div className="flex items-center flex-col gap-4 w-[15%] md:w-[30%]">
            <h3 className="font-bold">Links</h3>
            <div className="flex items-center justify-center flex-wrap gap-3">
              <a href="https://github.com/junnn6ix" target="_blank">
                <i className="ri-github-fill text-[20px] md:text-[24px] hover:text-purple-700/70 duration-300 transition-all ease-in-out"></i>
              </a>
              <a href="https://www.instagram.com/neckjun__" target="_blank">
                <i className="ri-instagram-line text-[20px] md:text-[24px] hover:text-purple-700/70 duration-300 transition-all ease-in-out"></i>
              </a>
              <a href="https://www.linkedin.com/in/neckjss" target="_blank">
                <i className="ri-linkedin-line text-[20px] md:text-[24px] hover:text-purple-700/70 duration-300 transition-all ease-in-out"></i>
              </a>
              <a href="mailto:jjunnnsowden@gmail.com" target="_blank">
                <i className="ri-mail-line text-[20px] md:text-[24px] hover:text-purple-700/70 duration-300 transition-all ease-in-out"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

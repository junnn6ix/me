export const Footer = () => {
  return (
    <footer className="flex items-center justify-center bg-gray-950/50">
      <div className="max-w-5xl flex items-center justify-between mx-auto px-6 md:px-4 h-fit py-6">
        <div className="flex flex-wrap md:flex-nowrap md:flex-row md:justify-between gap-4 items-start md:items-center">
          <div className="w-[30%] logo flex items-start flex-col flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <img
                className="w-[28px]"
                src="https://raw.githubusercontent.com/junnn6ix/src/refs/heads/main/assets/logo.svg"
                alt=""
              />
              <a
                href="#"
                className="md:text-xl sm:text-lg font-bold text-white hover:text-purple-700/70 duration-300 transition-all ease-in-out">
                .jun
              </a>
            </div>
            <div className="flex items-center flex-col gap-3">
              <p>Sapere Aude!</p>

              <div className="flex md:hidden items-center flex-wrap gap-3">
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
              </div>
            </div>
          </div>

          <div className="w-[60%] md:w-[40%] flex items-start flex-col gap-4">
            <h3 className="font-bold">Lorem Ipsum</h3>
            <p className="font-product text-[12px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vero
              quasi praesentium reprehenderit mollitia ab, rem corrupti
              voluptatibus.
            </p>
          </div>

          <div className="hidden md:flex items-center flex-col justify-center gap-4 md:w-[30%]">
            <h3 className="font-bold">Links</h3>
            <div className="flex items-center flex-wrap gap-3">
              <a href="#">
                <i className="ri-github-fill text-[24px] hover:text-purple-700/70 duration-300 transition-all ease-in-out"></i>
              </a>
              <a href="#">
                <i className="ri-instagram-line text-[24px] hover:text-purple-700/70 duration-300 transition-all ease-in-out"></i>
              </a>
              <a href="#">
                <i className="ri-whatsapp-line text-[24px] hover:text-purple-700/70 duration-300 transition-all ease-in-out"></i>
              </a>
              <a href="#">
                <i className="ri-mail-line text-[24px] hover:text-purple-700/70 duration-300 transition-all ease-in-out"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

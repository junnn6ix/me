import ShinyText from "../../../components/ShinyText/ShinyText";
import SpotlightCard from "../../../components/SpotlightCard/SpotlightCard";
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-8 md:px-12">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <ShinyText
            text="My Projects"
            disabled={false}
            speed={3}
            className="text-blue-300 font-primary font-bold mb-8 text-3xl shiny-text"
          />

          <div className="">
            <p className="font-product mx-auto text-sm md:text-xl text-gray-300">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
              sit harum, blanditiis asperiores ducimus dicta tempora temporibus
              dignissimos voluptas provident repudiandae modi, fuga est!
            </p>

            <div className="flex items-center flex-row flex-wrap justify-center gap-4 mt-8">
              <SpotlightCard
                className="custom-spotlight-card overflow-hidden w-[85vw] md:w-[360px] cursor-pointer"
                spotlightColor="rgba(0, 229, 255, 0.2)">
                <img
                  className="w-[100%] rounded-xl mb-4"
                  src="https://raw.githubusercontent.com/junnn6ix/src/refs/heads/main/assets/dummy1.jpg"
                  alt=""
                />
                <div className="">
                  <h3 className="font-bold text-xl ls-normal mb-3">
                    Portfolio Website
                  </h3>
                  <div className="flex flex-row flex-wrap gap-2 mb-3">
                    <p className="text-sm py-1 px-3 bg-purple-950/10 border-1 border-purple-600 rounded-full ls-normal duration-300 transition-all ease-in-out hover:bg-purple-950/50 hover:border-purple-400">
                      React JS
                    </p>
                    <p className="text-sm py-1 px-3 bg-purple-950/10 border-1 border-purple-600 rounded-full ls-normal duration-300 transition-all ease-in-out hover:bg-purple-950/50 hover:border-purple-400">
                      Tailwind
                    </p>
                    <p className="text-sm py-1 px-3 bg-purple-950/10 border-1 border-purple-600 rounded-full ls-normal duration-300 transition-all ease-in-out hover:bg-purple-950/50 hover:border-purple-400">
                      Reactbits
                    </p>
                  </div>
                  <p className="font-product">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ipsa voluptatum a laudantium.
                  </p>
                  <div className="mb-2 mt-6 text-right">
                    <a
                      href="#"
                      className="ls-normal font-bold py-2 px-4 bg-purple-600 border-1 border-purple-950/20 rounded-full ls-normal duration-300 transition-all ease-in-out hover:bg-purple-600/50 hover:border-purple-950">
                      View Project
                    </a>
                  </div>
                </div>
              </SpotlightCard>
              <SpotlightCard
                className="custom-spotlight-card overflow-hidden w-[85vw] md:w-[360px] cursor-pointer"
                spotlightColor="rgba(0, 229, 255, 0.2)">
                <img
                  className="w-[100%] rounded-xl mb-4"
                  src="https://raw.githubusercontent.com/junnn6ix/src/refs/heads/main/assets/dummy2.jpg"
                  alt=""
                />
                <div className="">
                  <h3 className="font-bold text-xl ls-normal mb-3">
                    Portfolio Website
                  </h3>
                  <div className="flex flex-row flex-wrap gap-2 mb-3">
                    <p className="text-sm py-1 px-3 bg-purple-950/10 border-1 border-purple-600 rounded-full ls-normal duration-300 transition-all ease-in-out hover:bg-purple-950/50 hover:border-purple-400">
                      React JS
                    </p>
                    <p className="text-sm py-1 px-3 bg-purple-950/10 border-1 border-purple-600 rounded-full ls-normal duration-300 transition-all ease-in-out hover:bg-purple-950/50 hover:border-purple-400">
                      Tailwind
                    </p>
                    <p className="text-sm py-1 px-3 bg-purple-950/10 border-1 border-purple-600 rounded-full ls-normal duration-300 transition-all ease-in-out hover:bg-purple-950/50 hover:border-purple-400">
                      Reactbits
                    </p>
                  </div>
                  <p className="font-product">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ipsa voluptatum a laudantium.
                  </p>
                  <div className="mb-2 mt-6 text-right">
                    <a
                      href="#"
                      className="ls-normal font-bold py-2 px-4 bg-purple-600 border-1 border-purple-950/20 rounded-full ls-normal duration-300 transition-all ease-in-out hover:bg-purple-600/50 hover:border-purple-950">
                      View Project
                    </a>
                  </div>
                </div>
              </SpotlightCard>
              <SpotlightCard
                className="custom-spotlight-card overflow-hidden w-[85vw] md:w-[360px] cursor-pointer"
                spotlightColor="rgba(0, 229, 255, 0.2)">
                <img
                  className="w-[100%] rounded-xl mb-4"
                  src="https://raw.githubusercontent.com/junnn6ix/src/refs/heads/main/assets/dummy3.jpg"
                  alt=""
                />
                <div className="">
                  <h3 className="font-bold text-xl ls-normal mb-3">
                    Lorem Ipsum
                  </h3>
                  <div className="flex flex-row flex-wrap gap-2 mb-3">
                    <p className="text-sm py-1 px-3 bg-purple-950/10 border-1 border-purple-600 rounded-full ls-normal duration-300 transition-all ease-in-out hover:bg-purple-950/50 hover:border-purple-400">
                      Next JS
                    </p>
                    <p className="text-sm py-1 px-3 bg-purple-950/10 border-1 border-purple-600 rounded-full ls-normal duration-300 transition-all ease-in-out hover:bg-purple-950/50 hover:border-purple-400">
                      Tailwind
                    </p>
                    <p className="text-sm py-1 px-3 bg-purple-950/10 border-1 border-purple-600 rounded-full ls-normal duration-300 transition-all ease-in-out hover:bg-purple-950/50 hover:border-purple-400">
                      PostgreeSQL
                    </p>
                  </div>
                  <p className="font-product">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ipsa voluptatum a laudantium.
                  </p>
                  <div className="mb-2 mt-6 text-right">
                    <a
                      href="#"
                      className="ls-normal font-bold py-2 px-4 bg-purple-600 border-1 border-purple-950/20 rounded-full ls-normal duration-300 transition-all ease-in-out hover:bg-purple-600/50 hover:border-purple-950">
                      View Project
                    </a>
                  </div>
                </div>
              </SpotlightCard>
              <SpotlightCard
                className="custom-spotlight-card overflow-hidden w-[85vw] md:w-[360px] cursor-pointer"
                spotlightColor="rgba(0, 229, 255, 0.2)">
                <img
                  className="w-[100%] rounded-xl mb-4"
                  src="https://raw.githubusercontent.com/junnn6ix/src/refs/heads/main/assets/dummy1.jpg"
                  alt=""
                />
                <div className="">
                  <h3 className="font-bold text-xl ls-normal mb-3">
                    Lorem Ipsum
                  </h3>
                  <div className="flex flex-row flex-wrap gap-2 mb-3">
                    <p className="text-sm py-1 px-3 bg-purple-950/10 border-1 border-purple-600 rounded-full ls-normal duration-300 transition-all ease-in-out hover:bg-purple-950/50 hover:border-purple-400">
                      React JS
                    </p>
                    <p className="text-sm py-1 px-3 bg-purple-950/10 border-1 border-purple-600 rounded-full ls-normal duration-300 transition-all ease-in-out hover:bg-purple-950/50 hover:border-purple-400">
                      Tailwind
                    </p>
                    <p className="text-sm py-1 px-3 bg-purple-950/10 border-1 border-purple-600 rounded-full ls-normal duration-300 transition-all ease-in-out hover:bg-purple-950/50 hover:border-purple-400">
                      Reactbits
                    </p>
                  </div>
                  <p className="font-product">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ipsa voluptatum a laudantium.
                  </p>
                  <div className="mb-2 mt-6 text-right">
                    <a
                      href="#"
                      className="ls-normal font-bold py-2 px-4 bg-purple-600 border-1 border-purple-950/20 rounded-full ls-normal duration-300 transition-all ease-in-out hover:bg-purple-600/50 hover:border-purple-950">
                      View Project
                    </a>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

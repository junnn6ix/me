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
              Here are some of the projects, which are currently underway or
              have been completed. Only some projects are listed, others are
              not.
            </p>

            <div className="flex items-center flex-row flex-wrap justify-center gap-4 mt-8">
              <SpotlightCard
                className="custom-spotlight-card overflow-hidden w-[85vw] md:w-[360px] cursor-pointer"
                spotlightColor="rgba(0, 229, 255, 0.2)">
                <img
                  className="w-[100%] rounded-xl mb-4"
                  src="https://api.gmbr.web.id/image/35608"
                  alt=""
                />
                <div className="">
                  <h3 className="font-bold text-xl ls-normal mb-3">
                    Portfolio Website
                  </h3>
                  <div className="flex flex-row flex-wrap gap-2 mb-3">
                    <div className="flex items-center py-1 px-2 bg-purple-950/10 border-1 border-purple-600 rounded-full ls-normal duration-300 transition-all ease-in-out hover:bg-purple-950/50 hover:border-purple-400">
                      {/*  */}
                      <img className="w-[22px]" src="vitejs.svg" alt="" />
                      {/*  */}
                      {/* <p className="text-sm py-1 px-3 ">Vite</p> */}
                    </div>
                    <div className="flex items-center py-1 px-2 bg-purple-950/10 border-1 border-purple-600 rounded-full ls-normal duration-300 transition-all ease-in-out hover:bg-purple-950/50 hover:border-purple-400">
                      {/*  */}
                      <img className="w-[24px]" src="react-svg.svg" alt="" />
                      {/*  */}
                      {/* <p className="text-sm py-1 px-3 ">React</p> */}
                    </div>
                    <div className="flex items-center py-1 px-2 bg-purple-950/10 border-1 border-purple-600 rounded-full ls-normal duration-300 transition-all ease-in-out hover:bg-purple-950/50 hover:border-purple-400">
                      {/*  */}
                      <img className="w-[24px]" src="tailwind-svg.svg" alt="" />
                      {/*  */}
                      {/* <p className="text-sm py-1 px-3 ">Tailwind</p> */}
                    </div>
                  </div>
                  <p className="font-product">
                    Portfolio website created using Vite, React JS, TailwindCSS.
                    And using some components from ReactBits. BTW this is just
                    my fun project, don't take it seriously, chill!.
                  </p>
                  <div className="mb-2 mt-6 text-right">
                    <a
                      href="https://junnn.vercel.app"
                      target="_blank"
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
                  src="https://api.gmbr.web.id/image/35609"
                  alt=""
                />
                <div className="">
                  <h3 className="font-bold text-xl ls-normal mb-3">
                    HomeEase: Smart Home App UI
                  </h3>
                  <div className="flex flex-row flex-wrap gap-2 mb-3">
                    <div className="flex items-center py-1 px-2 bg-purple-950/10 border-1 border-purple-600 rounded-full ls-normal duration-300 transition-all ease-in-out hover:bg-purple-950/50 hover:border-purple-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="22"
                        height="22"
                        viewBox="0 0 48 48">
                        <path
                          fill="#e64a19"
                          d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"></path>
                        <path
                          fill="#7c4dff"
                          d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"></path>
                        <path
                          fill="#66bb6a"
                          d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"></path>
                        <path
                          fill="#ff7043"
                          d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"></path>
                        <circle cx="32" cy="24" r="7" fill="#29b6f6"></circle>
                      </svg>
                      {/* <p className="text-sm py-1 px-3">Figma</p> */}
                    </div>
                    {/* <p className="text-sm py-1 px-3 bg-purple-950/10 border-1 border-purple-600 rounded-full ls-normal duration-300 transition-all ease-in-out hover:bg-purple-950/50 hover:border-purple-400">
                      Tailwind
                    </p>
                    <p className="text-sm py-1 px-3 bg-purple-950/10 border-1 border-purple-600 rounded-full ls-normal duration-300 transition-all ease-in-out hover:bg-purple-950/50 hover:border-purple-400">
                      Reactbits
                    </p> */}
                  </div>
                  <p className="font-product">
                    A UI/UX project for the Final Exam assignment of the Human
                    Computer Interactions course in semester 3. A smart home
                    application prototype.
                  </p>
                  <div className="mb-2 mt-6 text-right">
                    <a
                      href="https://www.figma.com/proto/A6VMkennrAOcUGngb9z28M/HOMEEASE-UI-Prototype?page-id=0%3A1&node-id=222-2&viewport=106%2C171%2C0.25&t=ySbl3AOFPqRPsfQy-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=222%3A2"
                      target="_blank"
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
                  src="https://api.gmbr.web.id/image/35610"
                  alt=""
                />
                <div className="">
                  <h3 className="font-bold text-xl ls-normal mb-3">
                    TokoFinder Agent App UI
                  </h3>
                  <div className="flex flex-row flex-wrap gap-2 mb-3">
                    <div className="flex items-center py-1 px-2 bg-purple-950/10 border-1 border-purple-600 rounded-full ls-normal duration-300 transition-all ease-in-out hover:bg-purple-950/50 hover:border-purple-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="22"
                        height="22"
                        viewBox="0 0 48 48">
                        <path
                          fill="#e64a19"
                          d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"></path>
                        <path
                          fill="#7c4dff"
                          d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"></path>
                        <path
                          fill="#66bb6a"
                          d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"></path>
                        <path
                          fill="#ff7043"
                          d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"></path>
                        <circle cx="32" cy="24" r="7" fill="#29b6f6"></circle>
                      </svg>
                      {/* <p className="text-sm py-1 px-3">Figma</p> */}
                    </div>
                    {/* <p className="text-sm py-1 px-3 bg-purple-950/10 border-1 border-purple-600 rounded-full ls-normal duration-300 transition-all ease-in-out hover:bg-purple-950/50 hover:border-purple-400">
                      Next JS
                    </p>
                    <p className="text-sm py-1 px-3 bg-purple-950/10 border-1 border-purple-600 rounded-full ls-normal duration-300 transition-all ease-in-out hover:bg-purple-950/50 hover:border-purple-400">
                      Tailwind
                    </p>
                    <p className="text-sm py-1 px-3 bg-purple-950/10 border-1 border-purple-600 rounded-full ls-normal duration-300 transition-all ease-in-out hover:bg-purple-950/50 hover:border-purple-400">
                      PostgreeSQL
                    </p> */}
                  </div>
                  <p className="font-product">
                    A UI/UX project for the Final Exam assignment of the
                    Tech-based Entrepreneurship course in semester 3. A
                    Marketplace application prototype.
                  </p>
                  <div className="mb-2 mt-6 text-right">
                    <a
                      href="https://www.figma.com/proto/jlTC1VJEZTMyQAMBx3xH8V/TokoFinder-Agent?page-id=0%3A1&node-id=14-1200&viewport=8%2C-195%2C0.28&t=n5T9M10GpWojc5cF-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=14%3A1200"
                      target="_blank"
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
                  src="https://api.gmbr.web.id/image/35611"
                  alt=""
                />
                <div className="">
                  <h3 className="font-bold text-xl ls-normal mb-3">
                    On Progress...
                  </h3>
                  <div className="flex flex-row flex-wrap gap-2 mb-3">
                    <div className="flex items-center py-1 px-2 bg-purple-950/10 border-1 border-purple-600 rounded-full ls-normal duration-300 transition-all ease-in-out hover:bg-purple-950/50 hover:border-purple-400">
                      {/*  */}
                      {/* <img className="w-[24px]" src="loading.svg" alt="" /> */}
                      {/*  */}
                      <p className="text-sm py-1 px-3 ">Coming Soon</p>
                    </div>
                    {/* <p className="text-sm py-1 px-3 bg-purple-950/10 border-1 border-purple-600 rounded-full ls-normal duration-300 transition-all ease-in-out hover:bg-purple-950/50 hover:border-purple-400">
                      React JS
                    </p>
                    <p className="text-sm py-1 px-3 bg-purple-950/10 border-1 border-purple-600 rounded-full ls-normal duration-300 transition-all ease-in-out hover:bg-purple-950/50 hover:border-purple-400">
                      Tailwind
                    </p>
                    <p className="text-sm py-1 px-3 bg-purple-950/10 border-1 border-purple-600 rounded-full ls-normal duration-300 transition-all ease-in-out hover:bg-purple-950/50 hover:border-purple-400">
                      Reactbits
                    </p> */}
                  </div>
                  <p className="font-product">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Officia assumenda at excepturi. Meaning: Something is being
                    created and developed, come back next time.
                  </p>
                  <div className="mb-2 mt-6 text-right">
                    <a
                      href="#"
                      className="ls-normal font-bold py-2 px-4 bg-purple-600 border-1 border-purple-950/20 rounded-full ls-normal duration-300 transition-all ease-in-out hover:bg-purple-600/50 hover:border-purple-950 opacity-50 cursor-not-allowed">
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

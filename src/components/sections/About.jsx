import ShinyText from "../../../components/ShinyText/ShinyText";
import ProfileCard from "../../../components/ProfileCard/ProfileCard";
import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 px-8 md:px-12">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <ShinyText
            text="About Me"
            disabled={false}
            speed={3}
            className="text-blue-300 font-primary font-bold mb-8 text-3xl shiny-text"
          />

          <div className="">
            <p className="font-product mx-auto text-sm md:text-xl text-gray-300">
              They can call me Ajun, Jun, or Karbo or whatever, you can call me
              anything you want. I'm 20 years young, and my birthday is on July
              6th. I'm currently a sixth-semester student studying Informatics
              Engineering at Sekolah Tinggi Teknologi Cipasung (STTC) in
              Tasikmalaya. I'm also a proud resident of Tasikmalaya!
            </p>

            <div className="flex items-center justify-between mt-8 w-full gap-8 flex-col md:flex-row sm:gap-12">
              <div className="">
                <ProfileCard
                  name="Ahmad Fawazi"
                  title="Web Developer"
                  handle="neckjun__"
                  status="Sleep"
                  contactText="Follow Me"
                  avatarUrl="https://raw.githubusercontent.com/junnn6ix/src/refs/heads/main/assets/profile.png"
                  miniAvatarUrl="https://raw.githubusercontent.com/junnn6ix/src/refs/heads/main/assets/profile-square.jpg"
                  // avatarUrl="/assets/img/profile.png"
                  // miniAvatarUrl="/assets/img/profile_square.jpg"
                  // iconUrl="/assets/img/profile-square.jpg"
                  showUserInfo={true}
                  enableTilt={true}
                  onContactClick={() =>
                    window.open(
                      "https://instagram.com/neckjun__?igsh=MXVucjNjY3VkNno1ZA==",
                      "_blank"
                    )
                  }
                />
              </div>
              <div className="w-full">
                <h2 className="font-bold mx-auto text-sm md:text-xl text-gray-300 mb-3">
                  Things I passionate about
                </h2>
                <p className="mb-6 font-product text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                  dolorum porro ex!
                </p>
                <div className="w-full flex items-center gap-3 mb-6 flex-row md:flex-wrap">
                  <h4 className="py-2 px-4 bg-purple-950/10 border-1 border-purple-600 rounded-full font-bold ls-normal duration-300 transition-all ease-in-out hover:bg-purple-950/50 hover:border-purple-400">
                    WebDev
                  </h4>
                  <h4 className="py-2 px-4 bg-purple-950/10 border-1 border-purple-600 rounded-full font-bold ls-normal duration-300 transition-all ease-in-out hover:bg-purple-950/50 hover:border-purple-400">
                    Front End
                  </h4>
                  <h4 className="py-2 px-4 bg-purple-950/10 border-1 border-purple-600 rounded-full font-bold ls-normal duration-300 transition-all ease-in-out hover:bg-purple-950/50 hover:border-purple-400">
                    Back End
                  </h4>
                  <h4 className="py-2 px-4 bg-purple-950/10 border-1 border-purple-600 rounded-full font-bold ls-normal duration-300 transition-all ease-in-out hover:bg-purple-950/50 hover:border-purple-400">
                    UI/UX
                  </h4>
                </div>
                <h2 className="font-bold mx-auto text-sm md:text-xl text-gray-300 mb-6">
                  Things what I learn
                </h2>
                <div className="w-full mx-auto grid grid-cols-2 grid-rows-4 gap-2">
                  <div className="flex items-center justify-between gap-4 py-2 px-4 rounded-2xl border-1 border-gray-500 duration-300 transition-all ease-in-out hover:border-purple-700/50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="32"
                      height="32"
                      viewBox="0 0 48 48">
                      <path
                        fill="#E65100"
                        d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
                      <path
                        fill="#FF6D00"
                        d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
                      <path
                        fill="#FFF"
                        d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path>
                      <path
                        fill="#EEE"
                        d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
                    </svg>
                    <p className="font-product mx-auto text-sm md:text-xl text-gray-300">
                      HTML
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-4 py-2 px-4 rounded-2xl border-1 border-gray-500 duration-300 transition-all ease-in-out hover:border-purple-700/50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="32"
                      height="32"
                      viewBox="0 0 48 48">
                      <path
                        fill="#80deea"
                        d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"></path>
                      <path
                        fill="#80deea"
                        d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"></path>
                      <path
                        fill="#80deea"
                        d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"></path>
                      <circle cx="24" cy="24" r="4" fill="#80deea"></circle>
                    </svg>
                    <p className="font-product mx-auto text-sm md:text-xl text-gray-300">
                      REACT
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-4 py-2 px-4 rounded-2xl border-1 border-gray-500 duration-300 transition-all ease-in-out hover:border-purple-700/50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="32"
                      height="32"
                      viewBox="0 0 48 48">
                      <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
                      <path
                        fill="#000001"
                        d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path>
                    </svg>
                    <p className="font-product mx-auto text-sm md:text-xl text-gray-300">
                      JS
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-4 py-2 px-4 rounded-2xl border-1 border-gray-500 duration-300 transition-all ease-in-out hover:border-purple-700/50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="32"
                      height="32"
                      viewBox="0 0 48 48">
                      <path
                        fill="#0277BD"
                        d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
                      <path
                        fill="#039BE5"
                        d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
                      <path
                        fill="#FFF"
                        d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path>
                      <path
                        fill="#EEE"
                        d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
                    </svg>
                    <p className="font-product mx-auto text-sm md:text-xl text-gray-300">
                      CSS
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-4 py-2 px-4 rounded-2xl border-1 border-gray-500 duration-300 transition-all ease-in-out hover:border-purple-700/50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="32"
                      height="32"
                      viewBox="0 0 48 48">
                      <path
                        fill="#00acc1"
                        d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"></path>
                    </svg>
                    <p className="font-product mx-auto text-sm md:text-xl text-gray-300">
                      TAILWIND
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-4 py-2 px-4 rounded-2xl border-1 border-gray-500 duration-300 transition-all ease-in-out hover:border-purple-700/50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="32"
                      height="32"
                      viewBox="0 0 48 48">
                      <linearGradient
                        id="NRNx2IPDe7PJlJvrxOKgWa_MWiBjkuHeMVq_gr1"
                        x1="24"
                        x2="24"
                        y1="43.734"
                        y2="4.266"
                        gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="#0a070a"></stop>
                        <stop offset=".465" stop-color="#2b2b2b"></stop>
                        <stop offset="1" stop-color="#4b4b4b"></stop>
                      </linearGradient>
                      <circle
                        cx="24"
                        cy="24"
                        r="19.734"
                        fill="url(#NRNx2IPDe7PJlJvrxOKgWa_MWiBjkuHeMVq_gr1)"></circle>
                      <rect
                        width="3.023"
                        height="15.996"
                        x="15.992"
                        y="16.027"
                        fill="#fff"></rect>
                      <linearGradient
                        id="NRNx2IPDe7PJlJvrxOKgWb_MWiBjkuHeMVq_gr2"
                        x1="30.512"
                        x2="30.512"
                        y1="33.021"
                        y2="18.431"
                        gradientUnits="userSpaceOnUse">
                        <stop
                          offset=".377"
                          stop-color="#fff"
                          stop-opacity="0"></stop>
                        <stop
                          offset=".666"
                          stop-color="#fff"
                          stop-opacity=".3"></stop>
                        <stop offset=".988" stop-color="#fff"></stop>
                      </linearGradient>
                      <rect
                        width="2.953"
                        height="14.59"
                        x="29.035"
                        y="15.957"
                        fill="url(#NRNx2IPDe7PJlJvrxOKgWb_MWiBjkuHeMVq_gr2)"></rect>
                      <linearGradient
                        id="NRNx2IPDe7PJlJvrxOKgWc_MWiBjkuHeMVq_gr3"
                        x1="22.102"
                        x2="36.661"
                        y1="21.443"
                        y2="40.529"
                        gradientUnits="userSpaceOnUse">
                        <stop offset=".296" stop-color="#fff"></stop>
                        <stop
                          offset=".521"
                          stop-color="#fff"
                          stop-opacity=".5"></stop>
                        <stop
                          offset=".838"
                          stop-color="#fff"
                          stop-opacity="0"></stop>
                      </linearGradient>
                      <polygon
                        fill="url(#NRNx2IPDe7PJlJvrxOKgWc_MWiBjkuHeMVq_gr3)"
                        points="36.781,38.094 34.168,39.09 15.992,16.027 19.508,16.027"></polygon>
                    </svg>
                    <p className="font-product mx-auto text-sm md:text-xl text-gray-300">
                      NEXT
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-4 py-2 px-4 rounded-2xl border-1 border-gray-500 duration-300 transition-all ease-in-out hover:border-purple-700/50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="32"
                      height="32"
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
                    <p className="font-product mx-auto text-sm md:text-xl text-gray-300">
                      FIGMA
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-4 py-2 px-4 rounded-2xl border-1 border-gray-500 duration-300 transition-all ease-in-out hover:border-purple-700/50">
                    <i className="ri-more-fill text-2xl"></i>
                    <p className="font-product mx-auto text-sm md:text-xl text-gray-300">
                      Soon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

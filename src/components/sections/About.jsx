import ShinyText from "../../../components/ShinyText/ShinyText";
import ProfileCard from "../../../components/ProfileCard/ProfileCard";
import { RevealOnScroll } from "../RevealOnScroll";
import Aurora from "../../../components/Aurora/Aurora";

export const About = () => {
  return (
    <>
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
                People call me Ajun, Jun, or Karbo or whatever, you can call me
                anything you want. I'm 20 YO. I'm currently a sixth-semester
                student studying Informatics Engineering at Sekolah Tinggi
                Teknologi Cipasung (STTC) in Tasikmalaya. I'm also a proud
                resident of Tasikmalaya!
              </p>

              <div className="flex items-center justify-between mt-8 w-full gap-8 flex-col md:flex-row sm:gap-12">
                <div className="">
                  <ProfileCard
                    name="Ahmad Fawazi"
                    title="Not a Web Developer"
                    handle="neckjun__"
                    status="Sleep"
                    contactText="Follow Me"
                    avatarUrl="20250916_073917.png"
                    miniAvatarUrl="https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202509/202509160046461461491656bf6_lite.jpg"
                    // avatarUrl="/assets/img/profile.png"
                    // miniAvatarUrl="/assets/img/profile_square.jpg"
                    // iconUrl="/assets/img/profile-square.jpg"
                    showUserInfo={true}
                    enableTilt={false}
                    onContactClick={() =>
                      window.open(
                        "https://instagram.com/neckjun__?igsh=MXVucjNjY3VkNno1ZA==",
                        "_blank"
                      )
                    }
                  />
                </div>
                <div className="w-full">
                  <h2 className="font-bold mx-auto text-md md:text-xl text-gray-300 mb-6">
                    What's I Learn/ed
                  </h2>
                  <div className="w-full mx-auto flex flex-row flex-wrap gap-2">
                    <div className="flex items-center justify-center py-[0.2rem] px-4 rounded-full border-1 border-gray-500 duration-300 transition-all ease-in-out hover:border-purple-700/50">
                      <i class="ri-html5-fill text-[1.6rem] text-orange-400"></i>
                    </div>
                    <div className="flex items-center justify-center gap-4 py-2 px-4 rounded-2xl border-1 border-gray-500 duration-300 transition-all ease-in-out hover:border-purple-700/50">
                      <i className="ri-reactjs-fill text-2xl text-blue-300"></i>
                    </div>
                    <div className="flex items-center justify-center py-2 px-4 rounded-full border-1 border-gray-500 duration-300 transition-all ease-in-out hover:border-purple-700/50">
                      <i className="ri-javascript-fill text-2xl text-yellow-300"></i>
                    </div>
                    <div className="flex items-center justify-between gap-4 py-2 px-4 rounded-2xl border-1 border-gray-500 duration-300 transition-all ease-in-out hover:border-purple-700/50">
                      <i className="ri-css3-fill text-2xl text-blue-500"></i>
                    </div>
                    <div className="flex items-center justify-between gap-4 py-2 md:py-4 px-4 rounded-2xl border-1 border-gray-500 duration-300 transition-all ease-in-out hover:border-purple-700/50">
                      <img src="kotlin.svg" alt="Kotlin" className="w-20" />
                    </div>
                    <div className="flex items-center gap-4 py-1 md:py-4 px-4 rounded-2xl border-1 border-gray-500 duration-300 transition-all ease-in-out hover:border-purple-700/50">
                      <img src="tailwind.png" alt="Tailwind" className="w-30" />
                    </div>
                    <div className="flex items-center justify-center gap-4 py-2 px-4 rounded-full border-1 border-gray-500 duration-300 transition-all ease-in-out hover:border-purple-700/50">
                      <i class="ri-nextjs-fill text-3xl text-white"></i>
                    </div>
                    <div className="flex items-center justify-center gap-4 py-2 px-4 rounded-2xl border-1 border-gray-500 duration-300 transition-all ease-in-out hover:border-purple-700/50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="24"
                        height="24"
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
    </>
  );
};

import RotatingText from "../../../components/RotatingText/RotatingText";
import ShinyText from "../../../components/ShinyText/ShinyText";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-start relative mx-auto">
      <div className="text-center z-10 px-4 mx-auto">
        <div className="flex flex-col items-center justify-center gap-2 text-center mx-auto">
          {/* <h1 className=" font-primary text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-900 to-blue-300 bg-clip-text text-transparent leading-right">
            Hi, I'm Ahmad Fawazi!
          </h1> */}
          <ShinyText
            text="Hi, I'm Ahmad Fawazi, I'm a"
            disabled={false}
            speed={3}
            className="text-blue-300 text-center font-primary font-bold mb-6 text-5xl md:text-7xl shiny-text w-[80%] md:w-[90%]"
          />
          <RotatingText
            texts={[
              "Web Developer",
              "UI/UX Designer",
              "Informatics",
              "Engineer",
              "Hello World",
            ]}
            mainClassName="-mt-4 font-primary font-bold text-5xl md:text-7xl text-white overflow-hidden justify-center"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>

        <p className="text-center mx-auto font-product mt-6 w-[90%] md:w-[50%] text-sm md:text-xl text-gray-300">
          Usually called Jun. I'm currently studying Informatics at STT
          Cipasung. I'm into a bunch of different things, like web programming,
          UI/UX, and more.
        </p>
      </div>
    </section>
  );
};

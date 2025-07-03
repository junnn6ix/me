import ShinyText from "../../../components/ShinyText/ShinyText";
import Masonry from "../../../components/Masonry/Masonry";
import { RevealOnScroll } from "../RevealOnScroll";

export const Gallery = () => {
  const items = [
    {
      id: "1",
      img: "https://raw.githubusercontent.com/junnn6ix/src/refs/heads/main/assets/img1.jpg",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "2",
      img: "https://raw.githubusercontent.com/junnn6ix/src/refs/heads/main/assets/img2.jpg",
      url: "https://example.com/one",
      height: 200,
    },
    {
      id: "3",
      img: "https://raw.githubusercontent.com/junnn6ix/src/refs/heads/main/assets/img3.jpg",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "4",
      img: "https://raw.githubusercontent.com/junnn6ix/src/refs/heads/main/assets/img4.jpg",
      url: "https://example.com/one",
      height: 600,
    },
    {
      id: "5",
      img: "https://raw.githubusercontent.com/junnn6ix/src/refs/heads/main/assets/img5.jpg",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "6",
      img: "https://raw.githubusercontent.com/junnn6ix/src/refs/heads/main/assets/img6.jpg",
      url: "https://example.com/one",
      height: 350,
    },
    {
      id: "7",
      img: "https://raw.githubusercontent.com/junnn6ix/src/refs/heads/main/assets/img7.jpg",
      url: "https://example.com/one",
      height: 300,
    },
    {
      id: "8",
      img: "https://raw.githubusercontent.com/junnn6ix/src/refs/heads/main/assets/img8.jpg",
      url: "https://example.com/one",
      height: 200,
    },
    {
      id: "9",
      img: "https://raw.githubusercontent.com/junnn6ix/src/refs/heads/main/assets/img9.jpg",
      url: "https://example.com/one",
      height: 300,
    },
    {
      id: "10",
      img: "https://raw.githubusercontent.com/junnn6ix/src/refs/heads/main/assets/img10.jpg",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "11",
      img: "https://raw.githubusercontent.com/junnn6ix/src/refs/heads/main/assets/img11.jpg",
      url: "https://example.com/one",
      height: 300,
    },
    {
      id: "12",
      img: "https://raw.githubusercontent.com/junnn6ix/src/refs/heads/main/assets/img12.jpg",
      url: "https://example.com/one",
      height: 200,
    },
    {
      id: "13",
      img: "https://raw.githubusercontent.com/junnn6ix/src/refs/heads/main/assets/img13.jpg",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "14",
      img: "https://raw.githubusercontent.com/junnn6ix/src/refs/heads/main/assets/img14.jpg",
      url: "https://example.com/one",
      height: 300,
    },
    {
      id: "15",
      img: "https://raw.githubusercontent.com/junnn6ix/src/refs/heads/main/assets/img15.jpg",
      url: "https://example.com/one",
      height: 300,
    },
    // {
    //   id: "16",
    //   img: "/assets/img/gallery/img16.jpg",
    //   url: "https://example.com/one",
    //   height: 500,
    // },
    // {
    //   id: "17",
    //   img: "/assets/img/gallery/img17.jpg",
    //   url: "https://example.com/one",
    //   height: 350,
    // },
    // {
    //   id: "18",
    //   img: "/assets/img/gallery/img18.jpg",
    //   url: "https://example.com/one",
    //   height: 350,
    // },
    // {
    //   id: "19",
    //   img: "/assets/img/gallery/img19.jpg",
    //   url: "https://example.com/one",
    //   height: 300,
    // },
  ];

  return (
    <section
      id="gallery"
      className=" min-h-screen flex items-start justify-center mt-20 mb-12 px-8 md:px-12 ">
      <div className="max-w-3xl mx-auto px-4">
        <ShinyText
          text="My Gallery"
          disabled={false}
          speed={3}
          className="text-blue-300 font-primary font-bold mb-8 text-3xl shiny-text"
        />

        <div className="">
          <p className="font-product mx-auto text-sm md:text-xl text-gray-300 mb-6">
            I'm an informatics student, but I'm also a nature lover and
            activist. I'm so excited to share some of the precious moments from
            my life that I captured. Follow me if you want to see more!
          </p>
          <Masonry
            items={items}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={true}
          />
        </div>
      </div>
    </section>
  );
};

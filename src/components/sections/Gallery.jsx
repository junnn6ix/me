import ShinyText from "../../../components/ShinyText/ShinyText";
import Masonry from "../../../components/Masonry/Masonry";
import { RevealOnScroll } from "../RevealOnScroll";

export const Gallery = () => {
  const items = [
    {
      id: "1",
      img: "https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202507/20250703220427414c7411de4e4.jpg",
      url: "https://www.instagram.com/p/DJeR42xvtTr/?igsh=MTZ6Y2l4OXJ2OXpudw==",
      height: 400,
    },
    {
      id: "2",
      img: "https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202507/2025070322155668233b63bfba4.jpg",
      url: "https://example.com/one",
      height: 200,
    },
    {
      id: "3",
      img: "https://api.gmbr.web.id/image/35477",
      url: "https://instagram.com/p/DCyXryXPL5r/?img_index=14&igsh=dW1odmtuZGFwYzg5",
      height: 400,
    },
    {
      id: "4",
      img: "https://api.gmbr.web.id/image/35478",
      url: "https://instagram.com/p/DCyXryXPL5r/?img_index=14&igsh=dW1odmtuZGFwYzg5",
      height: 600,
    },
    {
      id: "5",
      img: "https://api.gmbr.web.id/image/35480",
      url: "https://instagram.com/neckjun__",
      height: 400,
    },
    {
      id: "6",
      img: "https://api.gmbr.web.id/image/35481",
      url: "https://instagram.com/neckjun__",
      height: 350,
    },
    {
      id: "7",
      img: "https://api.gmbr.web.id/image/35482",
      url: "https://www.instagram.com/p/C6nJoeoSOqx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      height: 300,
    },
    {
      id: "8",
      img: "https://api.gmbr.web.id/image/35483",
      url: "https://www.instagram.com/p/C6nJoeoSOqx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      height: 200,
    },
    {
      id: "9",
      img: "https://api.gmbr.web.id/image/35484",
      url: "https://www.instagram.com/p/DCyXryXPL5r/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
      height: 300,
    },
    {
      id: "10",
      img: "https://api.gmbr.web.id/image/35485",
      url: "https://www.instagram.com/p/DJjbcTNPY_f/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
      height: 400,
    },
    {
      id: "11",
      img: "https://api.gmbr.web.id/image/35486",
      url: "https://www.instagram.com/p/DJeR42xvtTr/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
      height: 300,
    },
    {
      id: "12",
      img: "https://api.gmbr.web.id/image/35487",
      url: "https://instagram.com/neckjun__",
      height: 200,
    },
    {
      id: "13",
      img: "https://api.gmbr.web.id/image/35488",
      url: "https://instagram.com/neckjun__",
      height: 400,
    },
    {
      id: "14",
      img: "https://api.gmbr.web.id/image/35489",
      url: "https://instagram.com/neckjun__",
      height: 300,
    },
    {
      id: "15",
      img: "https://api.gmbr.web.id/image/35490",
      url: "https://www.instagram.com/p/DBD-wjiPybF/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
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

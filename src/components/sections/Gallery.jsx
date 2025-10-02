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
      url: "https://instagram.com/neckjun__",
      height: 200,
    },
    {
      id: "3",
      img: "https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202507/20250704040639321ec3893dafc.jpg",
      url: "https://www.instagram.com/p/DCyXryXPL5r/?img_index=14&igsh=dW1odmtuZGFwYzg5",
      height: 400,
    },
    {
      id: "4",
      img: "https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202507/20250704040729829dea688f85e.jpg",
      url: "https://instagram.com/p/DCyXryXPL5r/?img_index=14&igsh=dW1odmtuZGFwYzg5",
      height: 600,
    },
    {
      id: "5",
      img: "https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202507/20250704040759434fe84cb7060.jpg",
      url: "https://instagram.com/neckjun__",
      height: 400,
    },
    {
      id: "6",
      img: "https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202507/20250704040831024aaaf506cc0.jpg",
      url: "https://instagram.com/neckjun__",
      height: 350,
    },
    {
      id: "7",
      img: "https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202507/20250704040905116c23a676cae.jpg",
      url: "https://www.instagram.com/p/C6nJoeoSOqx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      height: 300,
    },
    {
      id: "8",
      img: "https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202507/202507040409463195dac9d5752.jpg",
      url: "https://www.instagram.com/p/C6nJoeoSOqx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      height: 200,
    },
    {
      id: "9",
      img: "https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202507/20250704040952449656f98e58b.jpg",
      url: "https://www.instagram.com/p/DCyXryXPL5r/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
      height: 300,
    },
    {
      id: "10",
      img: "https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202507/20250704040958098c55b922823.jpg",
      url: "https://www.instagram.com/p/DJjbcTNPY_f/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
      height: 400,
    },
    {
      id: "11",
      img: "https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202507/2025070404100511941aef591cf.jpg",
      url: "https://www.instagram.com/p/DJeR42xvtTr/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
      height: 300,
    },
    {
      id: "12",
      img: "https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202507/202507040410118879ba7cd0602.jpg",
      url: "https://instagram.com/neckjun__",
      height: 200,
    },
    {
      id: "13",
      img: "https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202507/20250704041018498b5af0c711b.jpg",
      url: "https://instagram.com/neckjun__",
      height: 400,
    },
    {
      id: "14",
      img: "https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202507/2025070404102475522d4342d01.jpg",
      url: "https://instagram.com/neckjun__",
      height: 300,
    },
    {
      id: "15",
      img: "https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202507/2025070404103157696ee275594.jpg",
      url: "https://www.instagram.com/p/DBD-wjiPybF/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      height: 300,
    },
    {
      id: "16",
      img: "https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202510/2025100202092115764e18b5854.jpg",
      url: "",
      height: 300,
    },
    {
      id: "17",
      img: "https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202510/2025100202095820877d5ec5690.jpg",
      url: "",
      height: 400,
    },
    {
      id: "18",
      img: "https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202510/2025100202123427755d963cc78.jpg",
      url: "",
      height: 260,
    },
    {
      id: "19",
      img: "https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202510/2025100202124806487565c2f65_lite.jpg",
      url: "",
      height: 640,
    },
    {
      id: "20",
      img: "https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202510/20251002021523091977f3db990.jpg",
      url: "",
      height: 400,
    },
    {
      id: "21",
      img: "https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202510/2025100202153421843f1bb9202_lite.jpg",
      url: "",
      height: 360,
    },
    {
      id: "22",
      img: "https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202510/20251002022954544d6547c8083.jpg",
      url: "",
      height: 460,
    },
    {
      id: "23",
      img: "https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202510/20251002022758908179ee8b3b0.jpg",
      url: "",
      height: 360,
    },
    {
      id: "24",
      img: "https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202510/2025100202312661517e699bd96.jpg",
      url: "",
      height: 380,
    },
    {
      id: "25",
      img: "https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202510/2025100202331331849f71b6c07_lite.jpg",
      url: "",
      height: 380,
    },
    {
      id: "26",
      img: "https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202510/20251002024111774b3ac6affe4_lite.jpg",
      url: "",
      height: 200,
    },
    {
      id: "27",
      img: "https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202510/202510020243251894d4e5005e8.jpg",
      url: "",
      height: 400,
    },
    {
      id: "28",
      img: "https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202510/202510020244339508caaaf1a40_lite.jpg",
      url: "",
      height: 260,
    },
    {
      id: "29",
      img: "https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202510/202510020246450263e474f856f.jpg",
      url: "",
      height: 200,
    },
    {
      id: "30",
      img: "https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202510/20251002025154052a96ca0ad8c.jpg",
      url: "",
      height: 200,
    },
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

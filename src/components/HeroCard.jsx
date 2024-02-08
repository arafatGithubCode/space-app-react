import { FaSpaceAwesome } from "react-icons/fa6";
import { GiSpaceSuit } from "react-icons/gi";
import { RiSpaceShipLine } from "react-icons/ri";
import wave from "../assets/wave Gif.gif";

const HeroCard = () => {
  const serviceData = [
    {
      title: "HST",
      content: "300-1500km",
      desc: "Used for astronomical observations, capturing stunning images of the universe.",
      icon: <FaSpaceAwesome />,
      aosDelay: "300",
    },
    {
      title: "ISS",
      content: "500-1500km",
      desc: " it's a habitable artificial satellite orbiting Earth and serves as a space environment research laboratory",
      icon: <GiSpaceSuit />,
      aosDelay: "500",
    },
    {
      title: "GPS",
      content: "300-1500km",
      desc: "Part of the Global Positioning System (GPS) used for navigation.",
      icon: <RiSpaceShipLine />,
      aosDelay: "700",
    },
  ];
  return (
    <section className="min-h-[400px] bg-primary z-30">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 container z-0">
        {serviceData &&
          serviceData.map((data, index) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={index}
                className="bg-sky-900/60 backdrop-blur-sm text-white max-w-[400px] mx-auto py-7 px-4 rounded-lg flex flex-col items-center justify-center gap-3 z-20"
              >
                <span className="text-5xl">{data.icon}</span>
                <h2 className="text-2xl">{data.title}</h2>
                <h3 className="text-xl">{data.content}</h3>
                <p className="text-sm">{data.desc}</p>
              </div>
            );
          })}
      </div>
      <img
        className="w-full h-[200px] object-cover mix-blend-screen translate-y-[-100px] z-0"
        src={wave}
        alt="Imag"
      />
    </section>
  );
};

export default HeroCard;

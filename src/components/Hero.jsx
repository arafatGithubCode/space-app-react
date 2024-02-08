import moonSurface from "../assets/moon-surface-hd.png";

const Hero = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center bg-black/20 relative z-0">
      <div className="text-white container space-y-5">
        <h1 className="text-5xl font-bold" data-aos="fade-up">
          ORBITE THE <br /> EARTH
        </h1>
        <p
          className="max-w-lg text-left"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ea
          dolorem eius accusamus beatae. Nulla quis beatae quo, possimus tempora
          similique dignissimos repellat aperiam veniam culpa consequatur
          repudiandae asperiores saepe.
        </p>
        <button
          className="bg-teal-500 rounded-lg py-1 px-2 font-semibold hover:bg-pink-500 transition duration-200 ease-in-out"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Learn More
        </button>
      </div>
      <div className="absolute bottom-0 right-0">
        <img
          src={moonSurface}
          alt="Image"
          className="brightness-50 w-full z-10"
        />
      </div>
      <div className="absolute bottom-0 z-30 right-0 w-full bg-gradient-to-b from-transparent from-10% to-primary to-90% h-[20px] sm:h-[50px] md:[60px]"></div>
    </main>
  );
};

export default Hero;

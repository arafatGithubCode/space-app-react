import satellite1 from "../assets/satellite1.jpg";
import satellite2 from "../assets/satellite2.jpg";

const RapidsCat = () => {
  return (
    <section className="bg-primary">
      <div className="container  grid sm:grid-cols-2 items-center">
        <img
          className="rounded-lg"
          src={satellite1}
          alt="Image"
          data-aos="zoom-in"
        />
        <div className="space-y-3 border-r-2 border-b-2 border-teal-500 p-3">
          <p
            className="text-teal-500 text-lg uppercase"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            our mission
          </p>
          <h1
            className="text-5xl text-white"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            RAPIDCAST
          </h1>
          <p className="text-white" data-aos="fade-up" data-aos-delay="400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            molestiae reprehenderit expedita corporis, non doloremque.
            Consequatur consectetur quisquam qui sunt. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Eos molestiae reprehenderit
            expedita corporis, non doloremque. Consequatur consectetur quisquam
            qui sunt.
          </p>
          <button
            className="bg-teal-500 rounded-lg py-1 px-2 font-semibold hover:bg-pink-500 transition duration-200 ease-in-out hover:text-white"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="container  grid sm:grid-cols-2 items-center mt-10">
        <div className="space-y-3 border-l-2 border-b-2 border-teal-500 p-3">
          <p
            className="text-teal-500 text-lg uppercase"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            our mission
          </p>
          <h1
            className="text-5xl text-white"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            RAPIDCAST
          </h1>
          <p className="text-white" data-aos="fade-up" data-aos-delay="400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            molestiae reprehenderit expedita corporis, non doloremque.
            Consequatur consectetur quisquam qui sunt. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Eos molestiae reprehenderit
            expedita corporis, non doloremque. Consequatur consectetur quisquam
            qui sunt.
          </p>
          <button
            className="bg-teal-500 rounded-lg py-1 px-2 font-semibold hover:bg-pink-500 transition duration-200 ease-in-out hover:text-white"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Learn More
          </button>
        </div>
        <img
          className="rounded-lg mt-5"
          src={satellite2}
          alt="Image"
          data-aos="zoom-in"
        />
      </div>
    </section>
  );
};

export default RapidsCat;

import bgVideo from "./assets/earth-bg.mp4";
import Header from "./layouts/Header";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Hero from "./components/Hero";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });
  return (
    <>
      <div className="h-[700px] relative">
        <video
          autoPlay
          muted
          loop
          className="fixed top-0 left-0 object-cover w-full z-[-1] h-[700px]"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <Header />
        <Hero />
      </div>
    </>
  );
}

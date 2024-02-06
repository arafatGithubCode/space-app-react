import { BrowserRouter } from "react-router-dom";
import bgVideo from "./assets/earth-bg.mp4";
import Header from "./layouts/Header";

export default function App() {
  return (
    <BrowserRouter>
      <div className="h-[700px] relative">
        <video
          autoPlay
          muted
          loop
          className="fixed top-0 left-0 object-cover w-full z-[-1] h-[700px]"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
      </div>
      <Header />
    </BrowserRouter>
  );
}

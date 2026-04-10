import HeroSection from "./components/HeroScetion";
import Navigation from "./components/NavBar";
import Scroll from "./components/Scroll";

const page = () => {
  return (
    <div className="w-full bg-neutral-950">
      <Navigation />
      <HeroSection />
      <Scroll />
    </div>
  );
};

export default page;

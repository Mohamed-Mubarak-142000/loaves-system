import CreateClock from "./create-clock";
import InfoContentHero from "./info-content-hero";

const Hero = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col gap-5 bg-image">
      <div className="relative flex items-center justify-around w-full">
        <CreateClock />
      </div>
      <InfoContentHero />
    </div>
  );
};

export default Hero;

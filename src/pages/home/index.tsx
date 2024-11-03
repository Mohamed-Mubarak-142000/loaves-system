import ContainerLogin from "@/auth/components/container-login";
import AllSubscribe from "@/components/all-subscribe";
import CardsInfo from "@/components/cards-info";
import Hero from "@/components/hero";
import WhoAreWe from "@/components/who-are-we";

const Home = () => {
  return (
    <div className="min-h-[100vh]">
      <Hero />
      <CardsInfo />
      <WhoAreWe />
      <ContainerLogin />
      <AllSubscribe />
    </div>
  );
};

export default Home;

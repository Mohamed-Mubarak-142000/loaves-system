import ContainerLogin from "@/auth/components/container-login";
import AllSubscribe from "@/components/all-subscribe";
import CardsInfo from "@/components/cards-info";
import Hero from "@/components/hero";
import WhoAreWe from "@/components/who-are-we";
import ContainerContactUs from "@/contact-us/components/container-contact-us";

const Home = () => {
  return (
    <div className="min-h-[100vh]">
      <Hero />
      <CardsInfo />
      <WhoAreWe />
      <ContainerLogin />
      <AllSubscribe />
      <ContainerContactUs />
    </div>
  );
};

export default Home;

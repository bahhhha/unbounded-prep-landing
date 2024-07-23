import { Header } from "../../sections/home/Header";
import { Hero } from "../../sections/home/Hero";
import { HowItWorks } from "../../sections/home/HowItWorks";
import { FAQ } from "../../sections/home/FAQ";
import { Services } from "../../sections/home/Services";
import { Fade, Slide } from "react-awesome-reveal";
import { HomeGate } from "../../features/get-mentors/model";
import { useGate } from "effector-react";
import { Mentors } from "../../sections/home/Mentors";
import { Footer } from "../../sections/home/Footer";

const HomePage = (): JSX.Element => {
  useGate(HomeGate);
  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      <div className="flex flex-col w-4/5 items-center">
        <Fade triggerOnce>
          <Header />
          <Hero />
        </Fade>
        <Slide triggerOnce>
          <div id="how-it-works">
            <HowItWorks />
          </div>
        </Slide>
        <Slide triggerOnce>
          <div id="services">
            <Services />
          </div>
        </Slide>
        <Fade triggerOnce>
          <div id="mentors">
            <Mentors />
          </div>
        </Fade>
        <FAQ />
        <div id="contact">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

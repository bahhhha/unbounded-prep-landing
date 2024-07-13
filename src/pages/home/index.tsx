import { Header } from "../../sections/home/Header";
import { Hero } from "../../sections/home/Hero";
import { HowItWorks } from "../../sections/home/HowItWorks";
import { FAQ } from "../../sections/home/FAQ";
import { Services } from "../../sections/home/Services";
import { Fade, Slide } from "react-awesome-reveal";

const HomePage = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-4/5 items-center">
        <Fade>
          <Header />

          <Hero />
        </Fade>
        <Slide>
          <HowItWorks />
        </Slide>
        <Slide>
          <Services />
        </Slide>

        <FAQ />
      </div>
    </div>
  );
};

export default HomePage;

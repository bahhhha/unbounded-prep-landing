import { Suspense } from "react";
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
import { Spin } from "antd";

const LoadingFallback = () => (
  <div className="flex justify-center items-center h-96">
    <Spin size="large" />
  </div>
);

const HomePage = (): JSX.Element => {
  useGate(HomeGate);

  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      <div className="flex flex-col w-4/5 items-center">
        <Fade triggerOnce>
          <Suspense fallback={<LoadingFallback />}>
            <Header />
            <Hero />
          </Suspense>
        </Fade>
        <Slide triggerOnce>
          <Suspense fallback={<LoadingFallback />}>
            <div id="how-it-works">
              <HowItWorks />
            </div>
          </Suspense>
        </Slide>
        <Slide triggerOnce>
          <Suspense fallback={<LoadingFallback />}>
            <div id="services">
              <Services />
            </div>
          </Suspense>
        </Slide>
        <Fade triggerOnce>
          <Suspense fallback={<LoadingFallback />}>
            <div id="mentors">
              <Mentors />
            </div>
          </Suspense>
        </Fade>
        <Suspense fallback={<LoadingFallback />}>
          <FAQ />
        </Suspense>
        <div id="contact">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

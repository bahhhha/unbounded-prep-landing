import { Button } from "antd";
import { Parallax } from "react-scroll-parallax";

export const Hero = (): JSX.Element => {
  return (
    <Parallax
      speed={-10}
      className="w-full flex justify-between mt-8 items-center"
    >
      <div className="w-1/2 flex flex-col gap-8">
        <p className="font-extrabold text-5xl">
          Discover Your Path to Global Education
        </p>
        <p className="text-lg">
          At unbounded.prep, we are revolutionizing the way students prepare for
          university admissions abroad. Our platform connects you directly with
          students from top universities around the world, enabling personalized
          guidance tailored to your educational aspirations.
        </p>
        <Button className="w-fit text-lg p-6" size="middle">
          Book an appointment
        </Button>
      </div>
      <div className="w-2/4">
        <img src="images/graphics/admission.svg" />
      </div>
    </Parallax>
  );
};

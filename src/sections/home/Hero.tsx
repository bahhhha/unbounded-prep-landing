import { Button } from "antd";
import { Parallax } from "react-scroll-parallax";
import { ArrowRightOutlined } from "@ant-design/icons";
export const Hero = (): JSX.Element => {
  const handleScroll = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    id: string
  ) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Parallax
      speed={-10}
      className="w-full flex flex-col lg:flex-row justify-between mt-8 items-center"
    >
      <div className="w-full lg:w-1/2 flex flex-col gap-8 py-2 lg:py-0">
        <p className="font-extrabold text-3xl lg:text-5xl">
          Discover Your Path to Global Education
        </p>
        <p className="text-base lg:text-lg lg:text-left">
          At unbounded.prep, we are revolutionizing the way students prepare for
          university admissions abroad. Our platform connects you directly with
          students from top universities around the world, enabling personalized
          guidance tailored to your educational aspirations.
        </p>
        <div className="flex justify-start">
          <Button
            icon={<ArrowRightOutlined />}
            iconPosition="end"
            onClick={(e) => handleScroll(e, "mentors")}
            className="w-fit text-lg p-4 lg:p-6"
            size="middle"
          >
            Find a mentor
          </Button>
        </div>
      </div>
      <div className="w-full lg:w-2/4 p-4 lg:p-0 flex justify-center lg:justify-end">
        <img
          src="images/graphics/admission.svg"
          className="max-w-full h-auto"
          alt="Admission graphic"
        />
      </div>
    </Parallax>
  );
};

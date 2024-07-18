import { useState } from "react";
import { Card, Button } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useSwipeable } from "react-swipeable";

const services = [
  {
    title: "Essay Reviews",
    description:
      "Get personalized feedback on your admission essays from students who’ve been there. Our mentors understand what top universities are looking for and can help you craft a compelling narrative.",
    imageSrc: "/images/graphics/writing.svg",
  },
  {
    title: "Application Assistance",
    description:
      "Navigating the Common App and other application portals can be confusing. Our mentors can guide you through the process, ensuring you meet all the requirements and deadlines.",
    imageSrc: "/images/graphics/webinar.svg",
  },
  {
    title: "University Selection Advice",
    description:
      "Choosing the right university is crucial. Get advice based on real student experiences and data-driven insights to match your academic and personal preferences with the best options.",
    imageSrc: "/images/graphics/globe.svg",
  },
  {
    title: "Scholarship Guidance",
    description:
      "Learn about scholarship opportunities and get help with applications to minimize your education costs.",
    imageSrc: "/images/graphics/money.svg",
  },
];

export const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + services.length) % services.length
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div className="w-full flex items-center justify-center mt-8 md:px-4">
      <div className="hidden md:block">
        <Button icon={<LeftOutlined />} onClick={handlePrev} />
      </div>
      <div {...swipeHandlers} className="flex-grow max-w-full md:mx-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="border-gray-200 w-full h-full px-8 py-6 md:px-16 md:py-12">
              <div className="w-full h-full flex flex-col md:flex-row items-center justify-between">
                <div className="w-full h-full md:w-1/2">
                  <p className="font-bold text-lg md:text-xl">
                    {services[currentIndex].title}
                  </p>
                  <p className="text-base md:text-lg">
                    {services[currentIndex].description}
                  </p>
                </div>
                <img
                  src={services[currentIndex].imageSrc}
                  className="w-64 h-64 md:w-96 md:h-96 mt-4 md:mt-0"
                  alt={services[currentIndex].title}
                />
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="hidden md:block">
        <Button icon={<RightOutlined />} onClick={handleNext} />
      </div>
    </div>
  );
};

export default Services;

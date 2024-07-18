import { useState } from "react";
import { Card, Typography, Button } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const { Title } = Typography;

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

  return (
    <div className="w-full h-full flex items-center justify-center mt-8">
      <Button icon={<LeftOutlined />} onClick={handlePrev} />
      <div className="flex-grow max-w-full max-h-full mx-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="border-gray-200 w-full h-full px-32">
              <div className="w-full h-full flex items-center justify-between">
                <div className="w-1/2">
                  <Title level={1}>{services[currentIndex].title}</Title>
                  <p className="text-lg">
                    {services[currentIndex].description}
                  </p>
                </div>
                <img
                  src={services[currentIndex].imageSrc}
                  className="w-96 h-96"
                />
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
      <Button icon={<RightOutlined />} onClick={handleNext} />
    </div>
  );
};

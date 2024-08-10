import { useState } from "react";
import { Card, Button } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useSwipeable } from "react-swipeable";
import { useTranslation } from "react-i18next";

export const Services = () => {
  const { t } = useTranslation("services");
  const services = [
    {
      title: t("essayReviews.title"),
      description: t("essayReviews.description"),
      imageSrc: "/images/graphics/writing.svg",
    },
    {
      title: t("applicationAssistance.title"),
      description: t("applicationAssistance.description"),
      imageSrc: "/images/graphics/webinar.svg",
    },
    {
      title: t("universitySelectionAdvice.title"),
      description: t("universitySelectionAdvice.description"),
      imageSrc: "/images/graphics/globe.svg",
    },
    {
      title: t("scholarshipGuidance.title"),
      description: t("scholarshipGuidance.description"),
      imageSrc: "/images/graphics/money.svg",
    },
  ];
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
            <Card className="border-gray-200 h-[35rem] w-full px-8 py-6 md:px-16 md:py-12">
              <div className="w-full h-full flex flex-col md:flex-row items-center justify-between">
                <div className="w-full h-full md:w-1/2">
                  <p className="font-bold text-lg md:text-2xl">
                    {services[currentIndex].title}
                  </p>
                  <p className="text-base my-2 md:text-lg">
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

import { useState } from "react";
import { useUnit } from "effector-react";
import { $mentors } from "../../features/get-mentors/model";
import { MentorCard } from "../../components/home/mentors/mentor-card";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "antd";
import { useTranslation } from "react-i18next";

export const Mentors = (): JSX.Element => {
  const mentors = useUnit($mentors);
  const { t, ready } = useTranslation("mentors");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  if (!ready || !mentors) {
    return (
      <div className="flex justify-center items-center h-96 w-full">
        <motion.img
          src="images/logos/logo.png"
          className="w-24 h-24"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </div>
    );
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 4;
      return nextIndex >= mentors.length ? 0 : nextIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const prevIndexAdjusted = prevIndex - 4;
      return prevIndexAdjusted < 0 ? mentors.length - 4 : prevIndexAdjusted;
    });
  };

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <div>
      <p className="font-bold text-3xl my-8">{t("title")}</p>
      <div className="hidden md:block">
        <div className="relative flex justify-center gap-4 items-center">
          <Button onClick={handlePrev}>
            <ChevronLeft />
          </Button>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="grid grid-cols-2 gap-4 items-center"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.2 }}
            >
              {mentors
                .slice(currentIndex, currentIndex + 4)
                .map((mentor, index) => (
                  <MentorCard key={index} mentor={mentor} />
                ))}
            </motion.div>
          </AnimatePresence>
          <Button onClick={handleNext}>
            <ChevronRight />
          </Button>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="flex flex-col gap-4">
          {mentors.slice(0, visibleCount).map((mentor, index) => (
            <MentorCard key={index} mentor={mentor} />
          ))}
          {visibleCount < mentors.length && (
            <Button onClick={loadMore}>Load More</Button>
          )}
        </div>
      </div>
    </div>
  );
};

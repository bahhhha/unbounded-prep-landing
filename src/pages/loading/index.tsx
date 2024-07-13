import { motion } from "framer-motion";

const LoadingPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <motion.img
        src="images/logos/logo.png"
        className="w-24 h-24"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </div>
  );
};

export default LoadingPage;

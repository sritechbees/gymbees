import { motion } from "framer-motion";

const JoinButton = () => {
  return (
    <motion.div
      className="flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.button
        whileHover={{
          scale: 1.1,
          boxShadow: "0 0 20px rgba(255, 165, 0, 0.8)",
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.95 }}
        className="relative bg-gradient-to-r from-orange-400 to-yellow-500 text-white py-3 px-8 rounded-lg text-lg font-semibold shadow-md border border-orange-400 hover:from-yellow-500 hover:to-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-300"
      >
        Join Now
        <motion.div
          className="absolute top-0 left-0 w-2 h-2 bg-yellow-500 rounded-full"
          initial={{ opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 2,
          }}
        />
      </motion.button>
    </motion.div>
  );
};

export default JoinButton;

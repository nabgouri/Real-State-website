import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

export default function Container({ children, className, ...spread }) {
  return (
    <motion.div
      {...spread}
      className={twMerge(
        " px-5  overflow-hidden md:px-[3.8525rem] ",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

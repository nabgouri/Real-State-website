import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export default function Link({ path, children, linkClassName }) {
  const handleClick = (e) => {
    e.preventDefault();
    const element = document.getElementById(path);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.a
      href={`#${path}`}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={twMerge(
        "text-lg leading-5 opacity-70 hover:opacity-100",
        linkClassName
      )}
    >
      {children}
    </motion.a>
  );
}

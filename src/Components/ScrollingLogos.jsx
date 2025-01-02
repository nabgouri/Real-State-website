import { motion } from "framer-motion";
import { customersLogo } from "../util/cadsArrays";
import UlCard from "./UlCard";
const ScrollingLogos = () => {
  return (
    <section className="bg-white ">
      <div className="flex  overflow-hidden">
        <TranslateWrapper>
          <LogoItems />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItems />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItems />
        </TranslateWrapper>
      </div>
    </section>
  );
};

const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex gap-10 "
    >
      {children}
    </motion.div>
  );
};

const LogoItems = () => (
  <UlCard
    cards={customersLogo}
    className="flex gap-10 pl-10 md:gap-[3.125rem] items-center cards-logo mt-[1.125rem] md:mt-10 w-max"
  />
);

export default ScrollingLogos;

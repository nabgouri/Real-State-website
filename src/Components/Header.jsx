// import logo from "../assets/simah 1.svg";
import Container from "./Container";
import NavList from "./NavList";
import { homeLinks } from "../util/infosArrays";
import { useState } from "react";
import { motion } from "framer-motion";
import NavModal from "./NavModal";
import LogoAnimation from "./LogoAnimation";
export default function Header() {
  // const [isSplashComplete, setisSplashComplete] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const openNavHandler = () => {
    setIsOpen(!isOpen);
  };
  // const handleIsSplashComplete = () => {
  //   setisSplashComplete(!isSplashComplete);
  // };
  return (
    <header>
      <Container className="flex justify-between py-5 items-center">
        <LogoAnimation></LogoAnimation>
        {/* {isSplashComplete ? (
          <a href="#">
            <img src={logo} alt="site logo" />
          </a>
        ) : (
          <SplashScreen
            onAnimationComplete={handleIsSplashComplete}
          ></SplashScreen>
        )} */}
        <nav>
          <NavList initial={{scale:1.5, opacity:0, z: 100}} whileInView={{scale:1, opacity:1, z:0}} viewport={{once: true}} transition={{duration: 0.4, delay: 0.2, ease: 'easeInOut'}} links={homeLinks}></NavList>
          <svg
            onClick={openNavHandler}
            className="md:hidden"
            width="24"
            height="17"
            viewBox="0 0 24 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group">
              <motion.rect
                animate={{
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 7 : 0,
                  transformOrigin: "center",
                }}
                id="Rectangle"
                width="24"
                height="3"
                fill="#1B1D23"
              />
              <motion.rect
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                id="Rectangle Copy 2"
                y="7"
                width="24"
                height="3"
                fill="#1B1D23"
              />
              <motion.rect
                id="Rectangle Copy 3"
                animate={{
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? -7 : 0,
                  transformOrigin: "center",
                }}
                y="14"
                width="24"
                height="3"
                fill="#1B1D23"
              />
            </g>
          </svg>
          {isOpen && (
            <NavModal
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                type: "spring",
                ease: "easeInOut",
                stiffness: 50,
                damping: 10,
                mass: 0.5,
              }}
              openNavHandler={openNavHandler}
            ></NavModal>
          )}
        </nav>
        <motion.button initial={{x: -100, opacity:0}} whileInView={{x:0, opacity: 1}} transition={{duration: 0.4, delay:0.2, ease: 'easeInOut', }} viewport={{once: true}} className="md:block hidden bg-black active:scale-110 hover:bg-[#60636D]  text-white px-8 py-[1.125rem] rounded-xl text-lg leading-5">
          إضافة قائمة
        </motion.button>
      </Container>
    </header>
  );
}

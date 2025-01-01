import { useRef, useEffect } from "react";
import Lottie from "react-lottie-player";
import splashAnimation from "../util/splash.json";

const LogoAnimation = () => {
  const animationRef = useRef();

  useEffect(() => {
    const handleComplete = () => {
      // Pause at the final frame
      if (animationRef.current) {
        animationRef.current.stop();
      }
    };
    animationRef.current?.addEventListener("complete", handleComplete);
    return () =>
      animationRef.current?.removeEventListener("complete", handleComplete);
  }, []);

  return (
    <Lottie
      animationData={splashAnimation}
      play
      loop={false}
      lottieRef={animationRef}
      className="logo-animation"
    />
  );
};

export default LogoAnimation;

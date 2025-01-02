import Lottie from "react-lottie-player";
import splashAnimation from "../util/splash.json";

const LogoAnimation = () => {
  return (
    <Lottie
      animationData={splashAnimation}
      play
      loop={true}
      className="logo-animation"
    />
  );
};

export default LogoAnimation;

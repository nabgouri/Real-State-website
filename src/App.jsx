import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import CustomerSection from "./Components/CustomerSection";
import About from "./Components/About";
import Licenses from "./Components/Licenses";
import Servirses from "./Components/Servirses";
import GuideComponent from "./Components/GuideComponent";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import LogoAnimation from "./Components/LogoAnimation";

const SplashScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-white z-50">
      <div className="md:scale-150 flex items-center justify-center">
        <LogoAnimation />
      </div>
    </div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 60000); // Show splash screen for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <SplashScreen />
      ) : (
        <>
          <Header />
          <Hero />
          <CustomerSection />
          <About />
          <Licenses />
          <Servirses />
          <GuideComponent />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;

import { useState } from "react";
import Container from "./Container";
import TextContent from "./TextContent";
import UlCard from "./UlCard";
import { servirses } from "../util/cadsArrays";

const Servirses = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === servirses.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? servirses.length - 1 : prev - 1));
  };

  return (
    <section id="service" className="text-center">
      <Container className="bg-[#F2F6F7] py-[3.125rem] md:py-[7.5rem]">
        <TextContent
          initial={{ z: 100, scale: 1.5, opacity: 0, filter: "Blur(12px)" }}
          whileInView={{ z: 0, scale: 1, opacity: 1, filter: "Blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.4,
            delay: 0.2,
            ease: "easeOut",
            type: "spring",
          }}
          title="خدماتنا"
          headline="احتياجاتك العقارية"
        />
        <UlCard
          isCarousel={true}
          currentIndex={currentIndex}
          cards={servirses}
          className="grid grid-cols-3 overflow-hidden md:overflow-auto md:items-center md:gap-5 card-container pt-0 md:pt-10"
        />
        <div className="flex md:hidden items-center justify-center gap-2 mt-[30px]">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            aria-label="Previous slide"
          >
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity={currentIndex === 0 ? "0.5" : "1"}>
                <path
                  d="M0.229598 16.8852C0.229599 7.54868 7.77828 -1.14619e-06 17.1148 -7.38076e-07C26.4513 -3.29963e-07 34 7.54868 34 16.8852C34 26.2217 26.4513 33.7704 17.1148 33.7704C7.77827 33.7704 0.229598 26.2217 0.229598 16.8852ZM32.0135 16.8852C32.0135 8.64125 25.3588 1.98649 17.1148 1.98649C8.87085 1.98649 2.21609 8.64125 2.21609 16.8852C2.21609 25.1292 8.87085 31.7839 17.1148 31.7839C25.3587 31.7839 32.0135 25.1292 32.0135 16.8852Z"
                  fill="black"
                />
                <path
                  d="M15.4266 25.1289L23.6706 16.885L15.4266 8.64103L16.8172 7.25049L26.4517 16.885L16.8172 26.5195L15.4266 25.1289Z"
                  fill="black"
                />
                <path
                  d="M25.0613 15.8918L25.0613 17.8783L8.17608 17.8783L8.17608 15.8918L25.0613 15.8918Z"
                  fill="black"
                />
              </g>
            </svg>
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === servirses.length - 1}
            aria-label="Next slide"
          >
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity={currentIndex === servirses.length - 1 ? "0.5" : "1"}>
                <path
                  d="M33.7704 16.8852C33.7704 7.54868 26.2217 -1.14619e-06 16.8852 -7.38076e-07C7.54868 -3.29963e-07 3.29963e-07 7.54868 7.38076e-07 16.8852C1.14619e-06 26.2217 7.54868 33.7704 16.8852 33.7704C26.2217 33.7704 33.7704 26.2217 33.7704 16.8852ZM1.98649 16.8852C1.98649 8.64125 8.64125 1.98649 16.8852 1.98649C25.1292 1.98649 31.7839 8.64125 31.7839 16.8852C31.7839 25.1292 25.1292 31.7839 16.8852 31.7839C8.64125 31.7839 1.9865 25.1292 1.98649 16.8852Z"
                  fill="#181717"
                />
                <path
                  d="M18.5736 25.1289L10.3297 16.885L18.5736 8.64103L17.1831 7.25049L7.54858 16.885L17.1831 26.5195L18.5736 25.1289Z"
                  fill="#181717"
                />
                <path
                  d="M8.93921 15.8918L8.93921 17.8783L25.8244 17.8783L25.8244 15.8918L8.93921 15.8918Z"
                  fill="#181717"
                />
              </g>
            </svg>
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Servirses;

import { twMerge } from "tailwind-merge";
import Card from "./Card";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function UlCard({
  cards,
  className,
  animation,
  isCarousel = false,
  currentIndex = 0,
  ...spread
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const renderCarouselItem = (card, index) => (
    <Card
      key={index}
      card={{
        ...card,
        variants: {
          ...card.variants,
          initial: {
            ...card.variants.initial,
            display: isMobile
              ? index === currentIndex
                ? "flex"
                : "none"
              : "flex",
          },
          whileInView: {
            ...card.variants.whileInView,
            display: isMobile
              ? index === currentIndex
                ? "flex"
                : "none"
              : "flex",
            transition: {
              ...card.variants.whileInView.transition,
              display: { duration: 0 },
            },
          },
        },
      }}
    />
  );

  const renderRegularItem = (card, index) => <Card key={index} card={card} />;

  return (
    <motion.ul {...spread} className={twMerge("md:flex", className)}>
      {cards.map((card, index) =>
        isCarousel
          ? renderCarouselItem(card, index)
          : renderRegularItem(card, index)
      )}
    </motion.ul>
  );
}

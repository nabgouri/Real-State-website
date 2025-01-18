import { twMerge } from "tailwind-merge";
import Card from "./Card";
import { motion, AnimatePresence } from "framer-motion";

export default function UlCard({
  cards,
  className,
  animation,
  // New carousel-specific props
  isCarousel = false,
  currentIndex = 0,
  ...spread
}) {
  const renderCarouselItem = (card, index) => (
    <motion.li
      key={index}
      animate={{
        opacity: index === currentIndex ? 1 : 0,
        zIndex: index === currentIndex ? 20 : 10,
        transition: {
          opacity: { duration: 0.3 },
          zIndex: { delay: index === currentIndex ? 0 : 0.3 },
        },
      }}
    >
      <Card animation={animation} card={card} />
    </motion.li>
  );

  const renderRegularItem = (card, index) => (
    <Card key={index} animation={animation} card={card} />
  );

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

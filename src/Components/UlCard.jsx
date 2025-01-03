import { twMerge } from "tailwind-merge";
import Card from "./Card";
import { motion } from "framer-motion";
export default function UlCard({ cards, className, ...spread }) {
  return (
    <motion.ul
      {...spread}
      style={{ willChange: "transform" }}
      className={twMerge("md:flex", className)}
    >
      {cards.map((card, index) => {
        return <Card key={index} card={card}></Card>;
      })}
    </motion.ul>
  );
}

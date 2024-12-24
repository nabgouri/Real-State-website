import { twMerge } from "tailwind-merge";
import Card from "./Card";
export default function UlCard({ cards, className }) {
  return (
    <ul className={twMerge("flex", className)}>
      {cards.map((card, index) => {
        return <Card key={index} card={card}></Card>;
      })}
    </ul>
  );
}

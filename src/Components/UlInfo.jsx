import Infos from "./Infos";
import { twMerge } from "tailwind-merge";
export default function Ulinfo({ infos, className }) {
  return (
    <ul className={twMerge("grid ", className)}>
      {infos.map((info, index) => {
        return <Infos key={index} info={info}></Infos>;
      })}
    </ul>
  );
}

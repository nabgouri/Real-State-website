import Balancer from "react-wrap-balancer";
import { twMerge } from "tailwind-merge";
export default function TextContent({ headline, paragraph, title, className }) {
  return (
    <div className={(twMerge(" "), className)}>
      <div className="text-[1.375rem] font-medium opacity-90 leading-[1.875rem] mb-[0.625rem]">
        {title}
      </div>
      <h2 className="text-6xl font-medium leading-[4.375rem] mb-5 ">
        <Balancer>{headline}</Balancer>
      </h2>
      <p className="text-lg font-medium  leading-[1.875rem] opacity-80 ">
        <Balancer>{paragraph}</Balancer>
      </p>
    </div>
  );
}

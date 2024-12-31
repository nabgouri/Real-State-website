import Balancer from "react-wrap-balancer";
import { twMerge } from "tailwind-merge";
export default function TextContent({ headline, paragraph, title, className }) {
  return (
    <div dir="rtl" className={(twMerge(" "), className)}>
      <div className="text-xl md:text-[1.375rem] font-medium opacity-90 leading-[1.875rem] mb-[0.625rem]">
        {title}
      </div>
      <h2 className="text-[2.5rem] md:text-6xl font-medium leading-[3.125rem] md:leading-[4.375rem] mb-5 ">
        {headline}
      </h2>
      <p className=" text-base md:text-lg font-medium leading-[1.625rem]  md:leading-[1.875rem] opacity-80 ">
        <Balancer>{paragraph}</Balancer>
      </p>
    </div>
  );
}

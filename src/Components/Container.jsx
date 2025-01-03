import { twMerge } from "tailwind-merge";
export default function Container({ children, className }) {
  return (
    <div className={twMerge(" px-5  md:px-[3.8525rem] ", className)}>
      {children}
    </div>
  );
}

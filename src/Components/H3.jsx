import { twMerge } from "tailwind-merge";

export default function H3({ children, className }) {
  return (
    <h3
      className={twMerge(
        " font-medium leading-[1.875rem] text-[1.375rem] opacity-90 text-[#181717] after:block after:w-[27px] after:h-[3px] after:bg-black after:my-[10px]  ",
        className
      )}
    >
      {children}
    </h3>
  );
}

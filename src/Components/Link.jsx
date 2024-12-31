import { twMerge } from "tailwind-merge";

export default function Link({ path, children, linkClassName }) {
  return (
    <a
      href={`/${path}`}
      className={twMerge(
        "text-lg leading-5 opacity-70 hover:opacity-100",
        linkClassName
      )}
    >
      {children}
    </a>
  );
}

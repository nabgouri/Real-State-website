import { twMerge } from "tailwind-merge";
import Link from "./Link";
export default function NavList({ links, className }) {
  return (
    <ul className={twMerge("hidden md:flex gap-10", className)}>
      {links.map((link, index) => {
        const { name, path } = link;
        return (
          <li key={index}>
            <Link path={path}>{name}</Link>
          </li>
        );
      })}
    </ul>
  );
}

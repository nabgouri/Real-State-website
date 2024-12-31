import { twMerge } from "tailwind-merge";
import Link from "./Link";
export default function NavList({ links, className, linkClassName }) {
  return (
    <ul className={twMerge("hidden md:flex md:gap-10", className)}>
      {links.map((link, index) => {
        const { name, path } = link;
        return (
          <li key={index}>
            <Link path={path} linkClassName={linkClassName}>
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

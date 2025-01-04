import { twMerge } from "tailwind-merge";
import Link from "./Link";
import { motion } from "framer-motion";
export default function NavList({ links, className, linkClassName, ...spread }) {
  return (
    <motion.ul {...spread} className={twMerge("hidden md:flex md:gap-10", className)}>
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
    </motion.ul>
  );
}

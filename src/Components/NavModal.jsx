import { motion } from "framer-motion";
import Link from "./Link";
const NavModal = function NavModal({ openNavHandler, ...spread }) {
  const navLinks = [
    { name: "معلومات عنا", path: "about" },
    { name: "خدمات", path: "service" },
    { name: "التراخيص", path: "lisence" },
    { name: "اتصل بنا", path: "contact" },
  ];
  return (
    <motion.nav
      {...spread}
      className="absolute left-0 top-[97px] z-50 w-[91.47%] bg-[#EEEFF4] px-12 pb-[2.625rem] pt-10"
    >
      {/* <NavList
        ulClassName="px-12 pt-10 pb-[2.625rem]  gap-4 items-start"
        navLinkClass="font-bold text-[2rem] leading-10 text-[#1b1d23]"
      ></NavList> */}
      <ul className="flex flex-col items-start gap-4">
        {navLinks.map((navLink, index) => {
          const { name, path } = navLink;
          return (
            <li key={index}>
              <Link
                path={`/${path}`}
                className="text-[2rem] font-bold leading-10 text-[1b1d23]"
                onClick={openNavHandler}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
};
export default NavModal;

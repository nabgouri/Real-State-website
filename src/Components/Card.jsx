import { motion } from "framer-motion";

export default function Card({ card }) {
  const {
    logo,
    logoImage,
    title,
    img,
    paragraph,
    headline,
    variants,
    viewport,
  } = card;
  return (
    <motion.li
      variants={variants}
      viewport={viewport}
      initial="initial"
      whileInView="whileInView"
    >
      {card.logo && <img className="h-28 w-36" src={logo} alt="logo-test" />}
      {card.title && (
        <>
          <img src={img} alt="image" />
          <span className="font-medium text-2xl leading-[1.875rem]">
            {title}
          </span>
        </>
      )}
      {card.paragraph && (
        <>
          <img src={logoImage} alt="card-logo" />
          <h3 className="font-medium text-2xl mt-11 mb-[0.625rem]">
            {headline}
          </h3>
          <p className="text-[.9375rem] font-medium leading-[1.5625rem] opacity-80  ">
            {paragraph}
          </p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className=" mt-7 font-medium leading-[1.5625rem] flex items-center gap-[0.625rem]"
          >
            اقرأ المزيد
            <svg
              width="15"
              height="8"
              viewBox="0 0 15 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.15 3.95L3.25 0.9C3.35 0.766666 3.48333 0.7 3.65 0.7C3.81667 0.7 3.95833 0.758333 4.075 0.875C4.19167 0.991667 4.25 1.13333 4.25 1.3C4.25 1.46667 4.18333 1.6 4.05 1.7L2 3.75H14.4C14.5667 3.75 14.7083 3.80833 14.825 3.925C14.9417 4.04167 15 4.18333 15 4.35C15 4.51667 14.9417 4.65833 14.825 4.775C14.7083 4.89167 14.5667 4.95 14.4 4.95H2L4.05 7C4.18333 7.1 4.25 7.23333 4.25 7.4C4.25 7.56667 4.19167 7.70833 4.075 7.825C3.95833 7.94167 3.81667 8 3.65 8C3.48333 8 3.35 7.93333 3.25 7.8L0.15 4.75C0.0500002 4.65 0 4.51667 0 4.35C0 4.18333 0.0500002 4.05 0.15 3.95Z"
                fill="black"
              />
            </svg>
          </a>
        </>
      )}
    </motion.li>
  );
}

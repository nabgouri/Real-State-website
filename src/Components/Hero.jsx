import Container from "./Container";
import desktopHeroImg from "../assets/images/image-hero.png";
import mobileHeroImg from "../assets/images/mobile-hero-img.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="">
      <Container className="flex flex-col pb-[3.125rem]  md:pb-0 px-0 md:flex-row items-center bg-[#F2F6F7] gap-[3.125rem] md:gap-[6.625rem] md:pe-0 justify-between mb-[3.125rem] md:mb-[6.25rem]">
        {/* Text Content Section */}
        <motion.div
          dir="rtl"
          className="flex-grow text-center order-2 md:text-start px-[2.25rem] md:px-0"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: 100, filter: "blur(12px)" },
            visible: {
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99],
                staggerChildren: 0.3,
              },
            },
          }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="md:text-7xl text-[3.125rem] font-medium leading-[4.375rem] md:leading-[5.625rem]"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            شريكك الموثوق في التميز العقاري
          </motion.h1>
          <motion.p
            className="md:text-lg text-base leading-[1.625rem] font-medium md:leading-[1.9rem] pt-5 md:pt-7"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            حيث لا نكتفي بتقديم الخدمات فحسب، بل نقدم حلولاً كاملة لجميع
            احتياجاتك العقارية. سواء كنت تبحث عن تطوير أو إدارة أو تسويق
            العقارات، فنحن وجهتك الوحيدة.
          </motion.p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.6, -0.05, 0.01, 0.99],
          }}
          viewport={{ once: true }}
          className="flex-shrink-0 order-1 md:order-3"
        >
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet={`${desktopHeroImg}`}
              type="image/png"
            />
            <img
              src={`${mobileHeroImg}`}
              alt="Hero"
              className="w-full h-auto"
            />
          </picture>
        </motion.div>
      </Container>
    </section>
  );
}

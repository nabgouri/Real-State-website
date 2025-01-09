import Container from "./Container";
import TextContent from "./TextContent";
import aboutTopImage from "../assets/images/about-images/about-top-img.png";
import aboutBottomImage from "../assets/images/about-images/about-bottom-img.png";
import mobileTopImage from "../assets/images/about-images/mobile-top-aboutImage.png";
import mobileBottomImage from "../assets/images/about-images/mobile-bottom-aboutImage.png";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about">
      <Container className="md:flex items-center justify-between bg-[#F2F6F7] py-[3.125rem] md:py-[7.5rem]">
        <div className="flex-1 relative">
          <div className="grid grid-cols-1 grid-rows-1 after-class before-class perspective-[1000px]">
            <picture className="col-start-1 row-start-1 z-10">
              <source media="(max-width: 600px)" srcSet={mobileBottomImage} />
              <source media="(min-width: 601px)" srcSet={aboutBottomImage} />
              <motion.img
                initial={{ z: -100, opacity: 0, rotate: "45deg", scale: 0.5 }}
                whileInView={{ z: 0, opacity: 1, rotate: "0deg", scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                src={aboutBottomImage}
                alt="about-bottom-image"
                className="mr-[7rem] md:mr-[10.325rem] mt-[4.025rem] md:mt-[6.125rem]"
              />
            </picture>

            <picture className="col-start-1 row-start-1 z-20">
              <source media="(max-width: 600px)" srcSet={mobileTopImage} />
              <source media="(min-width: 601px)" srcSet={aboutTopImage} />
              <motion.img
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                src={aboutTopImage}
                alt="about-top-image"
                className=""
              />
            </picture>
          </div>
        </div>

        <TextContent
          title="معلومات عنا"
          initial={{ x: -100, opacity: 0, filter: "blur(12px)" }}
          whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-[3.125rem] md:mt-0 md:text-start flex-1 "
          headline="إنشاء مساحات المعيشة التي تحلم بها"
          paragraph="نحن متخصصون في تقديم حلول عقارية شاملة، بما في ذلك التطوير وإدارة الممتلكات والتسويق وعقود الإيجار والمزادات. مع سنوات من الخبرة في الصناعة، نحن ملتزمون بتقديم خدمة استثنائية مصممة خصيصًا لتلبية احتياجات أصحاب العقارات والمستثمرين والمستأجرين."
        />
      </Container>
    </section>
  );
}

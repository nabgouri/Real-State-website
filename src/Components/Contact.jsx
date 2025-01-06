import TextContent from "./TextContent";
import Container from "./Container";
import Ulinfo from "./UlInfo";
import { motion } from "framer-motion";
import { contactInfo } from "../util/infosArrays";
export default function Contact() {
  return (
    <motion.section
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        delay: 0.3,
        ease: "easeInOut",
        stiffness: 50,
      }}
      viewport={{ once: true, amount: 0.4 }}
      id="contact"
    >
      <Container className="md:flex  md:gap-[12.5rem] md:items-center py-[3.125rem] md:py-[6.25rem] bg-[#F2F6F7]  ">
        <TextContent
          className="md:w-[73%]"
          title="اتصل بنا"
          headline="نحن سعداء دائما بمساعدتك"
        ></TextContent>
        <Ulinfo
          infos={contactInfo}
          className="  md:grid  md:grid-cols-2 md:gap-x-[5.375rem] gap-y-10  md:gap-y-[3.75rem]"
        ></Ulinfo>
      </Container>
    </motion.section>
  );
}

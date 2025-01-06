import Container from "./Container";
import TextContent from "./TextContent";
import UlCard from "./UlCard";
import { servirses } from "../util/cadsArrays";
const Servirses = () => {
  return (
    <section id="service" className=" text-center">
      <Container className="bg-[#F2F6F7] py-[3.125rem] md:py-[7.5rem] ">
        <TextContent
          initial={{ z: 100, scale: 1.5, opacity: 0, filter: "Blur(12px)" }}
          whileInView={{ z: 0, scale: 1, opacity: 1, filter: "Blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.4,
            delay: 0.2,
            ease: "easeOut",
            type: "spring",
          }}
          title="خدماتنا"
          headline="احتياجاتك العقارية"
        ></TextContent>
        <UlCard
          cards={servirses}
          className="grid grid-cols-3 overflow-hidden md:overflow-auto  md:items-center md:gap-5  card-container pt-0 md:pt-10"
        ></UlCard>
      </Container>
    </section>
  );
};

export default Servirses;

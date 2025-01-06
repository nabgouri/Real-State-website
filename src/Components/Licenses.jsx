import TextContent from "./TextContent";
import UlCard from "./UlCard";
import { companies } from "../util/cadsArrays";
import Container from "./Container";
export default function Licenses() {
  return (
    <section
      id="lisence"
      className="text-center my-[3.125rem] md:my-[6.25rem] "
    >
      <Container className=" md:flex flex-col   items-center justify-center">
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
          title="تراخيصنا"
          headline="معتمد وموثوق به"
        ></TextContent>
        <UlCard
          cards={companies}
          className="flex flex-col md:flex-row md:items-center  mt-6 gap-[3.125rem] md:gap-[6.25rem] card-item "
        ></UlCard>
      </Container>
    </section>
  );
}

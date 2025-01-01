import Container from "./Container";
import TextContent from "./TextContent";
import UlCard from "./UlCard";
import { servirses } from "../util/cadsArrays";
export default function Servirses() {
  return (
    <section id="service" className=" text-center">
      <Container className="bg-[#F2F6F7] py-[3.125rem] md:py-[7.5rem] ">
        <TextContent
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
}

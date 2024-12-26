import Container from "./Container";
import TextContent from "./TextContent";
import UlCard from "./UlCard";
import { servirses } from "../util/CadsArrays";
export default function Servirses() {
  return (
    <section className=" text-center">
      <Container className="bg-[#F2F6F7] py-[7.5rem] ">
        <TextContent
          title="خدماتنا"
          headline="احتياجاتك العقارية"
        ></TextContent>
        <UlCard
          cards={servirses}
          className="grid grid-cols-3 items-center gap-5  card-container pt-10"
        ></UlCard>
      </Container>
    </section>
  );
}

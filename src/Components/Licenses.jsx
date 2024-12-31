import TextContent from "./TextContent";
import UlCard from "./UlCard";
import { companies } from "../util/cadsArrays";
import Container from "./Container";
export default function Licenses() {
  return (
    <section className="text-center my-[3.125rem] md:my-[6.25rem] ">
      <Container className=" md:flex flex-col   items-center justify-center">
        <TextContent title="تراخيصنا" headline="معتمد وموثوق به"></TextContent>
        <UlCard
          cards={companies}
          className="flex flex-col md:flex-row md:items-center  mt-6 gap-[3.125rem] md:gap-[6.25rem] card-item "
        ></UlCard>
      </Container>
    </section>
  );
}

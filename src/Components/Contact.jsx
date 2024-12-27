import TextContent from "./TextContent";
import Container from "./Container";
import Ulinfo from "./UlInfo";
import { contactInfo } from "../util/infosArrays";
export default function Contact() {
  return (
    <section>
      <Container className="flex  gap-[12.5rem] items-center py-[6.25rem] bg-[#F2F6F7]  ">
        <TextContent
          className="w-[73%]"
          title="اتصل بنا"
          headline="نحن سعداء دائما بمساعدتك"
        ></TextContent>
        <Ulinfo
          infos={contactInfo}
          className="  grid grid-cols-2 gap-x-[5.375rem] gap-y-[3.75rem]"
        ></Ulinfo>
      </Container>
    </section>
  );
}

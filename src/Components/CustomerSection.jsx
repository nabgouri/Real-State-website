import TextContent from "./TextContent";
import Container from "./Container";
import UlCard from "./UlCard";
import { customersLogo } from "../util/cadsArrays";
export default function CustomerSection() {
  return (
    <section className="mb-10 md:mb-[6.25rem]">
      <Container className="md:px-[10.375rem] flex flex-col items-center">
        <TextContent
          className="text-center md:px-[9.75rem]"
          title="عملائنا"
          headline="موثوق به من قبل العلامات التجارية الرائدة"
          paragraph="نحن فخورون بالعمل مع العديد من العملاء المرموقين في الصناعة. فيما يلي عرض للشعارات من بعض شركائنا الموثوق بهم:"
        ></TextContent>
        <UlCard
          cards={customersLogo}
          className="flex gap-10 md:gap-[3.125rem] mt-[1.125rem] md:mt-10"
        ></UlCard>
      </Container>
    </section>
  );
}

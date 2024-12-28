import TextContent from "./TextContent";
import Container from "./Container";
import UlCard from "./UlCard";
import { customersLogo } from "../util/cadsArrays";
export default function CustomerSection() {
  return (
    <section className=" mb-[6.25rem]">
      <Container className="px-[10.375rem] flex flex-col items-center">
        <TextContent
          className="text-center px-[19.75px]"
          title="عملائنا"
          headline="موثوق به من قبل العلامات التجارية الرائدة"
          paragraph="نحن فخورون بالعمل مع العديد من العملاء المرموقين في الصناعة. فيما يلي عرض للشعارات من بعض شركائنا الموثوق بهم:"
        ></TextContent>
        <UlCard cards={customersLogo} className="gap-[3.125rem] mt-10"></UlCard>
      </Container>
    </section>
  );
}

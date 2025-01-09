import TextContent from "./TextContent";
import Container from "./Container";
import ScrollingLogos from "./ScrollingLogos";

export default function CustomerSection() {
  return (
    <section className="mb-10 md:mb-[6.25rem] overflow-hidden">
      <Container
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="md:px-[10.375rem] flex flex-col items-center overflow-clip"
      >
        <TextContent
          className="text-center md:px-[9.75rem]"
          title="عملائنا"
          headline="موثوق به من قبل العلامات التجارية الرائدة"
          paragraph="نحن فخورون بالعمل مع العديد من العملاء المرموقين في الصناعة. فيما يلي عرض للشعارات من بعض شركائنا الموثوق بهم:"
        />
        <ScrollingLogos></ScrollingLogos>
      </Container>
    </section>
  );
}

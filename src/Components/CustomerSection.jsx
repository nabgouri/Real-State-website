import TextContent from "./TextContent";
import Container from "./Container";
// import UlCard from "./UlCard";
import ScrollingLogos from "./ScrollingLogos";

export default function CustomerSection() {
  return (
    <section className="mb-10 md:mb-[6.25rem]">
      <Container className="md:px-[10.375rem] flex flex-col items-center overflow-clip">
        <TextContent
          className="text-center md:px-[9.75rem]"
          title="عملائنا"
          headline="موثوق به من قبل العلامات التجارية الرائدة"
          paragraph="نحن فخورون بالعمل مع العديد من العملاء المرموقين في الصناعة. فيما يلي عرض للشعارات من بعض شركائنا الموثوق بهم:"
        />
        {/* <UlCard
          initial={{ x: 0 }}
          animate={{ x: [0, "-100%"] }}
          transition={{
            x: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 0,
            },
          }}
          cards={[...customersLogo, ...customersLogo]}
          className="flex gap-10 pl-10 md:gap-[3.125rem] items-center cards-logo mt-[1.125rem] md:mt-10 w-max"
        /> */}
        <ScrollingLogos></ScrollingLogos>
      </Container>
    </section>
  );
}

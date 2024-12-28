import video from "../assets/vedio.png";
import Container from "./Container";
import TextContent from "./TextContent";
export default function GuideComponent() {
  return (
    <section className="flex flex-col">
      <img src={video} alt="video" />
      <Container className="  mx-[3.8525rem] bg-white   py-[6.25rem] border-[1px]  border-[#E2E2E2] rounded-[2.5rem]  -mt-[13.5rem] mb-[7.5rem] ">
        <TextContent
          className="text-center"
          headline="التوافق مع رؤيتك"
          title="رحلتك العقارية"
          paragraph="نحن ملتزمون بجعل تجربتك العقارية استثنائية. يعمل فريق الخبراء لدينا بلا كلل للتوافق مع رؤيتك وضمان تجربة سلسة، سواء كنت مالكًا للعقار أو مستأجرًا أو مستثمرًا."
        ></TextContent>
      </Container>
    </section>
  );
}

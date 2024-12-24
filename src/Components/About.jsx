import Container from "./Container";
import TextContent from "./TextContent";
import aboutTopImage from "../assets/images/about-images/about-top-img.png";
import aboutBottomImage from "../assets/images/about-images/about-bottom-img.png";

export default function About() {
  return (
    <section>
      <Container className="md:flex items-center gap-[13.125rem] bg-[#F2F6F7] py-[7.5rem]">
        <div className="flex">
          <img
            src={aboutBottomImage}
            alt="about-bottom-image"
            className=" -translate-x-[7rem] translate-y-10"
          />
          <img
            src={aboutTopImage}
            alt="about-top-image"
            className=" translate-x-full"
          />
        </div>
        <TextContent
          title="معلومات عنا"
          headline="إنشاء مساحات المعيشة التي تحلم بها"
          paragraph="نحن متخصصون في تقديم حلول عقارية شاملة، بما في ذلك التطوير وإدارة الممتلكات والتسويق وعقود الإيجار والمزادات. مع سنوات من الخبرة في الصناعة، نحن ملتزمون بتقديم خدمة استثنائية مصممة خصيصًا لتلبية احتياجات أصحاب العقارات والمستثمرين والمستأجرين."
        ></TextContent>
      </Container>
    </section>
  );
}

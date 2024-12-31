import Container from "./Container";
import TextContent from "./TextContent";
import aboutTopImage from "../assets/images/about-images/about-top-img.png";
import aboutBottomImage from "../assets/images/about-images/about-bottom-img.png";
import mobileTopImage from "../assets/images/about-images/mobile-top-aboutImage.png";
import mobileBottomImage from "../assets/images/about-images/mobile-bottom-aboutImage.png";

export default function About() {
  return (
    <section>
      <Container className="md:flex items-center justify-between bg-[#F2F6F7] py-[3.125rem] md:py-[7.5rem]">
        <div className="flex-1 relative">
          <div className="grid grid-cols-1 grid-rows-1 after-class before-class ">
            <picture className="col-start-1 row-start-1 z-10">
              <source media="(max-width: 600px)" srcSet={mobileBottomImage} />
              <source media="(min-width: 601px)" srcSet={aboutBottomImage} />
              <img
                src={aboutBottomImage}
                alt="about-bottom-image"
                className="mr-[7rem] md:mr-[10.325rem] mt-[4.025rem]  md:mt-[6.125rem]  "
              />
            </picture>

            <picture className="col-start-1 row-start-1 z-20">
              <source media="(max-width: 600px)" srcSet={mobileTopImage} />
              <source media="(min-width: 601px)" srcSet={aboutTopImage} />
              <img src={aboutTopImage} alt="about-top-image" className="" />
            </picture>
          </div>
        </div>

        <TextContent
          title="معلومات عنا"
          className="text-center mt-[3.125rem] md:mt-0 md:text-start flex-1 "
          headline="إنشاء مساحات المعيشة التي تحلم بها"
          paragraph="نحن متخصصون في تقديم حلول عقارية شاملة، بما في ذلك التطوير وإدارة الممتلكات والتسويق وعقود الإيجار والمزادات. مع سنوات من الخبرة في الصناعة، نحن ملتزمون بتقديم خدمة استثنائية مصممة خصيصًا لتلبية احتياجات أصحاب العقارات والمستثمرين والمستأجرين."
        />
      </Container>
    </section>
  );
}

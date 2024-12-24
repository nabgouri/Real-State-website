import Container from "./Container";
import desktopHeroImg from "../assets/images/image-hero.png";
export default function Hero() {
  return (
    <sectionn className="">
      <Container className="md:flex items-center bg-[#F2F6F7] gap-[6.625rem] pe-0 justify-between mb-[6.25rem]   ">
        <div className="flex-grow">
          <h1 className="text-7xl leading-[5.625rem]">
            شريكك الموثوق في التميز العقاري
          </h1>
          <p className="text-lg leading-[1.9rem] pt-7">
            حيث لا نكتفي بتقديم الخدمات فحسب، بل نقدم حلولاً كاملة لجميع
            احتياجاتك العقارية. سواء كنت تبحث عن تطوير أو إدارة أو تسويق
            العقارات، فنحن وجهتك الوحيدة.
          </p>
        </div>
        <img src={desktopHeroImg} alt="heroImage" />
      </Container>
    </sectionn>
  );
}

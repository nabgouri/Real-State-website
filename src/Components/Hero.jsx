import Container from "./Container";
import desktopHeroImg from "../assets/images/image-hero.png";
import mobileHeroImg from "../assets/images/mobile-hero-img.png";

export default function Hero() {
  return (
    <section className="">
      <Container className="flex flex-col pb-[3.125rem] md:pb-0 px-0 md:flex-row items-center bg-[#F2F6F7] gap-[3.125rem] md:gap-[6.625rem] md:pe-0 justify-between mb-[3.125rem] md:mb-[6.25rem]">
        {/* Text Content Section */}
        <div
          dir="rtl"
          className="flex-grow text-center order-2 md:text-start px-[2.25rem] md:px-0"
        >
          <h1 className="md:text-7xl text-[3.125rem] font-medium leading-[4.375rem] md:leading-[5.625rem]">
            شريكك الموثوق في التميز العقاري
          </h1>
          <p className="md:text-lg text-base leading-[1.625rem] font-medium md:leading-[1.9rem] pt-5 md:pt-7">
            حيث لا نكتفي بتقديم الخدمات فحسب، بل نقدم حلولاً كاملة لجميع
            احتياجاتك العقارية. سواء كنت تبحث عن تطوير أو إدارة أو تسويق
            العقارات، فنحن وجهتك الوحيدة.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0 order-1 md:order-3">
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet={`${desktopHeroImg}`}
              type="image/png"
            />
            <img
              src={`${mobileHeroImg}`}
              alt="Hero"
              className="w-full h-auto"
            />
          </picture>
        </div>
      </Container>
    </section>
  );
}

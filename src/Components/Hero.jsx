import Container from "./Container";
import desktopHeroImg from "../assets/images/image-hero.png";
export default function Hero() {
  return (
    <section>
      <Container className="md:flex items-center gap-[6.625rem] pe-0  pt-8 ">
        <div>
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
    </section>
  );
}

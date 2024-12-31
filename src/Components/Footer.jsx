import Container from "./Container";
import FooterNav from "./FooterNav";
import H3 from "./H3";
// hi
import footerLogo from "../assets/Logo-footer.png";
export default function Footer() {
  return (
    <footer className="bg-[#181717]">
      <Container className=" pt-[3.125rem] md:pt-[6.25rem]  gap-[7.75rem] bg-[#181717] text-white md:flex">
        <div>
          <a href="#">
            <img src={footerLogo} alt="footer logo " />
          </a>
          <p className="mt-10 mb-[3.125rem] leading-[1.875rem]">
            حيث لا نكتفي بتقديم الخدمات فحسب، بل نقدم حلولاً كاملة لجميع
            احتياجاتك العقارية. سواء كنت تبحث عن تطوير أو إدارة أو تسويق
            العقارات، فنحن وجهتك الوحيدة.
          </p>
          <H3 className="text-white after:bg-white">رخصة</H3>
          <p className="mb-[3.125rem] md:mb-0">رخصة : 101010101</p>
        </div>
        <FooterNav></FooterNav>
      </Container>
      <p className="text-center px-3 border-t-[0.8px] border-t-[#2B2828]  text-white py-[1.125rem] mt-24">
        حقوق النشر 2024 سمة العقارية خاضعة لرقابة واشراف الهيئة العامة للعقار
        جميع الحقوق محفوظة
      </p>
    </footer>
  );
}

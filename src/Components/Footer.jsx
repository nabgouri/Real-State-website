import Container from "./Container";
import FooterNav from "./FooterNav";
import H3 from "./H3";
import footerLogo from "../assets/logo-footer.png";
export default function Footer() {
  return (
    <footer>
      <Container className=" pt-[6.25rem] gap-[7.75rem] bg-[#181717] text-white flex">
        <div>
          <a href="#">
            <img src={footerLogo} alt="footer logo " />
          </a>
          <p>
            حيث لا نكتفي بتقديم الخدمات فحسب، بل نقدم حلولاً كاملة لجميع
            احتياجاتك العقارية. سواء كنت تبحث عن تطوير أو إدارة أو تسويق
            العقارات، فنحن وجهتك الوحيدة.
          </p>
          <H3 className="text-white">رخصة</H3>
          <p>رخصة : 101010101</p>
        </div>
        <FooterNav></FooterNav>
      </Container>
    </footer>
  );
}

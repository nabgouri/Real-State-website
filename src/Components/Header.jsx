import logo from "../assets/simah 1.png";
import Container from "./Container";
import NavList from "./NavList";
import { homeLinks } from "../util/infosArrays";
export default function Header() {
  return (
    <header>
      <Container className="flex justify-between py-8 items-center">
        <a href="/">
          <img src={logo} alt="site logo" />
        </a>
        <nav>
          <NavList links={homeLinks}></NavList>
        </nav>
        <button className="bg-black text-white px-8 py-[1.125rem] rounded-xl text-lg leading-5">
          إضافة قائمة
        </button>
      </Container>
    </header>
  );
}

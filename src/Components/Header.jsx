import Link from "./Link";
import logo from "../assets/simah 1.png";
import Container from "./Container";
export default function Header() {
  const links = [
    { name: "بيت", path: "#" },
    { name: "معلومات عنا", path: "#" },
    { name: "خدمات", path: "#" },
    { name: "التراخيص", path: "#" },
    { name: "اتصل بنا", path: "#" },
  ];

  return (
    <header>
      <Container className="flex justify-between py-8 items-center">
        <a href="/">
          <img src={logo} alt="site logo" />
        </a>
        <nav>
          <ul className="hidden md:flex gap-10  ">
            {links.map((link, index) => {
              const { name, path } = link;
              return (
                <li key={index}>
                  <Link path={path}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <button className="bg-black text-white px-8 py-[1.125rem] rounded-xl text-lg leading-5">
          إضافة قائمة
        </button>
      </Container>
    </header>
  );
}

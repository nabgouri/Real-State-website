import NavList from "./NavList";
import { homeLinks, supportLinks } from "../util/infosArrays";
import H3 from "./H3";
export default function FooterNav() {
  return (
    <ul className="grid grid-cols-3 ">
      <li>
        <H3 className="text-white">شركة</H3>
        <NavList links={homeLinks} className="  md:block"></NavList>
      </li>
      <li>
        <H3 className=" text-white">دعم</H3>
        <NavList links={supportLinks} className="  md:block"></NavList>
      </li>
      <li>
        <H3 className=" text-white">يشترك</H3>
        <p>
          ابق على اطلاع بأحدث أخبار شركة سمة العقارية. تظل معلوماتك خاصة، وسوف
          نقوم بإلغاء اشتراكك عند الطلب.
        </p>
        <input
          type="email"
          placeholder="عنوان بريدك  الإلكتروني"
          className="bg-[#262424] rounded-[60px] ps-5 placeholder:bg-white placeholder:font-medium placeholder:opacity-15 placeholder:text-[0.9375rem] placeholder:leading-[1.25rem]"
        />
        <button className="bg-black text-white rounded-[60px] py-4 px-[3.25rem] text-lg leading-[1.25rem] ">
          اشتراك
        </button>
      </li>
    </ul>
  );
}

import NavList from "./NavList";
import { homeLinks, supportLinks } from "../util/infosArrays";
import H3 from "./H3";
export default function FooterNav() {
  return (
    <ul className="grid grid-cols-3 ">
      <li>
        <H3 className="text-white after:bg-white after:mb-9">شركة</H3>
        <NavList links={homeLinks} className="  flex-col"></NavList>
      </li>
      <li>
        <H3 className=" text-white after:bg-white after:mb-9">دعم</H3>
        <NavList links={supportLinks} className=" flex-col"></NavList>
      </li>
      <li>
        <H3 className=" text-white after:bg-white after:mb-9">يشترك</H3>
        <p>
          ابق على اطلاع بأحدث أخبار شركة سمة العقارية. تظل معلوماتك خاصة، وسوف
          نقوم بإلغاء اشتراكك عند الطلب.
        </p>
        <input
          type="email"
          placeholder="عنوان بريدك الكتروني"
          className="bg-[#262424] rounded-[60px]  ps-5 mt-5 mb-3 py-4 pe-[7.5rem]  placeholder:font-medium placeholder:opacity-15 placeholder:text-[0.9375rem] placeholder:leading-[1.25rem]"
        />
        <button className="bg-black text-white rounded-[60px] py-4 px-[3.25rem] text-lg leading-[1.25rem] ">
          اشتراك
        </button>
      </li>
    </ul>
  );
}

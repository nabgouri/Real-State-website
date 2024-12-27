import H3 from "./H3";
export default function ContactGrid({ info }) {
  const { title, descreption, socials } = info;

  return (
    <li>
      <H3 className="opacity-90">{title}</H3>
      {descreption ? (
        <p className="font-medium leading-[1.875rem] text-[1.375rem] opacity-90 text-[#181717]">
          {descreption}
        </p>
      ) : (
        <div className="flex gap-[0.658rem]">
          {socials.map((social, index) => {
            return <img key={index} src={social} alt="social-media" />;
          })}
        </div>
      )}
    </li>
  );
}

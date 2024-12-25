export default function Card({ card }) {
  const { logo, title, img } = card;
  return (
    <li>
      {card.logo && <img src={logo} alt="" />}
      {card.title && (
        <>
          <img src={img} alt="image" />
          <span>{title}</span>
        </>
      )}
    </li>
  );
}

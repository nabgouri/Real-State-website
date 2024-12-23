export default function Link({ path, children }) {
  return (
    <a
      href={`/${path}`}
      className="text-lg leading-5 opacity-70 hover:opacity-100"
    >
      {children}
    </a>
  );
}

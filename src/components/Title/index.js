import "./style.css";

export default function Title({ link, alt }) {
  return (
    <a className="head" href={link} alt={alt}>
      {alt}
    </a>
  );
}

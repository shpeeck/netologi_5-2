// одна новость
import "./style.css";

export default function News({ img, news, category, link }) {
  return (
    <div className="news">
      {img ? <img src={img} alt={img}></img> : null}
      <a href={link}>
        {news}
        {category ? <span> {category}</span> : null}
      </a>
    </div>
  );
}

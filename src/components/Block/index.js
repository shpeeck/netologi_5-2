// блок новостей
import News from "../News";

export default function Block({ news }) {
  return news.map((element, id) => {
    const el = {
      img: element[0],
      news: element[1],
      category: element[2],
      link: element[3]
    };
    return <News key={id} {...el} />;
  });
}

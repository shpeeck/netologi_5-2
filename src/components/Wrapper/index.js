// Обертка для страницы
import Search from "../Search";
import Menu from "../Menu";
import Banner from "../Banner";
import Title from "../Title";
import News from "../News";
import Block from "../Block";
import "./style.css";

export default function Wrapper({ data }) {
  const yaBanner = {
    image:
      "https://github.com/shpeeck/netologi_5-2/blob/main/src/image/logo.jpg?raw=true",
    alt: "yandex",
    banStyle: "ya-banner"
  };
  const bigBanner = {
    image:
      "https://github.com/shpeeck/netologi_5-2/blob/main/src/image/banner.jpg?raw=true",
    alt: "banner",
    banStyle: "big-banner"
  };
  const smallBanner = {
    image:
      "https://github.com/shpeeck/netologi_5-2/blob/main/src/image/pic.jpg?raw=true",
    alt: "tp-banner",
    banStyle: "top-banner"
  };

  return (
    <div>
      <div className="wrapper">
        <div className="wrapper-top">
          <div>
            <Menu nav={data[1]}>
              <p>
                <span>31 июля, среда 02 32</span>
              </p>
            </Menu>
            <Block news={data[2]} />
          </div>
          <div>
            <Banner {...smallBanner} />
            <Title link={"https://ya.ru"} alt={"Работа над ошибками"} />
            <News news={"Смотрите на Яндексе и запоиминайте"} />
          </div>
        </div>
        <Menu nav={data[0]} />
      </div>
      <Search yaBanner={yaBanner} />
      <div className="wrapper">
        <p>
          Найдется все. Например, <span>фаза луны сегодня</span>
        </p>
        <Banner {...bigBanner} />
      </div>
      <div className="wrapper">
        <div className="wrapper-bottom">
          <div>
            <Title link={"https://ya.ru"} alt={"Погода"} />
            <Block news={data[3]} />
            <Title link={"https://ya.ru"} alt={"Посещаемое"} />
            <Block news={data[4]} />
          </div>
          <div>
            <Title link={"https://ya.ru"} alt={"Карта Германии"} />
            <Block news={data[5]} />
            <Title link={"https://ya.ru"} alt={"Телепрограмма"} />
            <Block news={data[6]} />
          </div>
          <div>
            <Title link={"https://ya.ru"} alt={"эфир"} />
            <Block news={data[7]} />
          </div>
        </div>
      </div>
    </div>
  );
}

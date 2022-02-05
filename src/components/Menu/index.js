// Вывод меню
import "./style.css";
import Title from "../Title";

export default function Menu({ nav, children }) {
  return (
    <ul className="menu">
      {nav.map(function (item) {
        return (
          <li className="menu-item" key={new Date().getTime() + Math.random()}>
            <Title link={item[1]} alt={item[0]} />
          </li>
        );
      })}
      {children ? <li className="menu-item">{children}</li> : null}
    </ul>
  );
}

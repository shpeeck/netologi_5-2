// Обертка для формы
import Banner from "../Banner";
import Form from "../Form";
import Button from "../Button";
import "./style.css";

export default function Search({ yaBanner, children }) {
  return (
    <div>
      <div className="search">
        <Banner {...yaBanner} />
        <div className="search-form">
          <Form />
          <Button />
        </div>
      </div>
      {children}
    </div>
  );
}

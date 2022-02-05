import "./css/styles.css";
import data from "./data/data.json";
import Wrapper from "./components/Wrapper";

export default function App() {
  return <Wrapper data={data} />;
}

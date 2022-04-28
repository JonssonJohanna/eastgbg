import img from "../../assets/images/banner2.png";
import { banner } from "./styles";

const Header = () => {
  return (
    <banner>
      <img src={img} />
      <h1>Love calculator</h1>;
    </banner>
  );
};

export default Header;

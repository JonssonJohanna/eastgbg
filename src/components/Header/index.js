// import img from "../../assets/images/banner2.png";
import { Banner } from "./styles";
import "./../../../src/assets/fonts/Cherry.woff";

const Header = () => {
  return (
    // <Banner img src={img} alt="scott disick">
    //   <h1>Love calculator</h1>;
    // </Banner>
    <Banner img="images/banner2.png" alt="scott disick">
      <h1>Love calculator</h1>
    </Banner>
  );
};

export default Header;

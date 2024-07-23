import { useLocation } from "react-router-dom";
import NavBar from "../NavBar/navBar";
import Button from "../UI/Button";
import CoffeBeans from "../UI/coffeeBeans3";
import "./header.scss";
import mainBg from "../../assets/img/backgrounds/MainBg.png"
import ourCoffeBg from "../../assets/img/backgrounds/coffe-bg.png"
import pleasure from "../../assets/img/backgrounds/pleasure-bg.png"

const backgroundImages = {
  '/': `url(${mainBg})no-repeat center/cover`,
  '/ourcoffe': `url(${ourCoffeBg})no-repeat center/cover`,
  '/pleasure': `url(${pleasure})no-repeat center/cover`,
};
const Header = () => {
  const location = useLocation();
  const backgroundImage = backgroundImages[location.pathname] || '../../assets/img/backgrounds/MainBg.png';

  return (
      <header style={{
        background: `${backgroundImage}`}}>
        <NavBar fill="white"/>
        <h1>kuuiluil</h1>
        <CoffeBeans color="white" />
        <div className="text_title">
          <p>We makes every dayfull of energy and taste</p>
          <p>Want to try our beans?</p>
          <Button name="More"/>
        </div>
      </header>
  );
}
export default Header;

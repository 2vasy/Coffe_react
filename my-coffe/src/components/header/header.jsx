import NavBar from "../NavBar/navBar";
import CoffeBeans from "../UI/coffeeBeans3";
import "./header.scss";
function Header() {
  return (
    <>
      <header>
        <NavBar fill="white"/>
        <h1>Ewerything You Love About Coffee</h1>
        <CoffeBeans color="white" />
        <div className="text_title">
          <p>We makes every dayfull of energy and taste</p>
          <p>Want to try our beans?</p>
          <button className="more">More</button>
        </div>
      </header>
    </>
  );
}
export default Header;

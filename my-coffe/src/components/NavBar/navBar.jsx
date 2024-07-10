import "./navBar.scss";
import { Link } from "react-router-dom";
import { db } from "../../db/db";
import NavBarItems from "./NavBarItems";
import Logo from "../NavBar/Logo";
function NavBar({fill}) {
  return (
    <>
      <nav className="nav_bar">
        <div>
          <Link to="/">
            <Logo fill={fill} />
          </Link>
        </div>
        {db.nav.map((item) => (
          <NavBarItems name={item.name} path={item.path} key={item.id} />
        ))}
      </nav>
    </>
  );
}

export default NavBar;

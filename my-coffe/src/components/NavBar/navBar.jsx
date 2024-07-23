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
          <NavBarItems
          key={item.id}  
          name={item.name} 
          path={item.path}
          />
        ))}
      </nav>
    </>
  );
}

export default NavBar;

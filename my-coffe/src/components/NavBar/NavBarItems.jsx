import React from "react";
import {Link} from "react-router-dom";

const NavBarItems = ({name, path, onClick}) => {
  return (
    <ul className="Links">
      <li>
        <Link to={path}>{name}</Link>
      </li>
    </ul>
  );
};

export default NavBarItems;

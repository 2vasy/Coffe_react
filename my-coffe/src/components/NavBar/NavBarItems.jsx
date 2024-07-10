import React from "react";
import {Link} from "react-router-dom";

const NavBarItems = ({name, path}) => {
  return (
    <ul className="Links">
      <li>
        <Link to={path}>{name}</Link>
      </li>
    </ul>
  );
};

export default NavBarItems;

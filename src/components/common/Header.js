import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = { color: "#F15B2A" };

  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {"|"}
      <NavLink to="/about" activeStyle={activeStyle} exact>
        Acerca de
      </NavLink>
      {"|"}
      <NavLink to="/courses" activeStyle={activeStyle} exact>
        Cursos
      </NavLink>
    </nav>
  );
}

export default Header;

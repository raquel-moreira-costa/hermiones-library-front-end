import React from "react";

const Nav = (props) => {
  const { render } = props;
  return (
    <nav>
      <li>
        <a href="#Characters" onClick={() => render("Characters")}>
          Characters
        </a>
      </li>
      <li>
        <a href="#Spells" onClick={() => render("Spells")}>
          Spells
        </a>
      </li>
    </nav>
  );
};

export default Nav;

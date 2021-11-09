import React from "react";
import Logo from "../logo.svg";
import Nav from "./nav";
const Header = (props) => {
  const {trocarTroca} = props
  return (
    <header>
      <div>
        <img src={Logo} alt="icon library"></img>
        <h1>Hermione's Library</h1>
      </div>
      <Nav render = {trocarTroca}/>
    </header>
  );
};

export default Header;

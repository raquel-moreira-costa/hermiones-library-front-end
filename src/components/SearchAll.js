import React from "react";
import Griffyndor from "../icon-grifinoria.svg";
import Ravenclaw from "../icon-corvinal.svg";
import Slytherin from "../icon-sonserina.svg";
import Hufflepuff from "../icon-lufa-lufa.svg";
import Unknow from "../hogwarts-logo.svg";
import Jinx from "../icon-jinx.svg";
import Hex from "../icon-hex.svg";
import Others from "../icon-others.svg";
import Curse from "../icon-curse.svg";
import Transfiguration from "../icon-transf.svg";
import Charm from "../icon-charm.svg";

const SearchAll = (props) => {
  const { data, select } = props;
  console.log(`DATA`, data);
  // console.log(`ERROR`, data.error)

  const HouseLogo = (houseName) => {
    if (houseName === "Gryffindor") {
      return Griffyndor;
    }
    if (houseName === "Ravenclaw") {
      return Ravenclaw;
    }
    if (houseName === "Slytherin") {
      return Slytherin;
    }
    if (houseName === "Hufflepuff") {
      return Hufflepuff;
    }
    if (
      houseName !== "Griffyndor" &&
      "Slytherin" &&
      "Hufflepuff" &&
      "Ravenclaw"
    ) {
      return Unknow;
    }
  };

  const TypeLogo = (spellType) => {
    if (spellType === "Hex") {
      return Hex;
    }
    if (spellType === "Transfiguration") {
      return Transfiguration;
    }
    if (spellType === "Curse") {
      return Curse;
    }
    if (spellType === "Jinx") {
      return Jinx;
    }
    if (spellType === "Charm") {
      return Charm;
    }
    if (
      spellType !== "Hex" &&
      "Transfiguration" &&
      "Curse" &&
      "Jinx" &&
      "Charm"
    ) {
      return Others;
    }
  };

  return (
    <div className="cards">
      {data && select === "character" && (
        <div className="card" id={data.House}>
          <div className="card-name">
            <h3>{data.Name}</h3>
            <div className="logo">
              <img src={HouseLogo(data.House)} alt={data.House}></img>
            </div>
          </div>
          <div className="infos">
            <div className="card-info">
              <ul>
                <li>Species: {data.Species}</li>
                <li>Blood_status: {data.Blood_status}</li>
                <li>Gender: {data.Gender}</li>
                <li>House: {data.House}</li>
                <li>Birth: {data.Birth}</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {data && !data.error && select === "spell" && (
        <div className="card-spell" id={data.Type} key={data.Id}>
          <div className="card-name-spell">
            <h3>{data.Name}</h3>
            <div className="logo">
              <img src={TypeLogo(data.Type)} alt={data.Type}></img>
            </div>
          </div>
          <div className="card-info-spell">
            <ul>
              <li>Incantation: {data.Incantation}</li>
              <li>Type: {data.Type}</li>
              <li>Effect: {data.Effect}</li>
              <li>Light: {data.Light}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchAll;

import React, { useState, useEffect } from "react";
import Jinx from "../icon-jinx.svg";
import Hex from "../icon-hex.svg";
import Others from "../icon-others.svg";
import Curse from "../icon-curse.svg";
import Transfiguration from "../icon-transf.svg";
import Charm from "../icon-charm.svg";

const Spells = () => {
  const [data, setData] = useState([]);

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

  useEffect(() => {
    const FazerFetch = () => {
      fetch("http://localhost:3001/spells/", {
        method: "get",
        headers: { "Content-type": "application/json" },
      })
        .then((res) => {
          return res.json();
        })
        .then((response) => {
          setData(response);
        });
    };

    FazerFetch();
  }, []);

  return (
    <div className="cards">
      {data.map((item) => (
        <div className="card-spell" id={item.Type} key={item.Id}>
          <div className="card-name-spell">
            <h3>{item.Name}</h3>
            <div className="logo">
              <img src={TypeLogo(item.Type)} alt={item.Type}></img>
            </div>
          </div>
          <div className="card-info-spell">
            <ul>
              <li>Incantation: {item.Incantation}</li>
              <li>Type: {item.Type}</li>
              <li>Effect: {item.Effect}</li>
              <li>Light: {item.Light}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Spells;

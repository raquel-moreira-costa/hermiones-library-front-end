import React, { useEffect, useState } from "react";
import Griffyndor from "../icon-grifinoria.svg";
import Ravenclaw from "../icon-corvinal.svg";
import Slytherin from "../icon-sonserina.svg";
import Hufflepuff from "../icon-lufa-lufa.svg";
import Unknow from "../hogwarts-logo.svg";

const Characters = () => {
  const [data, setData] = useState([]);

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

  const Aleatorio = (objArray) => {
    for (let i = 0; i < objArray.length; i++) {
      const random = Math.floor(Math.random() * objArray.length);
      const temp = objArray[random];
      objArray[random] = objArray[i];
      objArray[i] = temp;
    }

    return objArray;
  };

  useEffect(() => {
    const FazerFetch = () => {
      fetch("http://localhost:3001/characters/", {
        method: "get",
        headers: { "Content-type": "application/json" },
      })
        .then((res) => {
          return res.json();
        })
        .then((response) => {
          const resposta = Aleatorio(response);
          setData(resposta);
        });
    };

    FazerFetch();
  }, []);

  return (
    <div className="cards">
      {data.map((item) => (
        <div className="card" id={item.House} key={item.Id}>
          <div className="card-name">
            <h3>{item.Name}</h3>
            <div className="logo">
              <img src={HouseLogo(item.House)} alt={item.House}></img>
            </div>
          </div>
          <div className="infos">
            <div className="card-info">
              <ul>
                <li>Species: {item.Species}</li>
                <li>Blood_status: {item.Blood_status}</li>
                <li>Gender: {item.Gender}</li>
                <li>House: {item.House}</li>
                <li>Birth: {item.Birth}</li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;

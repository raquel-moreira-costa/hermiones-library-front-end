import React from "react";
import Select from "./select";

const Search = (props) => {
  const { getExecucao, getData, getSelect, trocarTroca} = props;

  const FazerFetch = () => {
    console.log(`AAAAAAAAaaaaaa`);
    getData(``);
    let input = document.getElementById("input-search").value;
    let select = document.getElementById("type-route").value;

    getExecucao(input);

    getSelect(select);
    console.log(`SELECTaaaa: `, select);
    console.log(`INPUTaaaa: `, input);
    if (select && input) {
      fetch(`http://localhost:3001/${select}/${input}`, {
        method: "get",
        headers: { "Content-type": "application/json" },
      })
        .then((res) => {
          return res.json();
        })
        .then((response) => {
          console.log(response);
          getData(response);
        });
    }
  };

  const Mostrar = () => {
    FazerFetch();
    trocarTroca("pesquisar");
  };

  return (
    <div>
      <div className="container-search">
        <div className="search">
          <input type="text" id="input-search" placeholder="Search"></input>
          <button id="pesq" onClick={Mostrar}></button>
        </div>
        <div className="select">
          <Select />
        </div>
      </div>
    </div>
  );
};

export default Search;

import React, {useState} from "react";
import Characters from "./Characters";
import Search from "./search";
import SearchAll from "./SearchAll";
import Spells from "./Spells";


const Main = (props) => {
  const { trocar, trocarTroca } = props;
  const [execucao, setExecucao] = useState("");
  const [data, setData] = useState();
  const [select, setSelect] = useState();

  return (
    <main>
      <Search trocarTroca={trocarTroca} getExecucao={setExecucao} getData={setData} getSelect={setSelect}/>
      {trocar === "pesquisar" && execucao && <SearchAll data={data} select={select} />}
      {trocar === "Characters" && <Characters />}
      {trocar === "Spells" && <Spells />}
    </main>
  );
};

export default Main;

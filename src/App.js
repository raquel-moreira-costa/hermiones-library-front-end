import React, {useState} from 'react';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';

function App() {

  const [troca, setTroca] = useState("Characters");
  
  return (
    <div className="App">
      <Header trocarTroca = {setTroca}/>
      <Main trocar = {troca} trocarTroca={setTroca}/>
      <Footer/>
    </div>
  );
}

export default App;

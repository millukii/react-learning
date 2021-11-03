import {useState} from 'react';
import html2canvas from 'html2canvas';

import './App.css';

function App() {
  
  const [linea1, setLinea1]= useState("")
  const [linea2, setLinea2]= useState("")
  const [imagen, setImagen]= useState("")

  const onChangeLinea1 = function(evento){
    setLinea1(evento.target.value)
  }
  const onChangeLinea2 = function(evento){
    setLinea2(evento.target.value)
  }
  const onChangeImagen = function(evento){
    setImagen(evento.target.value)
  }
   const onClickExportar = function (evento) {

    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  }
  return (
    <div className="App">
        <select onChange={onChangeImagen}>
          <option value="miprecioso">Mi precioso</option>
          <option value="nuevoamor">Nuevo amor</option>
          <option value="malasuerte">Mala suerte</option>
          <option value="ponteverga">Ponte verga</option>
          <option value="donramonquecosasno">Don ramon</option>
        </select>
        <input onChange={onChangeLinea1} type="text" placeholder="linea 1"></input>
        <input onChange={onChangeLinea2} type="text" placeholder="linea 2"></input>
        <div className="meme"  id="meme">
          <span>{linea1} </span>
          <span>{linea2} </span>
          <img src={"/images/"+imagen+".jpg"}></img>
           <button onClick={onClickExportar}>Exportar</button>

        </div>
    </div>

  );
}

export default App;

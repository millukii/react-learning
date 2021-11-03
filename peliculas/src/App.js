import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Pelicula from './Pelicula';
import PageWrapper from './PageWrapper';
import Paginacion from './Paginacion';

function App() {

  const [paginaActual, setPaginaActual] = useState(1);
  const [peliculas, setPeliculas]= useState([]);
  const TOTAL_POR_PAGINA = 3;

  const buscarPeliculas = async () => {
      let url = 'https://cors-anywhere.herokuapp.com/https://github.com/millukii/sampla_data/blob/3f45c9e6c184031b40f585a3566297fccca5e64c/movies.json';

      let respuesta = await fetch(url, {
        "method": "GET",
        "headers": {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      })

      let json = await respuesta.json();
      setPeliculas(json)
  }

  buscarPeliculas()
  const cargarPeliculas = () => {
    peliculas = peliculas.slice(
      (paginaActual - 1) * TOTAL_POR_PAGINA,
      paginaActual * TOTAL_POR_PAGINA
    );
  }

  const getTotalPaginas = () => {
    let cantidadTotalDePeliculas = peliculas.length;
    return Math.ceil(cantidadTotalDePeliculas / TOTAL_POR_PAGINA);
  }

  cargarPeliculas();

  return (
    <PageWrapper>

      {peliculas.map(pelicula =>
        <Pelicula titulo={pelicula.titulo} calificacion={pelicula.calificacion}
          director={pelicula.director} actores={pelicula.actores} fecha={pelicula.fecha} duracion={pelicula.duracion}
          img={pelicula.img}>
          {pelicula.descripcion}
        </Pelicula>
      )}

      <Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina) => {
        setPaginaActual(pagina)
      }} />

    </PageWrapper>
  );
}

export default App;
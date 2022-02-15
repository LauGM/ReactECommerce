import {useState, useEffect} from 'react';
import NavBar from './components/NavBar';
// import Card from './components/Card';
import Cards from './components/Cards';

function obtenerDatos() {
  return new Promise(function(resolve, reject) {
      var req = new XMLHttpRequest();
          req.open('GET', 'https://api.itbook.store/1.0/new');
  
          req.onload = function() {
            if (req.status === 200) {
              resolve(JSON.parse(req.response));
            }
            else {
              reject();
            }
          };
  
          req.send();
      });
}

function App() {
  const [misProds,setMisProds]=useState([]);

  useEffect(() => {
    console.log("en el efecto")
    obtenerDatos().then( res => {
      console.log(res);
      const libros=res.books.map(libro => ({imagen:libro.image, nombre:libro.title, isbn:libro.isbn13}));
      setMisProds(libros);
    }).catch(() => {
      console.log('Algo salió mal');
    });
  }, [])

  return (
    <>
      <NavBar />
      {/* <Card max={10} min={1}/> */}
      <Cards productos={misProds} />
    </>
  );
}

export default App;

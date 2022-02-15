import React,{useState, useEffect} from "react";
import '../Card.css';

const CardParaLibro = ({prod,max,min}) => {
    //console.log("Maximo "+max);
    //console.log("Minimo "+min);
    //console.log(prod)
  
    const [cant,setCant]=useState(1);

    const sumar=()=>{
        cant<max ? setCant(cant+1):console.log("Maximo alcanzado");
    }
    const restar=()=>{
        cant>min ? setCant(cant-1):console.log("Minimo alcanzado");
    }
    const agregar=()=>{
        // console.log(prod)
        prod.cantidad=cant;
        if(localStorage.getItem("carro")){
            console.log("hay algo");
            const arrayProds=JSON.parse(localStorage.getItem("carro"));
            // console.log(arrayProds)
            localStorage.setItem("carro",JSON.stringify([...arrayProds, prod]));
            localStorage.setItem("cantElementos",arrayProds.length+1);
        }else{
            localStorage.setItem("carro",JSON.stringify([...[],prod]));
            localStorage.setItem("cantElementos",1);
        }          
    }

    
    useEffect(() => {
        console.log("efecto de vigilancia de cantMax")
        return () => {
            console.log("limpiando")
        }
    }, [cant]);


  return (
    <>
      <div className="card col-md-3">
        <img src={prod.imagen} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{prod.nombre}</h5>
          <p className="card-text">
            {prod.isbn}
          </p>
          <div className="row" style={{display:"flex", alignItems:"center"}}>
            <i className="bi bi-dash-circle col-4" onClick={restar}></i>
            <h3 className="col-4">{cant}</h3>
            <i className="bi bi-plus-circle col-4" onClick={sumar}></i>
          </div>
          <button className="btn btn-primary" onClick={agregar}>Agregar al carro</button>
        </div>
      </div>
    </>  );
};

export default CardParaLibro;
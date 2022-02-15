import React,{useState, useEffect} from "react";
import '../Card.css';
import vinculo from "../assets/imagen.jpeg";

const Card = ({max,min}) => {
    console.log("Maximo "+max);
    console.log("Minimo "+min);
  
    const [cantMax,setCantMax]=useState(1);
    const sumar=()=>{
        cantMax<max ? setCantMax(cantMax+1):console.log("Maximo alcanzado");
    }
    const restar=()=>{
        cantMax>min ? setCantMax(cantMax-1):console.log("Minimo alcanzado");
    }

    
    useEffect(() => {
        console.log("efecto de vigilancia de cantMax")
        return () => {
            console.log("limpiando")
        }
    }, [cantMax]);

  return (
    <>
      <div className="card">
        <img src={vinculo} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Gorra Bear</h5>
          <p className="card-text">
            Excelente para excursiones y caminatas, protector UV
          </p>
          <div className="row" style={{display:"flex", alignItems:"center"}}>
            <i className="bi bi-dash-circle col-4" onClick={restar}></i>
            <h3 className="col-4">{cantMax}</h3>
            <i className="bi bi-plus-circle col-4" onClick={sumar}></i>
          </div>
          <button className="btn btn-primary">Agregar al carro</button>
        </div>
      </div>
    </>  );
};

export default Card;
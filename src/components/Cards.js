import React from 'react'
import CardParaLibro from './CardParaLibro';

const Cards = ({productos}) => {
    //console.log({productos});
    return ( 
        <div className="row">
            {productos.map((p,index) => <CardParaLibro key={index} prod={p} max={10} min={1}/>)}
        </div>
    );
}
 
export default Cards;

//en vez de index podría haber usado p.isbn13 para la key
import React, {useState, useEffect} from 'react';


const NavBar = () => {
    const[cant,setCant]=useState(localStorage.getItem("cantElementos"));

    useEffect(() => {
        setCant(localStorage.setItem("cantElementos",0));
        console.log("primer montaje")
        return () => {
            console.log("limpiando inicial...")
        }
    }, [])

    useEffect(() => {
        setInterval(() => {
            setCant(localStorage.getItem("cantElementos"));
        }, 1000);
        return () => {
            console.log("limpiando re render")
        }
    },[cant]);

    const mostrar=()=>{
        const lista=JSON.parse(localStorage.getItem("carro"));
        console.table(lista);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button type="button" className="btn btn-primary position-relative" onClick={mostrar}>
                    <h2><i className="bi bi-cart"></i></h2>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {cant}
                    </span>
                </button>
                <a className="navbar-brand" href="www.google.com"> Ecommerce Home</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="www.google.com">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="www.google.com">Link</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
}
 
export default NavBar;
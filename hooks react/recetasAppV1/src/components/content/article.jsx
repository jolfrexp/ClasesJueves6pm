import { Link } from "react-router-dom";
export default function Article({receta,id}){
    return(
        <>
            <h2>{receta.titulo}</h2>
            <h5>{receta.fecha}</h5>
            <Link to={`/Recipe/${id}`} className="fakeimg">
                <img src={receta.imagenes[0]} className="img-fluid" />
            </Link>
            <p>{receta.texto}</p>
            {/* <Link className="btn btn-primary" to={`/Recipe/${id}`}>Leer receta</Link> */}
        </>
    );
}
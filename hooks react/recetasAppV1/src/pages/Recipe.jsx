import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Aside from '../components/aside/aside';
import Menu from '../components/menu/menu';
import { infoContext } from '../components/recipeProvider';
import { useContext } from 'react';
export default function recipe() {
    let {id} = useParams();
    let {infoRecipes} = useContext(infoContext)
    console.log(infoRecipes[id])
    let {titulo, subtitulo, texto, imagenes, ingredientes, elaboracion,titulo2,titulo3} = infoRecipes[id]
  return (
    <>
    <Header />
    <Menu />
    <div className="container">
      <div className="row">
        <Aside />
        <div className="col-sm-8">
        <h1>{titulo}</h1>
        <div className="img-receta">
          <img src={imagenes[0]}  />
          <img src={imagenes[1]}  />
        </div>
        <h2>{subtitulo}</h2>
        <p>{texto}</p>
        <h3>{titulo2}</h3>
        <ul>
          {ingredientes.map((ing)=>(<li>{ing}</li>))}
        </ul>
        <div className="img-receta">
        <img src={imagenes[0]}  />
        </div>
        <h3>{titulo3}</h3>
        <ul>
          {elaboracion.map((ing)=>(<li>{ing}</li>))}
        </ul>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}


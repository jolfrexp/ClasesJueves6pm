import React from 'react'
import { useParams } from 'react-router-dom'

export default function recipe() {
    let {id} = useParams();
    console.log(id);
  return (
    <div className="col-sm-8">
        <h1>Preparacion de la receta #{id}</h1>
    </div>
  )
}


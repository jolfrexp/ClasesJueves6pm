import React from 'react'
import perfil from "../assets/img/perfil.png"

export default function ListComents(props) {

  return (
    <div>
      <div className='comentario'>
        <div className="containerimg">
          <img src={perfil} alt="" className='perfil'/>
        </div>
        <div>
        <h4 className="user">{props.user}</h4>
        <h6 className="cont">{props.cont}</h6>
        </div>
      </div>
      <div className='final-coment'>
      <h6 className="hora-pub">{props.time}</h6>
      <h6>like</h6>
      <h6>coment</h6>
      </div>
    </div>
  )
}

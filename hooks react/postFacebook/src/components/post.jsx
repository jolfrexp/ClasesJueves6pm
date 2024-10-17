import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import likes from "../assets/img/like.png"
import coment from "../assets/img/coment.png"
import FormComent from './formComent'
export default function Post() {

    const [like, setLike] = useState(1234)
    const [mostrar, setMostar] = useState(false)
    const [blue, setBlue] = useState(false)

    function touchlike(){
      if(!blue){
      setLike((like) => like + 1)
      setBlue(true)
    }else{
      setLike((like) => like -1)
      setBlue(false)
    }
    }
      useEffect(() => {
                  console.log("Cantidad de likes: " + like)
                  console.log("Like?: " + blue)},[like,blue])
  return (
    <div>
      <div className="container-post">
        
        <div className="post-header">
            <div className="containerimg">
            <img src="https://www.shutterstock.com/image-vector/black-white-goat-head-silhouette-600nw-2342987955.jpg" alt="" />
            </div>
            <h2>Los Goats</h2>
            
        </div><h6>hace 2h</h6>
        <div className="post-content">
          <h4>Goats</h4>
          <div className="containerimg2">
          <img src="https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/B5B9/production/_92212564_gettyimages-185933155.jpg.webp" alt="" />
        </div>
        <p>{like} like's</p>
        <div className='buttons'>
            <button style={{"background-color": blue && "#0015FF",
              "color": blue && "white"
            }} onClick={() => touchlike()}><img src={likes} className='likes'/>{blue ?"":"like"}</button>
            <button onClick={() => setMostar(!mostrar)}><img src={coment} className='likes'/>Coments</button>
            {mostrar &&   
            <div>
            <FormComent/>
            </div>
            }
        </div>
        </div>
        
    </div>
    </div>
  )
}
import React from 'react'
import { useState } from 'react'
export default function Post() {
    const [like, setLike] = useState(0)
    console.log(like)
  return (
    <div>
      <div className="container-post">
        
        <div className="post-footer">
            <div className="containerimg">
            <img src="https://cdn-icons-png.flaticon.com/512/74/74472.png" alt="" />
            </div>
            <h2>Usuario Cualquiera</h2>
            
        </div><span>hace 1h</span>
        <div className="post-content">
          <h2>Meme Cualquiera</h2>
          <div className="containerimg2">
          <img src="https://play-lh.googleusercontent.com/G96enSlpX7sFPov--DPyP1LslXOxv_TV8PzVC0P6luPWytxehb7QBr8EPZfyh54S3w" alt="" />
        </div>
        <p>{like} like's</p>
        <div className='buttons'>
            <button onClick={() => setLike((like) => like + 1)}>👍like</button>
            <button>💬Coments</button>
        </div>
        </div>
        
    </div>
    </div>
  )
}

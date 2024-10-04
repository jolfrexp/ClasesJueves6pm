import React from 'react'
import { useState } from 'react'
import ListComents from './listComents'
export default function FormComent() {
  const [comment, setComment] = useState("")
  const [commentsList, setCommentsList] = useState([])
  const handleCommentChange = (event) => {
    setComment(event.target.value)
  };
  const addComment = () => {
    if(comment.trim() != ""){
      setCommentsList([...commentsList,comment])
      setComment("")
      console.log(commentsList)
    }
  }
  return (
    <div>
      <ul>
        {commentsList.map((com, index) => (
        <ListComents key = {index}
          user = "Desconocido"
          cont = {com}
          time = "hace un momento"
        />))}
      </ul>
      <div className='input-coment'>
      <input type="text" value={comment} onChange={handleCommentChange} className='form-comentario' placeholder='Comentar...' />
      <button onClick={addComment}>comentar</button>
      
      </div>
    </div>
  )
}

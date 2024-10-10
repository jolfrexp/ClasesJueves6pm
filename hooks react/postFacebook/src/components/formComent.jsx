import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import ListComents from './listComents'
import { ListComentarios } from '../App'

export default function FormComent() {
  var LC = useContext(ListComentarios)
  const [comment, setComment] = useState("")
  const [commentsList, setCommentsList] = useState([])
  useEffect(() => {
               setCommentsList(LC) 
                },[])
  useEffect(() => {
                  console.log(commentsList)
                   },[commentsList])

  const ChangeInput = (event) => {
    setComment(event.target.value)
  };
  const addComment = () => {
    if(comment.trim() != ""){
      setCommentsList([...commentsList, {user:"Invitado",
        cont : comment,
        time : "Hace un momento"
      }])
      setComment("")
    }
  }
  return (
    <div>
      <ul>
        {commentsList.map((commentsList, index) => (
        <ListComents key = {index}
          user = {commentsList.user}
          cont = {commentsList.cont}
          time = {commentsList.time}
        />))}
      </ul>
      <div className='input-coment'>
      <input type="text" value={comment} onChange={ChangeInput} className='form-comentario' placeholder='Comentar...' />
      <button onClick={addComment}><h6>comentar</h6></button>
      
      </div>
    </div>
  )
}

import ListComents from './components/listComents'
import FormComent from './components/formComent'
import Post from './components/post'
import './App.css'
import { createContext, useState } from 'react'
export let ListComentarios = createContext()
function App() {
  const [commentsList, setCommentsList] = useState([
    {user:"Jolfre",
     cont :"Altos cracks lo mejor del futbol",
     time:"30m"},
     { user : "Ana",
      cont : "Doy las gracias por haberlos visto jugar❤️",
      time : "20m"},
      {user :"Raul",
        cont : "Cracks absolutos",
        time : "1h"}
      ])

  return (
    <>
      <ListComentarios.Provider value = {commentsList} >
      <Post></Post>
      </ListComentarios.Provider>
    </>
  )
}

export default App
// 
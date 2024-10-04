import { color } from "../App";
import { useContext } from "react";
export default function CambiarColor() {
    let valorColor = useContext(color);
    console.log(valorColor);
    function CC() {
        valorColor = valorColor == "claro"? "oscuro" : "claro";
        console.log(valorColor);
  
        
    }
  return (
    <div>
      <button style={{"backgroundColor": valorColor  == "claro" ? "beige" : "black",
      "color": valorColor == "claro" ? "black" : "white"
      }} onClick={() => CC()}>Cambiar</button>
    </div>
  )
}


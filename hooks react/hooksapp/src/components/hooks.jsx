import { useState, useEffect , useContext} from "react"
export default function Hooks(){
    // console.log(useState()) muestra que trae un array [undefined, function]
    const [count, setCount] = useState(0)//Use state con valores
    const [mostrar, setMostar] = useState(false)//Use state con boolean
    useEffect(() => {
        console.log("Estado Contador: " + count)
        console.log("Mostrar: " + mostrar)
        // return ()=>{
        //     console.log("Mostrar: " + mostrar)
        // }
        // Este código se ejecuta cada vez que se renderiza el componente Hooks
        // Se puede usar para realizar operaciones asíncronas, inicializar variables, etc.
        // Los efectos deben ser confiables y no deben alterar el estado del componente
        // De lo contrario, puede causar bugs y rendimientos inesperados
        // Se puede usar useEffect para realizar tareas de limpieza, cancelación de tareas asíncronas, etc.
        // Ejemplos:
        // - Cargar datos asíncronos
        // - Actualizar el estado con datos obtenidos de una API
        // - Limpiar recursos cuando el componente se desmonta
        // - etc.

    },[count, mostrar]) //en el array simpre debe estar la variable
    return(
        <>  
            {/* ejemplo 1 */}
            <div className="contenedor">
            <span>{count}</span>
            <button onClick={() => setCount((count) => count + 1)}>👍Likes</button>
            <button onClick={() => setCount((count) => count - 1)}>😒Dislikes</button>
            </div>
            {/* ejemplo 2 */}
            <button onClick={() => setMostar(!mostrar)}>Mostrar</button>
            {mostrar && <div>Hola</div>}{/* ejemplo mas simplificado */}
            {/* {mostrar == true ? <div>Hola</div> : ""} */}
            {/* ejemplo 3 */}
            
        </>
    )
}
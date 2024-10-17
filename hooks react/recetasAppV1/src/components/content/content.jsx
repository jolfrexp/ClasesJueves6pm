import Article from "./article";
import { useContext,useEffect, useState } from "react";
import recetas from "./../../../public/datos.json"
import { infoContext } from "../recipeProvider";
let {Arroces,Pastas,Postres,Ensaladas,Sopas} = recetas
let recipesData = [...Arroces,...Pastas,...Postres,...Ensaladas,...Sopas]
let recipesRandom = recipesData.sort(()=>Math.random() - 0.5)
export default function Content() {

let {setInfoRecipes} = useContext(infoContext)
useEffect(()=>{
    setInfoRecipes(recipesData)

},[])
    let [dataVisible,setDataVisible] = useState(5);
    let loadRecipes = () =>{
        setDataVisible((prev)=>(prev + 5))
    }
    return(
        <>
        <div className="col-sm-8">
            {recipesRandom.slice(0,dataVisible).map((receta,i)=><Article key={i} id={i} receta={receta}></Article>)}
            {dataVisible < recipesData.length && <button onClick={loadRecipes}>Cargar mas</button>}
        </div>

        </>
    )
}
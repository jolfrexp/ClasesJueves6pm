import {createContext,useState } from "react"
let infoContext = createContext();
let RecipesProvider = ({children}) =>{
    let [infoRecipes,setInfoRecipes] = useState("hola");
    return(
        <infoContext.Provider value ={{infoRecipes,setInfoRecipes}} >
            {children}
        </infoContext.Provider>
    );
}

export {infoContext, RecipesProvider}

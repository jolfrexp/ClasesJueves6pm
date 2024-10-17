import { Link,NavLink } from "react-router-dom"
import { useState } from "react"
import recetas from "./../../../public/datos.json"


export default function Menu() {
  const allRecipes = [...recetas.Arroces,...recetas.Pastas,...recetas.Ensaladas,...recetas.Postres,...recetas.Sopas]
  console.log(allRecipes)
  const [searchTerm, setSearchTerm] = useState("")
  const filteredProducts = allRecipes.filter(receta => receta.titulo.toLowerCase().includes(searchTerm.toLowerCase()))
  const [isDropdownVisible, setIsDropDownVisible] = useState(false)
    return(
        <nav className="sticky-top navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Ours">Ours</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Recipes">Recipes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">Contact</Link>
            </li>
          </ul>
          <div>
          <div className="input-group flex-nowrap">
            
                {/* <span className="input-group-text" id="addon-wrapping">
                    <svg className="icono-buscador bi bi-search" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>
                </span>   */}
                 <div className="row">
                  <div className="col-md-20 offset-md-3">        
                <input type="text" className="form-control" placeholder="Recipe" value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value);
                  setIsDropDownVisible(e.target.value != "")}} aria-label="Username" aria-describedby="addon-wrapping"
                   />
                
                    <ul className="list-group position-absolute w-100 mt-1">
                      {isDropdownVisible && (filteredProducts.length > 0 ? (filteredProducts.map((product,index)=><li key={index} className="list-group-item">{product.titulo}</li>)):(<li className="list-group-item">No se encontraron productos</li>))}
                    </ul>
                  </div>

                </div>           
            </div>
          </div>
        </div>
      </nav>
    )
}
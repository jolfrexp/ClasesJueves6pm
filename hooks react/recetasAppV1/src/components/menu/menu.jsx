import { Link,NavLink } from "react-router-dom"
export default function Menu() {
    return(
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
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
                <span className="input-group-text" id="addon-wrapping">
                    <svg className="icono-buscador bi bi-search" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>
                </span>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
          </div>
        </div>
      </nav>
    )
}
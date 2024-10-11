import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Aside from "./components/aside/aside";
import Menu from "./components/menu/menu";
import NotFound from "./pages/notFound";
import Ours from "./pages/ours";  
import Recipe from "./pages/Recipe";
import Recipes from "./pages/Recipes";
import Contact from "./pages/Contact"; 
import Home from "./pages/home";
import "./assets/estilos.css";
import { Route,Routes } from "react-router-dom";

function App() {
  return (
    <>
        <Header />
        <Menu />
        <div className="container">
          <div className="row">
            <Aside />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Ours" element={<Ours/>} />
              <Route path="/Recipes" element={<Recipes />} />
              <Route path="/Recipe/:id" element={<Recipe />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
        <Footer />
    </>
  )
}

export default App

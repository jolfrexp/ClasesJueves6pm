import NotFound from "./pages/notFound";
import Ours from "./pages/ours";  
import Recipe from "./pages/Recipe";
import Recipes from "./pages/Recipes";
import Contact from "./pages/Contact"; 
import Category from "./pages/category";
import Home from "./pages/home";
import "./assets/estilos.css";
import { Route,Routes } from "react-router-dom";

import { RecipesProvider } from "./components/recipeProvider";


function App() {
  return (
    <>

        <RecipesProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Ours" element={<Ours/>} />
              <Route path="/Recipes" element={<Recipes />} />
              <Route path="/Recipe/:id" element={<Recipe />} />
              <Route path="/Category/:category" element={<Category />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
        </RecipesProvider>

    </>
  )
}

export default App

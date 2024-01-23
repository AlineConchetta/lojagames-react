
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import ListarCategoria from "./components/categoria/listarCategoria/ListarCategoria"
import FormCategoria from "./components/categoria/formCategoria/FormCategoria"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/NavBar"


function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListarCategoria />} />
              <Route path="/cadastrarcategorias" element={<FormCategoria />} />
              <Route path="/editarcategorias/:id" element={<FormCategoria />} />
              <Route path="/deletarcategorias/:id" element={<FormCategoria/>} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App;
import { Routes, Route } from "react-router-dom";
import MenuSuperior from "./componentes/MenuSuperior";
import InclusaoLivros from "./componentes/InclusaoLivros";
import Manutensao from "./componentes/Manutensao";
import ResumoLivros from "./componentes/ResumoLivros";
function App() {
  return (
   <>
   <MenuSuperior />
  <Routes>
    <Route path="/" element={<InclusaoLivros />} />
    <Route path="manut" element={<Manutensao />} />
    <Route path="resumo" element={<ResumoLivros />} />

  </Routes>

  </>
  )
}

export default App;

import {  BrowserRouter,  Routes,  Route } from "react-router-dom";
import Dashboard from "./layout/Dashboard";
import Login from "./layout/Login";
import FormularioLogin from "./pages/FormularioLogin";
import LandingPage from "./pages/LandingPage";
import ListarPacientes from "./pages/ListarPacientes";
import MostrarPacientes from "./pages/MostrarPacientes";
import NuevoPaciente from "./pages/NuevoPasiente";
import ActualizarPaciente from "./pages/ActualizarPaciente";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LandingPage />}>
        </Route>

        <Route path="/login" element={<Login />}>
          <Route index element={<FormularioLogin/>}/>
        </Route>

        <Route path="/pacientes" element={<Dashboard />}>
          <Route index element={<ListarPacientes/>}/>
          <Route path="detalle/:id" element={<MostrarPacientes/>} />
          <Route path="nuevo" element={<NuevoPaciente />} />
          <Route path="editar/:id" element={<ActualizarPaciente/>} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
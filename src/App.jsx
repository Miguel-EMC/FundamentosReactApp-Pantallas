import {  BrowserRouter,  Routes,  Route } from "react-router-dom";
import Dashboard from "./layout/Dashboard";
import Login from "./layout/Login";
import FormularioLogin from "./pages/FormularioLogin";
import LandingPage from "./pages/LandingPage";
import ListarVehiculo from "./pages/ListarVehiculo";
import MostrarVehiculo from "./pages/MostrarVehiculo";
import NuevoVehiculo from "./pages/NuevoVehiculo";
import ActualizarVehiculo from "./pages/ActualizarVehiculo";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LandingPage />}>
        </Route>

        <Route path="/login" element={<Login />}>
          <Route index element={<FormularioLogin/>}/>
        </Route>

        <Route path="/vehiculos" element={<Dashboard />}>
          <Route index element={<ListarVehiculo/>}/>
          <Route path="detalle/:id" element={<MostrarVehiculo/>} />
          <Route path="nuevo" element={<NuevoVehiculo />} />
          <Route path="editar/:id" element={<ActualizarVehiculo/>} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
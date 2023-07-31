import "./App.css";
import Formulario from "./views/form";

// react router dom
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./views/login";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Formulario />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Navigate to={'/'}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

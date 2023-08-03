import "./App.css";
import Transition from "./components/animation/transition";
import Form from "./components/form";

import Formulario from "./views/form";

// react router dom
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./views/login";
import TableList from "./views/TableList";
import InitialForm from "./components/initialForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Formulario />} />
        <Route path="/initialForm" element={<InitialForm />} />
        <Route path="login" element={<Login />} />
        <Route path="list" element={<TableList />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

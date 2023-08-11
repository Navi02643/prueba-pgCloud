import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "../App.tsx";
import { Login } from "../components/Components.tsx";

export const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home/:id" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate replace to="/home" />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

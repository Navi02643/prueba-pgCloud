import { useContext } from "react";
import { GlobalContext } from "../../context/Global_context"; // Asegúrate de importar el contexto adecuadamente

export const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useContext(GlobalContext); // Obtén los valores del contexto

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button onClick={toggleTheme}>
      Cambiar a {darkMode ? "Tema Claro" : "Tema Oscuro"}
    </button>
  );
};

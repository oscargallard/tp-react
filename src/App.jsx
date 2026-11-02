// useState: es la "memoria" del componente, indica en qué página estamos
import { useState } from "react";
import PaginaApi from "./componentes/PaginaApi";
import PaginaLocal from "./componentes/PaginaLocal";
import PaginaContacto from "./componentes/PaginaContacto";

// COMPONENTE PRINCIPAL QUE UNE TODO
function App() {
  // Memoria para saber qué página estamos viendo. Por defecto empieza en "api"
  const [paginaActual, setPaginaActual] = useState("api");

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", maxWidth: "960px", margin: "0 auto" }}>

      {/* BARRA DE NAVEGACIÓN (Menú superior) */}
      <nav style={{ display: "flex", gap: "10px", marginBottom: "20px", borderBottom: "2px solid #eee", paddingBottom: "15px" }}>
        {/* Al hacer clic (onClick), cambiamos el valor de la memoria "paginaActual" */}
        <button onClick={() => setPaginaActual("api")} style={{ padding: "10px" }}>
          1. Inicio (API)
        </button>
        <button onClick={() => setPaginaActual("local")} style={{ padding: "10px" }}>
          2. Productos (Array Local)
        </button>
        <button onClick={() => setPaginaActual("contacto")} style={{ padding: "10px" }}>
          3. Contacto y Mapa
        </button>
      </nav>

      {/* CONTENIDO CAMBIANTE SEGÚN EL BOTÓN PRESIONADO */}
      {paginaActual === "api" && <PaginaApi />}
      {paginaActual === "local" && <PaginaLocal />}
      {paginaActual === "contacto" && <PaginaContacto />}

    </div>
  );
}

export default App;

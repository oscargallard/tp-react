// useEffect: para pedir los datos a la API automáticamente cuando se abre la página
import { useState, useEffect } from "react";

// DATOS DESDE UNA API PÚBLICA
function PaginaApi() {
  // Creamos una lista vacía [] para guardar los personajes
  const [personajes, setPersonajes] = useState([]);

  // useEffect ejecuta este código una sola vez cuando el componente aparece en pantalla
  useEffect(() => {
    // Pedimos datos a la API pública de Dragon Ball
    fetch("https://dragonball-api.com/api/characters")
      // Convertimos la respuesta a formato JSON
      .then((respuesta) => respuesta.json())
      // Guardamos los primeros 4 personajes en la memoria
      .then((datos) => setPersonajes(datos.items.slice(0, 4)));
  }, []);

  return (
    <div>
      <h2>Personajes de Dragon Ball Z (API)</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {personajes.map((item) => (
          <div
            key={item.id}
            style={{ border: "1px solid #FF964F", padding: "10px", borderRadius: "8px", width: "200px", textAlign: "center" }}
          >
            {/* Dato 1: Imagen */}
            <img
              src={item.image}
              alt={item.name}
              style={{ height: "220px", objectFit: "contain" }}
            />
            {/* Dato 2: Nombre */}
            <h3>{item.name}</h3>
            {/* Dato 3: Raza */}
            <p><strong>Raza:</strong> {item.race}</p>
            {/* Dato 4: Nivel de Ki */}
            <p><strong>Ki:</strong> {item.ki}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PaginaApi;

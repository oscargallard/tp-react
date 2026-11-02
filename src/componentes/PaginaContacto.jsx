// FORMULARIO DE CONTACTO Y MAPA
function PaginaContacto() {
  return (
    <div>
      <h2>Contacto y Ubicación</h2>

      {/* Contenedor flexible para poner el formulario y el mapa uno al lado del otro */}
      <div style={{ display: "flex", gap: "30px", flexWrap: "wrap", alignItems: "flex-start" }}>

        {/* LADO IZQUIERDO: Formulario funcional conectado a FormSubmit */}
        <form
          action="https://formsubmit.co/luis.oskar21@gmail.com"
          method="POST"
          style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}
        >
          <label>Tu Nombre:</label>
          <input type="text" name="nombre" required placeholder="Ej: Juan Pérez" style={{ padding: "8px" }} />

          <label>Tu Correo:</label>
          <input type="email" name="email" required placeholder="nombre@email.com" style={{ padding: "8px" }} />

          <label>Mensaje:</label>
          <textarea name="mensaje" rows="4" required placeholder="Escribe tu consulta aquí..." style={{ padding: "8px" }}></textarea>

          <button type="submit" style={{ padding: "10px", backgroundColor: "#006596", color: "white", border: "none", cursor: "pointer" }}>
            Enviar Mensaje
          </button>
        </form>

        {/* LADO DERECHO: Mapa embebido de Google Maps */}
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4627.111308571266!2d-57.93750058680581!3d-34.909924728142066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e6143077af85%3A0xa466b8a8cd326a29!2sMuseo%20de%20Ciencias%20Naturales%20de%20La%20Plata!5e0!3m2!1ses!2sar!4v1793243392784!5m2!1ses!2sar"
            width="400"
            height="300"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin">
          </iframe>
        </div>

      </div>
    </div>
  );
}

export default PaginaContacto;

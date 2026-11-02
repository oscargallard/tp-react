// DATOS DESDE UN ARRAY LOCAL
function PaginaLocal() {
  // Array de objetos locales con ID, nombre del producto, precio y una imagen
  const productosLocales = [
    {
      id: 1,
      nombre: "Teclado Mecánico",
      precio: "$75.000",
      imagen: "https://redragon.es/content/uploads/2021/04/YAMA-BLACK.png?w=300"
    },
    {
      id: 2,
      nombre: "Mouse Gamer",
      precio: "$55.000",
      imagen: "https://redragon.es/content/uploads/2026/06/K1NG-M999.png?w=300"
    },
    {
      id: 3,
      nombre: "Monitor 24 Pulgadas",
      precio: "$309.000",
      imagen: "https://sampietroar.vtexassets.com/arquivos/ids/159261-800-auto?w=300"
    },
    {
      id: 4,
      nombre: "Auriculares Inalámbricos",
      precio: "$125.000",
      imagen: "https://www.sony.com.ar/image/406fdd3cc9e49e28002ad8baef9185c8?fmt=png-alpha?w=300"
    }
  ];

  return (
    <div>
      <h2>Lista de Productos</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {/* Igual que antes, transformamos cada objeto de la lista en una tarjeta visual */}
        {productosLocales.map((producto) => (
          <div
            key={producto.id}
            style={{ border: "1px solid #80EF80", padding: "10px", borderRadius: "8px", width: "200px" }}
          >
            <img src={producto.imagen} alt={producto.nombre} style={{ width: "100%", height: "130px", objectFit: "cover", borderRadius: "8px" }} />
            <h3>{producto.nombre}</h3>
            <p>Precio: {producto.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PaginaLocal;

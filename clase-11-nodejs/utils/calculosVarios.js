function calcularPrecioConIva(precio) {
  const precio_final = precio * 1.21;
  return {
    iva: 21,
    precioOriginal: precio,
    precio_final,
  };
}

module.exports = {
  nombre: "Pepe",
  calcularPrecioConIva: calcularPrecioConIva,
};

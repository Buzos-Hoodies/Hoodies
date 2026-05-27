function comprar(producto) {
  const numero = "573001234567"; // cambia por tu número
  const mensaje = `Hola, quiero comprar el ${producto} por $50.000`;
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  
  window.open(url, "_blank");
}

// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "zapato-rojo.jpg"}
]
//Se corrigio el getElementsByName cambiando el Name por Id y cambiamos el codigo de $i para agregar el id de input
const li = document.getElementById("lista-de-productos")
const $i = document.getElementById("filtro");

function displayProductos(productos) {
  // Limpiamos la lista de productos antes de mostrar los nuevos
  li.innerHTML = '';

  // Iteramos sobre los productos y creamos el contenido HTML
  productos.forEach(producto => {
  var d = document.createElement("div")
  d.classList.add("producto")

  var ti = document.createElement("p")
  ti.classList.add("titulo")
  ti.textContent = productos.nombre
  
  var imagen = document.createElement("img");
  imagen.setAttribute('src', productos.img);

  d.appendChild(ti)
  d.appendChild(imagen)

  li.appendChild(d)
});
}

displayProductos(productos);

// Seleccionamos el botón de filtro
const botonDeFiltro = document.querySelector("button");

// Agregamos el evento de clic al botón para filtrar los productos
botonDeFiltro.onclick = function() {
  const textoFiltro = $i.value.toLowerCase(); // Convertimos a minúsculas para evitar errores de mayúsculas

  // Filtramos los productos según el texto ingresado
  const productosFiltrados = productos.filter(producto => 
    producto.tipo.includes(textoFiltro) || producto.color.includes(textoFiltro)
  );

  // Mostramos los productos filtrados
  displayProductos(productosFiltrados);
};
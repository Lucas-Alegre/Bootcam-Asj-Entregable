window.addEventListener("DOMContentLoaded", (event) => {
  // Toggle the side navigation
  const sidebarToggle = document.body.querySelector("#sidebarToggle");
  if (sidebarToggle) {
    // Uncomment Below to persist sidebar toggle between refreshes
    // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
    //     document.body.classList.toggle('sb-sidenav-toggled');
    // }
    sidebarToggle.addEventListener("click", (event) => {
      event.preventDefault();
      document.body.classList.toggle("sb-sidenav-toggled");
      localStorage.setItem(
        "sb|sidebar-toggle",
        document.body.classList.contains("sb-sidenav-toggled")
      );
    });
  }

  //console.log(JSON.parse(localStorage.getItem("proveedores")));
  //alert(proveedores);

  // alert("Hola");
});
let submit = document.getElementById("submit");
let nombre = document.getElementById("inputNombre");
let apellido = document.getElementById("inputApellido");
let cuit = document.getElementById("inputCuil");
let direccion = document.getElementById("inputDireccion");
let codigoUnico = document.getElementById("inputCodigoUnico");
let email = document.getElementById("inputEmail");

let productos = [];
let productoStorage = JSON.parse(localStorage.getItem("productos"));

if (productoStorage) {
  productos = productoStorage;
}
submit.addEventListener("click", (e) => {
  e.preventDefault();
  let datosProveedor = {
    codigo: nombre.value,
    proveedor: apellido.value,
    nombreProducto: cuit.value,
    categoria: direccion.value,
    descripcion: codigoUnico.value,
    precio: email.value,
  };
  productos.push(datosProveedor);
  localStorage.setItem("productos", JSON.stringify(productos));
  console.log(JSON.parse(localStorage.getItem("productos")));
  location.href = "formProductos.html";
});

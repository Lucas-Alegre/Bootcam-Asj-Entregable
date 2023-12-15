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
let inputOrdenCompra = document.getElementById("inputOrdenCompra");
let inputFechaEmision = document.getElementById("inputFechaEmision");
let inputFechaEntrega = document.getElementById("inputFechaEntrega");
let inputDireccionEntrega = document.getElementById("inputDireccionEntrega");
let inputProveedor = document.getElementById("inputProveedor");
let inputProductos = document.getElementById("inputProductos");
let inputCantidad = document.getElementById("inputCantidad");
let inputTotal = document.getElementById("inputTotal");
let ordenCompra = [];

let proveedoresStorage = JSON.parse(localStorage.getItem("ordenCompra"));

if (proveedoresStorage) {
  ordenCompra = proveedoresStorage;
}
submit.addEventListener("click", (e) => {
  e.preventDefault();
  let datosProveedor = {
    numOrdenCompra: inputOrdenCompra.value,
    fechaEmision: inputFechaEmision.value,
    fechaEntrega: inputFechaEntrega.value,
    direccionEntrega: inputDireccionEntrega.value,
    proveedor: inputProveedor.value,
    productos: inputProductos.value,
    cantidad: inputCantidad.value,
    total: inputTotal.value,
  };
  ordenCompra.push(datosProveedor);
  localStorage.setItem("ordenCompra", JSON.stringify(ordenCompra));
  console.log(JSON.parse(localStorage.getItem("ordenCompra")));
  location.href = "formOrdenCompra.html";
});

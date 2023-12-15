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
let fechaEmision = document.getElementById("inputFechaEmision");
let fechaEntrega = document.getElementById("submit");
let informacionEntreega = document.getElementById("inputDireccionEntrega");
let proveedor = document.getElementById("inputProveedor");
let productoOriginal = document.getElementById("inputProductos");
let cantidad = document.getElementById("inputCantidad");
let total = document.getElementById("inputTotal");
let nombreyCodigom = document.getElementById("nombreyCodigom");

let productos = [];
let proveedoresStorage = JSON.parse(localStorage.getItem("ordenCompra"));
let editarProveedoresStorage = JSON.parse(
  localStorage.getItem("editarOrdenDeCompra")
);
nombreyCodigom.innerText = `Editar producto de codigo ${editarProveedoresStorage[0].numOrdenCompra}`;

if (proveedoresStorage) {
  productos = proveedoresStorage;
}
submit.addEventListener("click", (e) => {
  e.preventDefault();
  let datosProveedor = {
    numOrdenCompra: editarProveedoresStorage[0].numOrdenCompra,
    fechaEmision: fechaEmision.value,
    fechaEntrega: fechaEntrega.value,
    direccionEntrega: informacionEntreega.value,
    proveedor: proveedor.value,
    productos: productoOriginal.value,
    cantidad: cantidad.value,
    total: total.value,
  };

  let proveedorEditado = [];
  proveedorEditado = JSON.parse(localStorage.getItem("ordenCompra"));
  proveedorEditado = proveedorEditado.filter(
    (proveedor) =>
      proveedor.numOrdenCompra != editarProveedoresStorage[0].numOrdenCompra
  );
  proveedorEditado.push(datosProveedor);
  //proveedores.push(datosProveedor);
  localStorage.setItem("ordenCompra", JSON.stringify(proveedorEditado));
  console.log(JSON.parse(localStorage.getItem("ordenCompra")));
  location.href = "formProductos.html";
});

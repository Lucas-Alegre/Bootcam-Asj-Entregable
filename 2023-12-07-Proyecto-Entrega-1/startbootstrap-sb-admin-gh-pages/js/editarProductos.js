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
let proveedor = document.getElementById("inputApellido");
let submit = document.getElementById("submit");
let nombreProducto = document.getElementById("inputCuil");
let categoria = document.getElementById("inputDireccion");
let descripcion = document.getElementById("inputCodigoUnico");
let precio = document.getElementById("inputEmail");
let nombreyCodigom = document.getElementById("nombreyCodigom")

let productos = [];
let proveedoresStorage = JSON.parse(localStorage.getItem("productos"));
let editarProveedoresStorage = JSON.parse(
  localStorage.getItem("editarProducto")
);
nombreyCodigom.innerText = `Editar producto de codigo ${editarProveedoresStorage[0].codigo}`;

if (proveedoresStorage) {
  productos = proveedoresStorage;
}
submit.addEventListener("click", (e) => {
  e.preventDefault();
  let datosProveedor = {
    codigo: editarProveedoresStorage[0].codigo,
    proveedor: proveedor.value,
    nombreProducto: nombreProducto.value,
    categoria: categoria.value,
    descripcion: descripcion.value,
    precio: precio.value,
  };

  let proveedorEditado = [];
  proveedorEditado = JSON.parse(localStorage.getItem("productos"));
  proveedorEditado = proveedorEditado.filter(
    (proveedor) => proveedor.codigo != editarProveedoresStorage[0].codigo
  );
  proveedorEditado.push(datosProveedor);
  //proveedores.push(datosProveedor);
  localStorage.setItem("productos", JSON.stringify(proveedorEditado));
  console.log(JSON.parse(localStorage.getItem("productos")));
  location.href = "formProductos.html";
});

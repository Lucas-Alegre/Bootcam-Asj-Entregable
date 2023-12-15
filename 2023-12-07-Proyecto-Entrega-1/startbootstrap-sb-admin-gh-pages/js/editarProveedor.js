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
let nombreyCodigom = document.getElementById("idCodigo");
let submit = document.getElementById("submit");
let nombre = document.getElementById("inputNombre");
let apellido = document.getElementById("inputApellido");
let cuit = document.getElementById("inputCuil");
let direccion = document.getElementById("inputDireccion");
let rubro = document.getElementById("inputRubro");
let razonSocial = document.getElementById("inputRazonSocial");
let codigoUnico = document.getElementById("inputCodigoUnico");
let email = document.getElementById("inputEmail");
let proveedores = [];
let proveedoresStorage = JSON.parse(localStorage.getItem("proveedores"));
let editarProveedoresStorage = JSON.parse(
  localStorage.getItem("editarProveedor")
);
nombreyCodigom.innerText = `Editar proveedor ${editarProveedoresStorage[0].name} ${editarProveedoresStorage[0].apellido} de codigo ${editarProveedoresStorage[0].codigoUnico}`;
nombre.setAttribute("placeholder", editarProveedoresStorage[0].name);
if (proveedoresStorage) {
  proveedores = proveedoresStorage;
}
submit.addEventListener("click", (e) => {
  e.preventDefault();
  let datosProveedor = {
    name: nombre.value,
    apellido: apellido.value,
    cuit: cuit.value,
    direccion: direccion.value,
    rubro: rubro.value,
    razonSocial: razonSocial.value,
    codigoUnico: editarProveedoresStorage[0].codigoUnico,
    email: email.value,
  };
  let proveedorEditado = [];
  proveedorEditado = JSON.parse(localStorage.getItem("proveedores"));
  proveedorEditado = proveedorEditado.filter(
    (proveedor) =>
      proveedor.codigoUnico != editarProveedoresStorage[0].codigoUnico
  );
  proveedorEditado.push(datosProveedor);
  //proveedores.push(datosProveedor);
  localStorage.setItem("proveedores", JSON.stringify(proveedorEditado));
  console.log(JSON.parse(localStorage.getItem("proveedores")));
  location.href = "formProveedor.html";
});

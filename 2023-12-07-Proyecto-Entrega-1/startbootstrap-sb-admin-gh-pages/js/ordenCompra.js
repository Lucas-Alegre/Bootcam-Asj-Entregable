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

  /**
   * <tr>
                                              <td>Tiger Nixon</td>
                                              <td>System Architect</td>
                                              <td>Edinburgh</td>
                                              <td><button class="btn btn-danger">Eliminar</button></td>
                                          </tr>
   * 
   */
  //let arrayProductos = JSON.parse(localStorage.getItem("proveedores"));
  let arrayProductos = JSON.parse(localStorage.getItem("ordenCompra"));

  let contenedorCar = document.getElementById("listaProveedores");

  for (let i = 0; i < arrayProductos.length; i++) {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");
    const td6 = document.createElement("td");
    const a = document.createElement("button");
    const b = document.createElement("button");

    a.className = "btn btn-danger quitar";
    a.innerText = "Eliminar";
    a.id = `${arrayProductos[i].numOrdenCompra}`;

    b.className = "btn btn-dark agregar";
    b.innerText = "Editar";
    b.id = `${arrayProductos[i].numOrdenCompra}`;

    td1.innerText = `${arrayProductos[i].numOrdenCompra}`;
    td2.innerText = `${arrayProductos[i].productos}`;
    td3.innerText = `${arrayProductos[i].cantidad}`;
    td4.innerText = `${arrayProductos[i].proveedor}`;
    td5.innerText = `${arrayProductos[i].total}`;

    td6.appendChild(a);
    td6.appendChild(b);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);

    contenedorCar.appendChild(tr);
  }
  let filtrar = [];
  let arrayProductosAux = JSON.parse(localStorage.getItem("ordenCompra"));

  let scar = document.getElementsByClassName("quitar");

  for (let i = 0; i < scar.length; i++) {
    scar[i].addEventListener("click", () => {
      filtrar = arrayProductosAux.filter(
        (producto) => scar[i].id != producto.numOrdenCompra
      );
      localStorage.setItem("ordenCompra", JSON.stringify(filtrar));
      location.href = "ordenCompra.html";
    });
  }

  let filtroEditar = [];
  let arrayProductosAux2 = JSON.parse(localStorage.getItem("ordenCompra"));

  let editar = document.getElementsByClassName("agregar");

  for (let i = 0; i < editar.length; i++) {
    editar[i].addEventListener("click", () => {
      filtroEditar = arrayProductosAux2.filter(
        (producto) => editar[i].id === producto.numOrdenCompra
      );

      if (filtroEditar[0]) {
        localStorage.setItem(
          "editarOrdenDeCompra",
          JSON.stringify(filtroEditar)
        );
        location.href = "editarOrdenCompra.html";
      } else {
        location.href = "index.html";
      }
    });
  }
});

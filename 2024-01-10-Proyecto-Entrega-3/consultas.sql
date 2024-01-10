--1 Obtener todos los productos, mostrando nombre del producto, categoría, proveedor (razón social y codigo proveedor), precio.
SELECT p.prod_nameProducto, c.cat_nombre, prov.razonSocial, prov.codigo, p.prod_precio FROM productos p
join categoria c ON  p.cat_id=c.cat_id
join proveedor prov ON  p.proveedor_id=prov.id;


--2 En el listado anterior, además de los datos mostrados, traer el campo imagen aunque el producto NO tenga una. Sino tiene imagen, mostrar "-".
SELECT p.prod_nameProducto, c.cat_nombre, prov.razonSocial, prov.codigo, p.prod_precio, ISNULL(p.prod_imagen, '-') FROM productos p
join categoria c ON  p.cat_id=c.cat_id
join proveedor prov ON  p.proveedor_id=prov.id;


-- 3 Mostrar los datos que se pueden modificar (en el front) del producto con ID = 2.
SELECT p.prod_nameProducto, p.prod_descripcion, p.prod_imagen, p.prod_precio, p.cat_id, p.proveedor_id FROM productos p
where p.prod_id=2;


--4 Listar todo los proveedores cuyo teléfono tenga la característica de Córdoba o que la provincia sea igual a alguna de las 3 con más proveedores. 
SELECT * FROM proveedor p
WHERE p.telefono like '351%';


--5 Traer un listado de todos los proveedores que no hayan sido eliminados , y ordenados por razon social, codigo proveedor 
--  y fecha en que se dió de alta ASC. De este listado mostrar los datos que correspondan con su tabla del front.
SELECT p.codigo, p.cond_iva_id, p.nombreProveedor, p.razonSocial, p.sitioWeb, p.prov_created_at FROM proveedor p
where p.deleted_at<1
ORDER BY p.razonSocial;

--6 Obtener razon social, codigo proveedor, imagen, web, email, teléfono y los datos del contacto del proveedor con más ordenes de compra cargadas.
select top 1 COUNT(ord.estado_id) as cantidad, p.razonSocial, p.codigo, p.imagen, p.sitioWeb from proveedor p
join ordenCompra ord ON ord.proveedor_id= p.id
group by p.razonSocial, p.codigo, p.imagen, p.sitioWeb
order by cantidad desc;

--7 Mostrar la fecha emisión, nº de orden, razon social y codigo de proveedor, y la cantidad de productos de cada orden.


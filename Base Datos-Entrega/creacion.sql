CREATE DATABASE gestionEcomerce;
----------------------------------------------------------------------
CREATE TABLE pais(
pais_id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
nombre VARCHAR(50) not null
)

CREATE TABLE provincia(
prov_id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
nombre VARCHAR(50) not null,
pais_id INT not null
FOREIGN KEY (pais_id) REFERENCES pais (pais_id)
)

CREATE TABLE localidad(
loc_id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
nombre VARCHAR(50) not null,
prov_id INT not null
FOREIGN KEY (prov_id) REFERENCES provincia (prov_id)
)

CREATE TABLE direccion(
dir_id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
dir_calle VARCHAR(50) not null,
dir_num_calle VARCHAR(50) not null,
dir_CP VARCHAR(50) not null,
dir_created_at DATETIME,
dir_update_up DATETIME,
loc_id INT not null,
FOREIGN KEY (loc_id) REFERENCES localidad (loc_id)
)

-------------------------------------------------------------------------

CREATE TABLE rubro(
rubro_id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
rubro_nombre VARCHAR(50) not null
)

CREATE TABLE condicionDeIva(
cond_iva_id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
cond_nombre VARCHAR(50) not null
)

CREATE TABLE proveedor(
id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
codigo VARCHAR(100) not null,
razonSocial VARCHAR(100) not null,
sitioWeb VARCHAR(200) not null,
imagen VARCHAR(400),
cuit VARCHAR(100) not null,
nombreProveedor VARCHAR(50) not null,
prov_created_at DATETIME,
prov_update_up DATETIME,
deleted_at BIT,
telefono VARCHAR(12),
direc_id INT not null,
rubro_id INT not null,
cond_iva_id INT not null,
FOREIGN KEY (direc_id) REFERENCES direccion (dir_id),
FOREIGN KEY (rubro_id) REFERENCES rubro (rubro_id),
FOREIGN KEY (cond_iva_id) REFERENCES condicionDeIva (cond_iva_id)
);

----------------------------------------------------------------------------

CREATE TABLE categoria(
cat_id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
cat_nombre VARCHAR(50) not null
)

CREATE TABLE productos(
prod_id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
prod_codigoSKU VARCHAR(100) not null,
prod_nameProducto VARCHAR(100) not null,
prod_imagen VARCHAR(1000),
prod_descripcion VARCHAR(50) not null,
prod_precio FLOAT,
prod_habilitado BIT,
prod_created_at DATETIME,
prod_update_up DATETIME,
proveedor_id INT not null,
cat_id INT not null,
FOREIGN KEY (proveedor_id) REFERENCES proveedor (id),
FOREIGN KEY (cat_id) REFERENCES categoria (cat_id)
)

-----------------------------------------------------------------------

CREATE TABLE contactos(
cont_id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
cont_email VARCHAR(100) not null,
cont_tel VARCHAR(50) not null,
rol VARCHAR(50) not null,
cont_created_at DATETIME,
cont_update_up DATETIME,
proveedor_id INT not null,
FOREIGN KEY (proveedor_id) REFERENCES proveedor (id)
)

CREATE TABLE estadosOrdenes(
est_id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
est_nombre VARCHAR(50) not null
)

CREATE TABLE ordenCompra(
ord_id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
ord_fecha_emision DATE,
ord_fecha_entrega DATE,
ord_direccion VARCHAR(100) not null,
ord_info_recep VARCHAR(50) not null,
ord_total FLOAT,
ord_habilitado BIT,
cont_created_at DATETIME,
cont_update_up DATETIME,
proveedor_id INT not null,
estado_id INT not null,
FOREIGN KEY (proveedor_id) REFERENCES proveedor (id),
FOREIGN KEY (estado_id) REFERENCES estadosOrdenes (est_id)
)

CREATE TABLE detalleDeLaOrden(
id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
det_cantidad INT not null,
det_created_at DATETIME,
det_update_up DATETIME,
ord_id INT not null,
productos_id INT not null,
FOREIGN KEY (ord_id) REFERENCES ordenCompra (ord_id),
FOREIGN KEY (productos_id) REFERENCES productos (prod_id)
);
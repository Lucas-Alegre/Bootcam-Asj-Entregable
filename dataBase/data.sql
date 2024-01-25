CREATE TABLE categorias (
    cat_id INT NOT NULL PRIMARY KEY IDENTITY(1, 1),
    cat_nombre varchar(50),
);

CREATE TABLE rubro (
    rub_id INT NOT NULL PRIMARY KEY IDENTITY(1, 1),
    rub_nombre varchar(50),
);

CREATE TABLE condicionDeIva (
    cond_id INT NOT NULL PRIMARY KEY IDENTITY(1, 1),
    cond_nombre varchar(50),
);

---------------------------------------------------------
CREATE TABLE pais (
    pais_id INT NOT NULL PRIMARY KEY IDENTITY(1, 1),
    pais_nombre varchar(50),
);

CREATE TABLE provincia (
    prov_id INT NOT NULL PRIMARY KEY IDENTITY(1, 1),
    prov_nombre varchar(50),
    pais_id INT NOT NULL,
    CONSTRAINT fk_pais FOREIGN KEY (pais_id) REFERENCES pais (pais_id),
);

CREATE TABLE localidad (
    loc_id INT NOT NULL PRIMARY KEY IDENTITY(1, 1),
    loc_nombre varchar(50),
    prov_id INT NOT NULL,
    CONSTRAINT fk_provincia FOREIGN KEY (prov_id) REFERENCES provincias (prov_id),
);

------------------------------------------------------

CREATE TABLE productos (
      prod_id INT NOT NULL PRIMARY KEY IDENTITY(1, 1),
      prod_codigoSKU INT,
      prod_nombre varchar(50),
      prod_imagen varchar(50),
      cat_id INT NOT NULL,
      prod_descripcion varchar(50),
      prod_precio FLOAT,
      CONSTRAINT fk_categorias FOREIGN KEY (cat_id) REFERENCES categorias (cat_id),
);

CREATE TABLE detalleCompra (
      det_id INT NOT NULL PRIMARY KEY IDENTITY(1, 1),
      ord_id INT NOT NULL,
      prod_id INT NOT NULL,
      det_precio FLOAT,
      det_cant INT,
      CONSTRAINT fk_productos FOREIGN KEY (prod_id) REFERENCES productos (prod_id),
);


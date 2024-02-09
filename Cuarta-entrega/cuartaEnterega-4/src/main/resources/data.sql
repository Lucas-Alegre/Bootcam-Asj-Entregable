INSERT INTO pais (nombre) VALUES
('Argentina'), 
('Uruguay'), 
('Brasil');

INSERT INTO PROVINCIA (nombre, pais) VALUES
('Entre Ríos',1),
('Córdoba',1),
('Montevideo',2),
('Maldonado',2),
('Río de Janeiro',3),
('Pará',3);

INSERT INTO condicion_de_iva (cond_nombre) VALUES
('IVA Responsable Inscripto'),
('IVA Responsable no Inscripto'),
('Consumidor Final'),
('Proveedor del Exterior'),
('Monotributista Social');

INSERT INTO RUBRO (habilitado, nombre) VALUES
(1,'ALIMENTOS'),
(1, 'ARTICULOS DEL HOGAR'),
(1, 'FERRETERIA'),
(1, 'INMUEBLES'),
(1, 'CONSTRUCCION');

INSERT INTO DIRECCION VALUES
(50,1,'Diamante','3200', ' Concordia'),
(30,2,'Razon','456', ' Paso libres'),
(45,3,'Villaguay','149','La paz'),
(70,4,'Federal','1180', ' El federal'),
(99,5,'Santa Elena','1180', 'Norte Elena'),
(28,6,'Villa Cresto','1180', 'Cresto');

INSERT INTO CONTACTOS VALUES
('lucasalegre.web@gmail.com', 'Gerente de Venta' , '3454768932'),
('emiliano@gmail.com', 'Vendedor' , '3454050975' ),
('damarisGiemenez@gmail.com', 'Gestion y control' , '3454768931'),
('emilia@gmail.com', 'Administradora de Ventas', '3456788456'),
('ludmila@gmail.com', 'Analista de ventas' , '3456760933');


INSERT INTO PROVEEDOR VALUES
(1,1,0,1,1,'2013-02-27T13:57:21.836+00:00', '2013-02-27T13:57:21.836+00:00', 'asj30', '20427365418', 'http://fideos308.com.ar/wp-content/uploads/2019/03/Morron.png','Pastas 308','308','http://fideos308.com.ar/', '3454050975');
INSERT INTO PROVEEDOR VALUES
(4,2,0,3,4, '2013-02-27T13:57:21.836+00:00', '2013-02-27T13:57:21.836+00:00','Perz54','55427365417', 'https://76338a6a.flyingcdn.com/38745-large_default/candy-lavarropas-aut-ro-1510156dwhcr-12-rapido-anthra-frontal-105kg-1400-rpm.jpg','PerozziHogar', 'Perozzi',  'https://www.perozzi.com.ar/', '3454050455');


INSERT INTO CATEGORIA VALUES(1,'Fideos');
INSERT INTO CATEGORIA VALUES(1,'Lavarropas');
INSERT INTO CATEGORIA VALUES(3, 'Juego de Mesas');
INSERT INTO CATEGORIA VALUES(1, 'Iluminación led');
INSERT INTO CATEGORIA VALUES(1, 'Arroz');
INSERT INTO CATEGORIA VALUES(1, 'Electrodomésticos');
INSERT INTO CATEGORIA VALUES(1, 'Ventilación');
INSERT INTO CATEGORIA VALUES(1, 'Herramientas');


INSERT INTO PRODUCTOS VALUES(1, 1, 50,1,'2013-02-27T13:57:21.836+00:00', '2013-02-27T13:57:21.836+00:00','Prod54', 'Los fideos irresistibles, lo tenes que probar!','http://fideos308.com.ar/wp-content/uploads/2019/03/Morron.png', 'Fideo');
INSERT INTO PRODUCTOS VALUES(1, 1,60,1, '2013-02-27T13:57:21.836+00:00', '2013-02-27T13:57:21.836+00:00','Prod55','Tirabuson , será tu encanto!','http://fideos308.com.ar/wp-content/uploads/2019/04/TriTirabuzon-1.png','Fideo');
INSERT INTO productos VALUES(1, 1,75, 1, '2013-02-27T13:57:21.836+00:00', '2013-02-27T13:57:21.836+00:00','Prod56', 'Mamá mamá, necesito estos fideos','https://www.mamalucchetti.com.ar/wp-content/uploads/2023/01/Fusilli.webp', 'Fideo');
INSERT INTO productos VALUES(5,1,40, 2, '2013-02-27T13:57:21.836+00:00', '2013-02-27T13:57:21.836+00:00','Prod57', 'Mamá mamá, probemos estos arroz!','https://www.mamalucchetti.com.ar/wp-content/uploads/2023/01/largo-fino-bolsa-500g.webp',  'Arroz');


INSERT INTO ESTADOS_DE_ORDENES VALUES('pendiente');
INSERT INTO ESTADOS_DE_ORDENES VALUES('aceptada');
INSERT INTO ESTADOS_DE_ORDENES VALUES('rechazada');

/*Ahora solo debe crear las ordenes de compra desde el formulario de Ordenes*/
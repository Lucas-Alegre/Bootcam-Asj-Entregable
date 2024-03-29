-- pais
INSERT INTO PAIS VALUES(1,'Argentina');
INSERT INTO PAIS VALUES(2,'Uruguay');
INSERT INTO PAIS VALUES(3,'Brasil');

INSERT INTO PROVINCIA VALUES(1,'Entre Ríos',1);
INSERT INTO PROVINCIA VALUES(2,'Córdoba',1);
INSERT INTO PROVINCIA VALUES(3,'Montevideo',2);
INSERT INTO PROVINCIA VALUES(4,'Maldonado',2);
INSERT INTO PROVINCIA VALUES(5,'Río de Janeiro',3);
INSERT INTO PROVINCIA VALUES(6,'Pará',3);

--INSERT INTO DIRECCION VALUES(1,'Diamante','3200', ' Concordia',50,1);
--INSERT INTO DIRECCION VALUES(2,'Razon','456', ' Paso libres',30,2);
--INSERT INTO DIRECCION VALUES(3,'Villaguay','149','La paz',45,3);
--INSERT INTO DIRECCION VALUES(4,'Federal','1180', ' El federalLoca',99,4);

--------------------------------------------------------
--INSERT INTO RUBRO VALUES(1,'ALIMENTOS');
--INSERT INTO RUBRO VALUES(2,'ARTICULOS DEL HOGAR');
--INSERT INTO RUBRO VALUES(3,'FERRETERIA');
--INSERT INTO RUBRO VALUES(4,'INMUEBLES');
--INSERT INTO RUBRO VALUES(5,'CONSTRUCCION');

INSERT INTO CONDICION_DE_IVA VALUES(1,'IVA Responsable Inscripto');
INSERT INTO CONDICION_DE_IVA VALUES(2, 'IVA Responsable no Inscripto');
INSERT INTO CONDICION_DE_IVA VALUES(3, 'Consumidor Final');
INSERT INTO CONDICION_DE_IVA VALUES(4, 'Proveedor del Exterior');
INSERT INTO CONDICION_DE_IVA VALUES(5, 'Monotributista Social');

INSERT INTO CONTACTOS VALUES(1, 'lucasalegre.web@gmail.com', 'Gerente de Venta' , '3454768932');
INSERT INTO CONTACTOS VALUES(2, 'emilio@gmail.com', 'Vendedor' , '3454050975' );

INSERT INTO CONTACTOS VALUES(3, 'damarisGiemenez@gmail.com', 'Gestion y control' , '3454768931');
INSERT INTO CONTACTOS VALUES(4, 'emilia@gmail.com', 'Vendedora', '3456788456');

INSERT INTO CONTACTOS VALUES(5, 'ludmila.c@gmail.com', 'Analista de ventas' , '3456760933');


INSERT INTO PROVEEDOR VALUES
(1,'2013-02-27T13:57:21.836+00:00', '2013-02-27T13:57:21.836+00:00', 'asj35', '20427365418', 0, 'http://fideos308.com.ar/wp-content/uploads/2019/03/Morron.png','Pastas 308','308','http://fideos308.com.ar/', '3454050975',1,1,1,1);

--INSERT INTO PROVEEDOR VALUES(1, 'asj35', 2, '20427365418', 0, 3, 'http://fideos308.com.ar/wp-content/uploads/2019/03/Morron.png','Pastas 308','308', 1, 'http://fideos308.com.ar/', '3454050975',1);
--INSERT INTO PROVEEDOR VALUES(2, 'Per67',3, '55427365417',0,  4,  'https://76338a6a.flyingcdn.com/38745-large_default/candy-lavarropas-aut-ro-1510156dwhcr-12-rapido-anthra-frontal-105kg-1400-rpm.jpg',  'PerozziHogar', 'Perozzi', 2, 'https://www.perozzi.com.ar/', '3454050455',3);

------------------------------------------------------------------------------

INSERT INTO CATEGORIA VALUES(1,'Fideos');
INSERT INTO CATEGORIA VALUES(2,'Lavarropas');
INSERT INTO CATEGORIA VALUES(3, 'Juego de Mesas');
INSERT INTO CATEGORIA VALUES(4, 'Iluminación led');
INSERT INTO CATEGORIA VALUES(5, 'Arroz');
INSERT INTO CATEGORIA VALUES(6, 'Electrodomésticos');
INSERT INTO CATEGORIA VALUES(7, 'Ventilación');
INSERT INTO CATEGORIA VALUES(8, 'Herramientas');

INSERT INTO PRODUCTOS VALUES(1, 1, 'Prod54', 'Los fideos irresistibles, lo tenes que probar!', 1,'http://fideos308.com.ar/wp-content/uploads/2019/03/Morron.png',  'Fideo', 50,1);
INSERT INTO PRODUCTOS VALUES(2, 1, 'Prod55','Tirabuson , será tu encanto!', 1,'http://fideos308.com.ar/wp-content/uploads/2019/04/TriTirabuzon-1.png','Fideo',  60,1 );
INSERT INTO productos VALUES(3, 1, 'Prod56', 'Mamá mamá, necesito estos fideos', 1,'https://www.mamalucchetti.com.ar/wp-content/uploads/2023/01/Fusilli.webp', 'Fideo',  75,1);
INSERT INTO productos VALUES(4, 5, 'Prod57', 'Mamá mamá, probemos estos arroz!', 1,'https://www.mamalucchetti.com.ar/wp-content/uploads/2023/01/largo-fino-bolsa-500g.webp',  'Arroz',  40,1 );

-------------------------------------------------------------------------------


INSERT INTO ESTADOS_DE_ORDENES VALUES(1, 'pendiente');
INSERT INTO ESTADOS_DE_ORDENES VALUES(2, 'aceptada');
INSERT INTO ESTADOS_DE_ORDENES VALUES(3, 'rechazada');

---------------------------------------------------------------------------------

INSERT INTO ORDEN_DE_COMPRA VALUES(1,1,1, 'Diamante 470', 'piso 1', 1, 5000);
INSERT INTO ORDEN_DE_COMPRA VALUES(2, 2, 1, 'Diamante 470', 'piso 1', 1,5000);
INSERT INTO ORDEN_DE_COMPRA VALUES(3, 3, 1,  'Diamante 470', 'piso 1',1,  5000);

INSERT INTO DETALLE_DE_ORDEN VALUES(1, 5, 3, 2,'2024-01-30T15:41:19.865+00:00', '2024-01-30T15:41:19.865+00:00');
INSERT INTO DETALLE_DE_ORDEN VALUES(2,4,8 ,4,'2024-01-30T15:41:19.865+00:00', '2024-01-30T15:41:19.865+00:00');

INSERT INTO DETALLE_DE_ORDEN VALUES(3,3,7,2, '2024-01-30T15:41:19.865+00:00', '2024-01-30T15:41:19.865+00:00');
INSERT INTO DETALLE_DE_ORDEN VALUES(4,2,6, 4,'2024-01-30T15:41:19.865+00:00', '2024-01-30T15:41:19.865+00:00');

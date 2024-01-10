CREATE DATABASE gestionEcomerce;
---------------------------------------------------
INSERT INTO pais (nombre)
VALUES
('Argentina'), 
('Uruguay'), 
('Brasil'),
('Colombia'), 
('Puerto Rico');
SELECT* FROM pais;

INSERT INTO provincia VALUES('Entre Ríos',1);
INSERT INTO provincia VALUES('Córdoba',1);
INSERT INTO provincia VALUES('Montevideo',2);
INSERT INTO provincia VALUES('Maldonado',2);
INSERT INTO provincia VALUES('Río de Janeiro',3);
INSERT INTO provincia VALUES('Pará',3);
INSERT INTO provincia VALUES('Bogotá',4);
INSERT INTO provincia VALUES('Barranquilla',4);
INSERT INTO provincia VALUES('Puerta del Sol',5);
INSERT INTO provincia VALUES('Porta Caribe',5);

INSERT INTO localidad VALUES('Concordia',1);
INSERT INTO localidad VALUES('Paraná',1);
INSERT INTO localidad VALUES('La Páz',1);
INSERT INTO localidad VALUES('Nogoyá',1);
INSERT INTO localidad VALUES('Diamante',1);

INSERT INTO localidad VALUES('Elena',2);
INSERT INTO localidad VALUES('Oliva',2);
INSERT INTO localidad VALUES('Villa Carlos Paz',2);
INSERT INTO localidad VALUES('San Francisco',2);
INSERT INTO localidad VALUES('Río Cuarto',2);

INSERT INTO localidad VALUES('Bahía',3);
INSERT INTO localidad VALUES('Panamá',3);
INSERT INTO localidad VALUES('Río de la Plata',3);
INSERT INTO localidad VALUES('Arenal Grande',3);
INSERT INTO localidad VALUES('Nueva Palmira',3);

INSERT INTO localidad VALUES('Punta del Este',4);
INSERT INTO localidad VALUES('Piriápolis',4);
INSERT INTO localidad VALUES('San Carlos',4);
INSERT INTO localidad VALUES('Garzón',4);
INSERT INTO localidad VALUES('Solís Grande',4);

INSERT INTO localidad VALUES('Barra Do Pirai',5);
INSERT INTO localidad VALUES('Barcelos',5);
INSERT INTO localidad VALUES('Calheiros',5);
INSERT INTO localidad VALUES('Botafogo',5);
INSERT INTO localidad VALUES('Bemposta',5);

INSERT INTO localidad VALUES('Santaré',6);
INSERT INTO localidad VALUES('Marabá',6);
INSERT INTO localidad VALUES('Altamir',6);
INSERT INTO localidad VALUES('Castanhal',6);
INSERT INTO localidad VALUES('Abaetetuba',6);

INSERT INTO localidad VALUES('Barrios Unidos',7);
INSERT INTO localidad VALUES('Bosa',7);
INSERT INTO localidad VALUES('Fontibón',7);
INSERT INTO localidad VALUES('Engativá',7);
INSERT INTO localidad VALUES('Chapinero',7);

INSERT INTO localidad VALUES('Galapa',8);
INSERT INTO localidad VALUES('Palmar de Varela',8);
INSERT INTO localidad VALUES('Santo Tomás',8);
INSERT INTO localidad VALUES('Sabanagrande',8);
INSERT INTO localidad VALUES('Soledad',8);


INSERT INTO localidad VALUES('Aguada',9);
INSERT INTO localidad VALUES('Aguadilla',9);
INSERT INTO localidad VALUES('Cabo Rojo',9);
INSERT INTO localidad VALUES('Hormigueros',9);
INSERT INTO localidad VALUES('Lajas',9);

INSERT INTO localidad VALUES('Arroyo',10);
INSERT INTO localidad VALUES('Coamo',10);
INSERT INTO localidad VALUES('Guayama',10);
INSERT INTO localidad VALUES('Villalba',10);
INSERT INTO localidad VALUES('Ponce',10);
SELECT* FROM localidad;

INSERT INTO direccion VALUES('Diamante','50','3200', '01/01/98 23:59:59.999', '01/01/98 23:59:59.999',1);
INSERT INTO direccion VALUES('Rawson','30','456', '01/01/98 23:59:59.999', '01/01/98 23:59:59.999',2);
INSERT INTO direccion VALUES('Villaguay','6', '149', '01/01/99 23:59:57.999', '01/01/99 23:59:59.999',3);
INSERT INTO direccion VALUES('Federal','99','1180', '01/01/94 23:59:57.999', '01/01/94 23:59:59.999',4);
INSERT INTO direccion VALUES('Av Rosh','745', '800', '01/01/95 23:57:59.999', '01/01/95 23:59:59.999',5);

-------------------------------------------------------------------------

INSERT INTO rubro VALUES('ALIMENTOS');
INSERT INTO rubro VALUES('ARTICULOS DEL HOGAR');
INSERT INTO rubro VALUES('FERRETERIA');
INSERT INTO rubro VALUES('INMUEBLES');
INSERT INTO rubro VALUES('CONSTRUCCION');

INSERT INTO condicionDeIva VALUES('IVA Responsable Inscripto');
INSERT INTO condicionDeIva VALUES('IVA Responsable no Inscripto');
INSERT INTO condicionDeIva VALUES('Consumidor Final');
INSERT INTO condicionDeIva VALUES('Proveedor del Exterior');
INSERT INTO condicionDeIva VALUES('Monotributista Social');

INSERT INTO proveedor VALUES('asj35', '308', 'http://fideos308.com.ar/', 'http://fideos308.com.ar/wp-content/uploads/2019/03/Morron.png','20427365418','Pastas 308', '01/01/2000 23:50:59.999', '01/01/95 23:59:59.999',0,'3454050975',3,1,2);
INSERT INTO proveedor VALUES('Pjs', 'MamaLuchetti', 'https://www.mamalucchetti.com.ar/', 'https://www.mamalucchetti.com.ar/wp-content/uploads/2023/01/Fusilli.webp','25427765414','Lucchetti', '01/01/2002 23:50:59.999', '01/01/2002 23:59:59.999',0,'3456098761',4,1,2);
INSERT INTO proveedor VALUES('Per67', 'PerozziHogar', 'https://www.perozzi.com.ar/', 'https://76338a6a.flyingcdn.com/38745-large_default/candy-lavarropas-aut-ro-1510156dwhcr-12-rapido-anthra-frontal-105kg-1400-rpm.jpg','55427365417','Perozzi', '01/01/2002 23:50:59.999', '01/01/2002 23:59:59.999',0, '3454050455',4,2,3);
INSERT INTO proveedor VALUES('FaraCo55', 'Faraon', 'https://faraonhogar.com.ar/', 'https://faraonhogar.com.ar/wp-content/uploads/2022/03/COD-12001.jpeg','20427365418','Faraon Cocinas', '01/01/2004 23:50:59.999', '01/01/2004 23:59:59.999',0,'3514050975',5,2,4);
INSERT INTO proveedor VALUES('Ferre187', 'Ferre', 'https://www.fivisa.com.uy/tienda', 'https://f.fcdn.app/imgs/e086ef/www.fivisa.com.uy/fiviuy/2806/webp/catalogo/IX1610_IX1610_1/1500-1500/cinta-tira-led-interior-exterior-5m-12v-24w-neutra-ix1610.jpg','20427365467','Ferre Todo', '01/01/2006 23:50:59.999', '01/01/2006 23:59:59.999',0, '3514050975',5,3,3);
INSERT INTO proveedor VALUES('Asj', 'Consultora', 'https://www.asjsolution.com', 'https://f.imgNotFount.jpg','20427365192','Asj Solution', '01/01/2006 23:50:59.999', '01/01/2006 23:59:59.999',1, '3514050975',5,3,3);

----------------------------------------------------------------------------

INSERT INTO categoria VALUES('Fideos');
INSERT INTO categoria VALUES('Lavarropas');
INSERT INTO categoria VALUES('Juego de Mesas');
INSERT INTO categoria VALUES('Iluminación led');
INSERT INTO categoria VALUES('Arroz');
INSERT INTO categoria VALUES('Electrodomésticos');
INSERT INTO categoria VALUES('Ventilación');
INSERT INTO categoria VALUES('Herramientas');


INSERT INTO productos VALUES('Prod54','Fideo','http://fideos308.com.ar/wp-content/uploads/2019/03/Morron.png', 'Los fideos irresistibles, lo tenes que probar!', 50,1, '01/01/2000 23:50:59.999', '01/01/95 23:59:59.999',1,1 );
INSERT INTO productos VALUES('Prod55','Fideo','http://fideos308.com.ar/wp-content/uploads/2019/04/TriTirabuzon-1.png', 'Tirabuson , será tu encanto!', 60,1, '01/02/2000 23:50:59.999', '01/02/95 23:59:59.999',1,1 );

INSERT INTO productos VALUES('Prod56','Fideo','https://www.mamalucchetti.com.ar/wp-content/uploads/2023/01/Fusilli.webp', 'Mamá mamá, necesito estos fideos', 75,1, '01/01/2001 23:50:59.999', '01/02/2001 23:59:59.999',2,1 );
INSERT INTO productos VALUES('Prod57','Arroz','https://www.mamalucchetti.com.ar/wp-content/uploads/2023/01/largo-fino-bolsa-500g.webp', 'Mamá mamá, probemos estos arroz!', 40,1, '01/01/2002 23:50:59.999', '01/02/2002 23:59:59.999',2,5 );

INSERT INTO productos VALUES('Prod58','Lavarropas','https://76338a6a.flyingcdn.com/38745-large_default/candy-lavarropas-aut-ro-1510156dwhcr-12-rapido-anthra-frontal-105kg-1400-rpm.jpg', 'Lavar cada día es una aventura', 500,1, '01/01/2003 23:50:59.999', '01/02/2003 23:59:59.999',3,2 );
INSERT INTO productos VALUES('Prod59','Aspiradora','https://76338a6a.flyingcdn.com/31721-large_default/daihatsu-aspiradora-industrial-asp-15-1200-15lt-1200w.jpg', 'Aspiación al 100%', 250,1, '01/01/2004 23:50:59.999', '01/02/2004 23:59:59.999',3,7 );

INSERT INTO productos VALUES('Prod60','Mesa y sillas','https://faraonhogar.com.ar/wp-content/uploads/2022/03/COD-12006.jpeg', 'Tu comodidad es nuestra garantía', 1000,1, '01/01/2005 23:50:59.999', '01/02/2005 23:59:59.999',4,3 );
INSERT INTO productos VALUES('Prod61','Ventilador de techo','https://faraonhogar.com.ar/wp-content/uploads/2017/08/3003-chapa-negro.png', 'El calor, ya no será un problema', 750,1, '01/01/2006 23:50:59.999', '01/02/2006 23:59:59.999',4,8 );

INSERT INTO productos VALUES('Prod62','Luces Led','https://f.fcdn.app/imgs/e086ef/www.fivisa.com.uy/fiviuy/2806/webp/catalogo/IX1610_IX1610_1/1500-1500/cinta-tira-led-interior-exterior-5m-12v-24w-neutra-ix1610.jpg', 'Dale color a tu vida', 400,1, '01/01/2007 23:50:59.999', '01/02/2007 23:59:59.999',5,4 );
INSERT INTO productos VALUES('Prod63','Pinza','https://f.fcdn.app/imgs/8f347e/www.fivisa.com.uy/fiviuy/bd63/webp/catalogo/TN3633_TN3633_1/1500-1500/pinza-media-cana-6-1000v-iec-tn3633.jpg', 'La solución, esta en tus manos', 150,1, '01/01/2008 23:50:59.999', '01/02/2008 23:59:59.999',5,9 );
INSERT INTO productos VALUES('Prod68','Pinza',NULL, 'La solución, esta en tI', 180,1, '01/01/2008 23:50:59.999', '01/02/2008 23:59:59.999',5,9 );

-----------------------------------------------------------------------

INSERT INTO contactos VALUES('lucasalegre.web@gmail.com', '3454768932', 'Gerente de Venta', '01/01/2009 23:50:59.999', '01/02/2009 23:59:59.999',1 );
INSERT INTO contactos VALUES('emilio@gmail.com', '3454050975', 'Vendedor', '01/02/2009 23:50:59.999', '01/03/2009 23:59:59.999',1 );

INSERT INTO contactos VALUES('damarisGiemenez@gmail.com', '3454768931', 'Gerente de Venta', '01/01/2009 23:50:59.999', '01/02/2009 23:59:59.999',2 );
INSERT INTO contactos VALUES('emilia@gmail.com', '3456788456', 'Vendedora', '01/02/2010 23:50:59.999', '01/03/2010 23:59:59.999',2 );

INSERT INTO contactos VALUES('ludmila.c@gmail.com', '3456760932', 'Gerente de Venta', '01/01/2011 23:50:59.999', '01/02/2011 23:59:59.999',3 );
INSERT INTO contactos VALUES('agustin.zpa@gmail.com', '3454050975', 'Vendedor', '01/02/2012 23:50:59.999', '01/03/2012 23:59:59.999',3 );

INSERT INTO contactos VALUES('ram.gabri@gmail.com', '3474768987', 'Gerente de Venta', '01/01/2013 23:50:59.999', '01/02/2013 23:59:59.999',4 );
INSERT INTO contactos VALUES('emilio@gmail.com', '3457050987', 'Vendedor', '01/02/2014 23:50:59.999', '01/03/2014 23:59:59.999',4 );

INSERT INTO estadosOrdenes VALUES('pendiente');
INSERT INTO estadosOrdenes VALUES('aceptada');
INSERT INTO estadosOrdenes VALUES('rechazada');


INSERT INTO ordenCompra VALUES('2010-10-10','2010-10-10', 'Diamante 470', 'piso 1', 5000,1,'10/10/2010 23:50:59.999', '10/10/2010 23:59:59.999',1,1);
INSERT INTO ordenCompra VALUES('2010-10-10','2010-10-10', 'Diamante 470', 'piso 1', 5000,1,'10/10/2010 23:50:59.999', '10/10/2010 23:59:59.999',1,2);
INSERT INTO ordenCompra VALUES('2010-10-10','2010-10-10', 'Diamante 470', 'piso 1', 5000,0,'10/10/2010 23:50:59.999', '10/10/2010 23:59:59.999',1,3);

INSERT INTO ordenCompra VALUES('2011-10-10','2010-10-10', 'Diamante 4567', 'piso 2', 6000,1,'10/10/2011 23:50:59.999', '10/10/2011 23:59:59.999',2,1);
INSERT INTO ordenCompra VALUES('2011-10-10','2010-10-10', 'Diamante 4567', 'piso 2', 6000,1,'10/10/2011 23:50:59.999', '10/10/2011 23:59:59.999',2,2);
INSERT INTO ordenCompra VALUES('2011-10-10','2010-10-10', 'Diamante 4567', 'piso 2', 6000,0,'10/10/2011 23:50:59.999', '10/10/2011 23:59:59.999',2,3);

INSERT INTO ordenCompra VALUES('2012-10-10','2010-10-10', 'Diamante 1247', 'piso 3', 7000,1,'10/10/2012 23:50:59.999', '10/10/2012 23:59:59.999',3,1);
INSERT INTO ordenCompra VALUES('2012-10-10','2010-10-10', 'Diamante 1247', 'piso 3', 7000,1,'10/10/2012 23:50:59.999', '10/10/2012 23:59:59.999',3,2);
INSERT INTO ordenCompra VALUES('2012-10-10','2010-10-10', 'Diamante 1247', 'piso 4', 7000,0,'10/10/2012 23:50:59.999', '10/10/2012 23:59:59.999',3,3);
INSERT INTO ordenCompra VALUES('2012-10-10','2010-10-10', 'Diamante 1247', 'piso 4', 7000,0,'10/10/2012 23:50:59.999', '10/10/2012 23:59:59.999',3,3);


INSERT INTO detalleDeLaOrden VALUES(3,'10/10/2010 23:50:59.999', '10/10/2010 23:59:59.999', 3,1);
INSERT INTO detalleDeLaOrden VALUES(5,'10/10/2011 23:50:59.999', '10/10/2011 23:59:59.999', 4,2);

INSERT INTO detalleDeLaOrden VALUES(4,'10/10/2012 23:50:59.999', '10/10/2012 23:59:59.999', 5,3);
INSERT INTO detalleDeLaOrden VALUES(7,'10/10/2013 23:50:59.999', '10/10/2013 23:59:59.999', 6,4);

INSERT INTO detalleDeLaOrden VALUES(9,'10/10/2014 23:50:59.999', '10/10/2014 23:59:59.999', 7,5);
INSERT INTO detalleDeLaOrden VALUES(15,'10/10/2015 23:50:59.999', '10/10/2015 23:59:59.999', 8,7);
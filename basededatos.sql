create database ceiba;

use ceiba;

create table categorias ( 
id_cat int not null auto_increment,
nombre varchar (100) not null,
descripcion varchar (300),
primary key (id_cat)
);
---------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------
create table producto(
id_product int not null auto_increment,
id_cat int not null,
nombre varchar (100) not null,
descripcion varchar(300),
stock int not null,
stockminimo int not null,
foreign key (id_cat)references categorias (id_cat) on update cascade on delete cascade,
primary key (id_product));

 CREATE TABLE usuarios (
  id_us VARCHAR(20) not null primary key,
  usuario varchar (20) not null,
  passwordd varchar (100) not null,
  rol varchar(40) not 
  null
);


INSERT INTO usuarios (id_us,usuario,passwordd,rol) value('77833','Rafael','b1b3773a05c0ed0176787a4f1574ff0075f7521e','Administrador');
INSERT INTO usuarios (id_us,usuario,passwordd,rol) value('karen','karen','55107e193e648a27778fa98736b2e8e24b3cd6e1','Administrador');
INSERT INTO usuarios (id_us,usuario,passwordd,rol) value('kary','kary','0de32e8e6386773d981d8ebf9e4b30110ebaf2bf',	'Administrador');
INSERT INTO usuarios (id_us,usuario,passwordd,rol) value('rafa','rafa','67023cda456b9844abf8a9a3992799093bbfb69f','Administrador');
INSERT INTO usuarios (id_us,usuario,passwordd,rol) value('ruth','ruth','b69f673cb3a23c41a5673e788cdfbc767a959e52','Administrador');


INSERT INTO `categorias` (`id_cat`,`nombre`,`Descripcion`) VALUES (1,'limpieza','productos de accion bacteriana');
INSERT INTO `categorias` (`id_cat`,`nombre`,`Descripcion`) VALUES (2,'alcalinos ','productos para el hogar');
INSERT INTO `categorias` (`id_cat`,`nombre`,`Descripcion`) VALUES (3,'desengrasantes','productos para quitar grasa');
INSERT INTO `categorias` (`id_cat`,`nombre`,`Descripcion`) VALUES (4,'alcoholes','productos decinfectantes');
INSERT INTO `categorias` (`id_cat`,`nombre`,`Descripcion`) VALUES (5,'acidos leves ','productos limpiadores ');
INSERT INTO `categorias` (`id_cat`,`nombre`,`Descripcion`) VALUES (6,'acidos fuertes','productos con acido');
INSERT INTO `categorias` (`id_cat`,`nombre`,`Descripcion`) VALUES (7,'espumosos','productos detergentes');
INSERT INTO `categorias` (`id_cat`,`nombre`,`Descripcion`) VALUES (8,'alcalinos ','productos con bicarbonato de sodio');
INSERT INTO `categorias` (`id_cat`,`nombre`,`Descripcion`) VALUES (9,'alcalinos fuertes','productos a base de aluminio');
INSERT INTO `categorias` (`id_cat`,`nombre`,`Descripcion`) VALUES (10,'biodegradables','productos a base de agua');


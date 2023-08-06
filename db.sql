create database prueba123;
use prueba123;

create table categorias ( 
id_cat int not null,
nombre varchar (100) not null,
Descripcion varchar (1000),
primary key (id_cat));

create table provedor ( 
id_prov int not null,
nombre varchar (100) not null,
Direccion varchar (50),
telefono int,
primary key(id_prov));

create table producto(
id_product int not null,
id_cat int not null,
id_prov int not null,
nombre varchar (100) not null,
cantidad int not null,
valor float not null,
foreign key (id_cat)references categorias (id_cat) on update cascade on delete cascade,
foreign key (id_prov)references provedor (id_prov) on update cascade on delete cascade,
primary key (id_product));
 
create table cliente( 
id_cliente int  not null,
nombre varchar (100)  not null,
Direccion varchar (50) ,
telefono int  ,
primary key (id_cliente));
 
create table salida(
id_salida int  not null,
id_cliente int  not null,
fecha timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP ,
foreign key (id_cliente)references cliente (id_cliente) on update cascade on delete cascade,
primary key (id_salida));
 
create table Detallesalida( 
id_detallesalida int not null,
id_salida int  not null,
id_product int  not null,
fecha timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP ,
cantidad int  not null,
foreign key (id_product)references producto (id_product) on update cascade on delete cascade,
foreign key (id_salida)references salida (id_salida) on update cascade on delete cascade,
primary key (id_detallesalida));
 
 
 CREATE TABLE usuarios (
  id_us VARCHAR(20) not null primary key,
  usuario varchar (20) not null,
  passwordd varchar (100) not null,
  rol varchar(40) not null
);


INSERT INTO usuarios (id_us,usuario,passwordd,rol) value('77833','Rafael','b1b3773a05c0ed0176787a4f1574ff0075f7521e','Administrador');
INSERT INTO usuarios (id_us,usuario,passwordd,rol) value('karen','karen','55107e193e648a27778fa98736b2e8e24b3cd6e1','Usuario');
INSERT INTO usuarios (id_us,usuario,passwordd,rol) value('kary','kary','0de32e8e6386773d981d8ebf9e4b30110ebaf2bf',	'Usuario');
INSERT INTO usuarios (id_us,usuario,passwordd,rol) value('rafa','rafa','67023cda456b9844abf8a9a3992799093bbfb69f','Usuario');
INSERT INTO usuarios (id_us,usuario,passwordd,rol) value('ruth','ruth','b69f673cb3a23c41a5673e788cdfbc767a959e52','Usuario');

describe usuarios;
select * from usuarios;

INSERT INTO cliente (id_cliente,nombre,Direccion,telefono) value(1,'laceiba1','enunlugar','546582');
INSERT INTO cliente (id_cliente,nombre,Direccion,telefono) value(2,'laceiba2','enunlugar','546582');
INSERT INTO cliente (id_cliente,nombre,Direccion,telefono) value(3,'laceiba3','enunlugar','546582');
INSERT INTO cliente (id_cliente,nombre,Direccion,telefono) value(4,'laceiba4','enunlugar','546582');
INSERT INTO cliente (id_cliente,nombre,Direccion,telefono) value(5,'laceiba5','enunlugar','546582');


UPDATE cliente SET 
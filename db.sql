create database ceiba;
use ceiba;

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
 
create table Requerimiento(
id_req int  not null,
id_cliente int  not null,
fecha timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP ,
foreign key (id_cliente)references cliente (id_cliente) on update cascade on delete cascade,
primary key (id_req));
 
create table cliente( 
id_cliente int  not null,
nombre varchar (100)  not null,
Direccion varchar (50) ,
telefono int  ,
primary key (id_cliente));
 
create table PEDIDO( 
id_req int  not null,
id_product int  not null,
fecha timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP ,
cantidad int  not null,
foreign key (id_product)references producto (id_product) on update cascade on delete cascade,
primary key (id_req));
 
 
 CREATE TABLE usuarios (
  id_us int not null primary key,
  usuario varchar (20) not null,
  passwordd varchar (20) not null,
  rol varchar(40) not null
);

 
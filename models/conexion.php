<?php
$servername='localhost';
$database='ceiba';
$username='root';
$password='1Q2W3E4R5T6Y';

//Crear conexion a la base de datos
$conn=new mysqli($servername,$username,$password,$database);

//Comprobar la conexion a la base de datos
if($conn->connect_error){
    die("Conexion fallida!!!".$conn->connect_error);
}
$sql="INSERT INTO usuarios () VALUES ("
?>
const Conexion=require("./conexion");
let conexion=new Conexion();
class Create{
    constructor(){

    }
    createcategoria(){
        let id_cat=res.query.id_cat;
        let nombre=res.query.nombre;
        let descripcion=res.query.descripcion;
        let conn=conexion.conexion();
        conn.connect(function(err){
                    if(err) throw err;
                    console.log("conectado!!");
                    let sql="INSERT INTO categorias (id_cat,nombre,Descripcion) VALUES ("+id_cat+",'"+nombre+"','"+descripcion+"')";
                    conn.query(sql,function(err){
                        if(err) throw err;
                        else{
                            console.log("Archivo Registrado con exito");
                        }
                    });
                });
    }
    createcliente(){
        let id_cliente=document.getElementById("#id_cliente").value;
        let nombre=document.getElementById("#nombre").value;
        let direccion=document.getElementById("#direccion").value;
        let telefono=document.getElementById("#telefono").value;
        let conn=conexion.conexion();
        conn.connect(function(err){
                    if(err) throw err;
                    console.log("conectado!!");
                    let sql="INSERT INTO cliente (id_cliente,nombre,Direccion,telefono) VALUES ("+id_cliente+",'"+nombre+"','"+direccion+"',"+telefono+")";
                    conn.query(sql,function(err){
                        if(err) throw err;
                        else{
                            console.log("Archivo Registrado con exito");
                            alert('Archivo Registrado con exito');
                        }
                    });
                });
    }
    createdetallesalida(){
        let id_detallesalida=document.getElementById("#id_detallesalida").value;
        let id_salida=document.getElementById("#id_salida").value;
        let id_product=document.getElementById("#id_product").value;
        let fecha=document.getElementById("#fecha").value;
        let cantidad=document.getElementById("#cantidad").value;
        let conn=conexion.conexion();
        conn.connect(function(err){
                    if(err) throw err;
                    console.log("conectado!!");
                    let sql="INSERT INTO usuarios (id_detallesalida,id_salida,id_product,fecha,cantidad) VALUES ("+id_detallesalida+","+id_salida+","+id_product+",'"+fecha+","+cantidad+")";
                    conn.query(sql,function(err){
                        if(err) throw err;
                        else{
                            console.log("Archivo Registrado con exito");
                            alert("Archivo Registrado con exito");
                        }
                    });
                });
    }
    createproducto(){
        let conn=conexion.conexion();
        conn.connect(function(err){
                    if(err) throw err;
                    console.log("conectado!!");
                    let sql="INSERT INTO usuarios (id_us,usuario,passwordd,rol) VALUES ('"+id_us+"','"+nombre+"','"+passSha1+"','"+rol+"')";
                    conn.query(sql,function(err){
                        if(err) throw err;
                        else{
                            console.log("Archivo Registrado con exito");
                            res.render('registrar');
                        }
                    });
                });
    }
    createproveedor(){
        let conn=conexion.conexion();
        conn.connect(function(err){
                    if(err) throw err;
                    console.log("conectado!!");
                    let sql="INSERT INTO usuarios (id_us,usuario,passwordd,rol) VALUES ('"+id_us+"','"+nombre+"','"+passSha1+"','"+rol+"')";
                    conn.query(sql,function(err){
                        if(err) throw err;
                        else{
                            console.log("Archivo Registrado con exito");
                            res.render('registrar');
                        }
                    });
                });
    }
    createsalida(){
        let conn=conexion.conexion();
        conn.connect(function(err){
                    if(err) throw err;
                    console.log("conectado!!");
                    let sql="INSERT INTO usuarios (id_us,usuario,passwordd,rol) VALUES ('"+id_us+"','"+nombre+"','"+passSha1+"','"+rol+"')";
                    conn.query(sql,function(err){
                        if(err) throw err;
                        else{
                            console.log("Archivo Registrado con exito");
                            res.render('registrar');
                        }
                    });
                });
    }
    createusuarios(){
        let id_us=document.getElementById("#id_us").value;
        let nombre=document.getElementById("#nombre").value;
        let conn=conexion.conexion();
        conn.connect(function(err){
                    if(err) throw err;
                    console.log("conectado!!");
                    let sql="INSERT INTO usuarios (id_us,usuario,passwordd,rol) VALUES ('"+id_us+"','"+nombre+"','"+passSha1+"','"+rol+"')";
                    conn.query(sql,function(err){
                        if(err) throw err;
                        else{
                            console.log("Archivo Registrado con exito");
                            res.render('registrar');
                        }
                    });
                });
    }
}
module.exports=Create;
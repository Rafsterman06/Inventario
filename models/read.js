const mysql=require("mysql");
const Conexion=require("./conexion");
let conexion=new Conexion();
class Read{
    constructor(){
    }

    
    readcategoria(){
        let conn=conexion.conexion();
        conn.connect(function (err){
            if(err) throw err;
            else{
                let sql="SELECT * FROM categoria;";
                conn.query(sql,function(err,result){
                    let concatenacion;
                    for (let x in result){
                        concatenacion+='\<tr><td>x.id_cat</td><td>x.nombre</td><td>x.Description</td></tr>';
                        
                    }
                    console.log(concatenacion);
                });
            }
        });
    }
    readcliente(){
        let conn=conexion.conexion();
        conn.connect(function (err){
            if(err) throw err;
            else{
                let sql="SELECT * FROM cliente;";
                conn.query(sql,function(err,result){
                    let concatenacion="";
                    for (let x in result){
                        concatenacion+="<tr><td>"+result[x].id_cliente+"</td><td>"+result[x].nombre+"</td><td>"+result[x].Direccion+"</td><td>"+result[x].telefono+"</td></tr>";
                    }
                    console.log(concatenacion);
                });
            }
        });
    }
    readdetallesalida(){
        let conn=conexion.conexion();
        conn.connect(function (err){
            if(err) throw err;
            else{
                let sql="SELECT * FROM Detallesalida;";
                conn.query(sql,function(err,result){
                    let concatenacion="";
                    for (let x in result){
                        concatenacion+="<tr><td>"+x.id_detallesalida+"</td><td>"+x.id_salida+"</td><td>"+x.id_product+"</td><td>"+x.fecha+"</td></tr><tr>"+x.cantidad+"</td></tr>";
                    }
                    console.log(concatenacion);
                });
            }
        });
    }
    readproducto(){
        let conn=conexion.conexion();
        conn.connect(function (err){
            if(err) throw err;
            else{
                let sql="SELECT * FROM producto;";
                conn.query(sql,function(err,result){
                    let concatenacion="";
                    for (let x in result){
                        concatenacion+="<tr><td>"+x.id_product+"</td><td>"+x.id_cat+"</td><td>"+x.id_prov+"</td><td>"+x.nombre+"</td></tr>";
                    }
                    console.log(concatenacion);
                });
            }
        });

    }
    readproveedor(){
        
        let conn=conexion.conexion();
        conn.connect(function (err){
            if(err) throw err;
            else{
                let sql="SELECT * FROM provedor;";
                conn.query(sql,function(err,result){
                    let concatenacion="";
                    for (let x in result){
                        concatenacion+="<tr><td>"+x.id_cliente+"</td><td>"+x.nombre+"</td><td>"+x.direccion+"</td><td>"+x.telefono+"</td></tr>";
                    }
                    console.log(concatenacion);
                });
            }
        });
    }
    readsalida(){
        let conn=conexion.conexion();
        conn.connect(function (err){
            if(err) throw err;
            else{
                let sql="SELECT * FROM cliente;";
                conn.query(sql,function(err,result){
                    let concatenacion="";
                    for (let x in result){
                        concatenacion+="<tr><td>"+x.id_cliente+"</td><td>"+x.nombre+"</td><td>"+x.direccion+"</td><td>"+x.telefono+"</td></tr>";
                    }
                    console.log(concatenacion);
                });
            }
        });
    }

    readusuarios(){
        
        let conn=conexion.conexion();
        conn.connect(function (err){
            if(err) throw err;
            else{
                let sql="SELECT * FROM cliente;";
                conn.query(sql,function(err,result){
                    let concatenacion="";
                    for (let x in result){
                        concatenacion+="<tr><td>"+x.id_cliente+"</td><td>"+x.nombre+"</td><td>"+x.direccion+"</td><td>"+x.telefono+"</td></tr>";
                    }
                    console.log(concatenacion);
                });
            }
        });
    }
}
module.exports=Read;
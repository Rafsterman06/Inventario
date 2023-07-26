let express=require('express');
let mysql=require('mysql');
let Sha1=require('sha1');
const Read = require('./read');
const Conexion = require('./conexion');
let read=new Read();
let conexion=new Conexion();

class Server{
    constructor(){
        this.port=process.env.PORT;
        this.app=express();
        this.routes();
        this.middlewares();
        this.dbdatabase=process.env.MYSQLDATABASE;
        this.dbhost=process.env.MYSQLHOST;
        this.dbpassword=process.env.MYSQLPASSWORD;
        this.dbport=process.env.MYSQLPORT;
        this.dbuser=process.env.MYSQLUSER;
        this.dburl=process.env.MYSQL_URL;
    }
    middlewares(){
        this.app.use(express.static('public'));
        this.app.set('view engine', 'ejs');
    }
    routes(){
        this.app.get("/gocategoria",(req,res)=>{
                res.render('categorias');
                read.readcategoria();
            
        });
        this.app.get("/gocliente",(req,res)=>{
            //falta poner un query para imprimir al comienzo de cada vez que se abra esta ventana
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
                        res.render("cliente",{dato:concatenacion});
                        console.log(tablacliente);
                    });
                }
            });
        });
        this.app.get("/godetallesalida",(req,res)=>{
            //falta poner un query para imprimir al comienzo de cada vez que se abra esta ventana
                res.render('detallesalida');
                read.readdetallesalida();
            
        });
        this.app.get("/goproducto",(req,res)=>{
            //falta poner un query para imprimir al comienzo de cada vez que se abra esta ventana
                res.render('producto');
                read.readproducto();
            
        });
        this.app.get("/goproveedor",(req,res)=>{
            //falta poner un query para imprimir al comienzo de cada vez que se abra esta ventana
                res.render('proveedor');
                read.readproveedor();
        });
        this.app.get("/gosalida",(req,res)=>{
            //falta poner un query para imprimir al comienzo de cada vez que se abra esta ventana
                res.render('salida');
                read.readsalida();
            
        });
        this.app.get("/gousuario",(req,res)=>{
            //falta poner un query para imprimir al comienzo de cada vez que se abra esta ventana
                res.render('usuario');
                read.readusuarios();
            
        });
        this.app.get("/goregistrar",(req,res)=>{
            res.render('registrar');
        });
        
        this.app.get("/registrar",(req,res)=>{
            let id_us=req.query.nrj;
            let nombre=req.query.nombre;
            let passw=req.query.passw;
            let rol=req.query.privilegio;
            let passSha1=Sha1(passw);

            let conn=conexion.conexion();

            if(rol=="Usuario"){
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
            else if(rol=="Administrador"){
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
        });

        this.app.get("/login",(req,res)=>{
            let usuar=req.query.usuar;
            let passw=req.query.passw;
            let passSha1=Sha1(passw);
            
            let conn=conexion.conexion();
            conn.connect(function(err){
                if(err) throw err;
                console.log('Conectado!!!');
                let sql="SELECT * FROM usuarios WHERE id_us='"+usuar+"'";
                conn.query(sql,function (err,result){
                    if(err) throw err;
                    if(result.length>0){
                        if(result[0].id_us==usuar){
                            if(result[0].passwordd==passSha1){
                                if(result[0].rol=="Administrador"){
                                    res.render("loginadm");
                                }
                                else if(result[0].rol=="Usuario"){
                                    res.render("loginusu");
                                }
                                else{
                                    console.log("Error de privilegio!!!");
                                }
                            }
                            else{
                                console.log("Password no coincide!!!");
                            }
                        }
                        else{
                            console.log("Usuario no existe!!!");
                        }
                    }
                    else{
                        res.send('no se ha encontrado nada!!');
                    }
                });
            });
        });
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log(this.dbdatabase+','+this.dbhost+','+this.dbpassword+','+this.dbport+','+this.dburl+','+this.dbuser);
        });
    }
}

module.exports=Server;

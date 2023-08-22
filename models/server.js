let express = require("express");
//let mysql=require('mysql');
let Conexion=require("./conexion");
let conexion=new Conexion();
let Sha1=require('sha1');
let session=require('express-session');
let cookieParser=require('cookie-parser');

class Server{
    constructor(){
        this.app=express();
        
        this.port=process.env.PORT;
        
        this.middlewares();
        
        this.routes();
        
        this.dbdatabase=process.env.MYSQLDATABASE;
        
        this.dbhost=process.env.MYSQLHOST;
        
        this.dbpassword=process.env.MYSQLPASSWORD;
        
        this.dbport=process.env.MYSQLPORT;
        
        this.dbuser=process.env.MYSQLUSER;
        
        this.dburl=process.env.MYSQL_URL;
    }

    middlewares(){
        // se agregan las paginas estaticas 
        this.app.use(express.static('public'));
        // exportas ejs para poderlo usar
        this.app.set('view engine', 'ejs');
        //para las cookies
        this.app.use(cookieParser());
        //para sesiones de usuarios
        this.app.use(session({
            secret: "amar",
            saveUninitialized: true,
            resave: true
        }));
    }

    routes(){
        this.app.get('/pruebas', (req, res) => {
            res.render('prueba');
        });
        this.app.get('/holamundo', (req, res) => {
            if(req.session.user){
                if(req.session.user.rol=="Administrador"){
                    res.send("hola mundo cruel");
                }else{
                    res.redirect('/');
                }
            }else{
                  res.redirect('/');
            }
            
        });
        
        this.app.get("/gocategoria",(req,res)=>{
            let conn=conexion.conexion();
            conn.connect(function (err){
                if(err) throw err;
                else{
                    let sql="SELECT * FROM categorias;";
                    conn.query(sql,function(err,result){
                        if(err) throw err;
                        else{
                            res.render("categorias",{dato:result});
                        }
                    });
                }
            });
        });

        this.app.get("/createcategoria", (req, res) => {
            let id_cat=req.query.id_cat;
            let nombre=req.query.nombre;
            let descripcion=req.query.descripcion;
            let conn=conexion.conexion();

            conn.connect(function(err){
                if(err) throw err;
                console.log("conectado!!");
                let sql="INSERT INTO categorias (nombre,descripcion) VALUES ('"+nombre+"','"+descripcion+"');";
                conn.query(sql,function(err){
                    if(err) throw err;
                    else{
                         res.redirect('/gocategoria');
                    }
                });
            });
        });

        this.app.get('/goformcreatecategoria', (req, res) => {
            res.render('formcreatecategoria');
        });

        this.app.get('/goformupdatecategoria/:id', (req, res) => {
            let id_cat=req.params.id;
            res.render('formupdatecategoria',{dato:id_cat});
        });

        this.app.get('/updatecategoria/:id', (req, res) => {
            let dato=req.params.id;
            let nombre=req.query.nombre;
            let descripcion=req.query.descripcion;
            let conn=conexion.conexion();
            conn.connect(function(err){
                if(err) throw err;
                else{
                    let sql="UPDATE categorias set nombre='"+nombre+"', Descripcion='"+descripcion+"' WHERE id_cat="+dato+";";
                    conn.query(sql,function(err){
                        if(err) throw err;
                        else{
                             res.redirect('/gocategoria');
                        }
                    });
                }
            });
        });

        this.app.get('/deletecategoria/:id', (req, res) => {
            let id_cat=req.params.id;
            let conn=conexion.conexion();
            conn.connect(function(err){
                if(err) throw err;
                else{
                    let sql="DELETE FROM categorias WHERE id_cat="+id_cat+";";
                    conn.query(sql,function(err){
                        if(err) throw err;
                         res.redirect('/gocategoria');
                    });
                }
            }); 
        });
{
        this.app.get("/gocliente",(req,res)=>{
            let conn=conexion.conexion();
            conn.connect(function (err){
                if(err) throw err;
                else{
                    let sql="SELECT * FROM cliente;";
                    conn.query(sql,function(err,result){
                        if(err) throw err;
                        res.render("cliente",{dato:result});
                    });
                }
            });
        });

        this.app.get('/goformcreatecliente', (req, res) => {
            res.render('formcreatecliente');
        });

        this.app.get('/createcliente', (req, res) => {
            let id_cliente=req.query.id_cliente;
            let nombre=req.query.nombre;
            let direccion=req.query.direccion;
            let telefono=req.query.telefono;
            let conn=conexion.conexion();
            conn.connect(function(err){
                if(err) throw err;
                else{
                    let sql="INSERT INTO cliente (id_cliente,nombre,direccion,telefono) VALUES ("+id_cliente+",'"+nombre+"','"+direccion+"',"+telefono+");";
                    conn.query(sql,function(err){
                        if(err) throw err;
                         res.redirect('/gocliente');
                    });
                }
            });
        });

        this.app.get('/goformupdatecliente/:id', (req, res) => {
            let id_cliente=req.params.id;
            res.render('formupdatecliente',{dato:id_cliente});
        });

        this.app.get('/updatecliente/:id', (req, res) => {
            let id_cliente=req.params.id;
            let nombre=req.query.nombre;
            let direccion=req.query.direccion;
            let telefono=req.query.telefono;
            let conn=conexion.conexion();
            conn.connect(function(err){
                if(err) throw err;
                else{
                    let sql="UPDATE cliente SET nombre='"+nombre+"', Direccion='"+direccion+"', telefono="+telefono+" WHERE id_cliente="+id_cliente+";";
                    conn.query(sql,function(err){
                        if(err) throw err;
                        else{
                            res.redirect('/gocliente');
                        }
                    });
                }
            });
        });

        this.app.get('/deletecliente/:id', (req, res) => {
            let id_cliente=req.params.id;
            let conn=conexion.conexion();
            conn.connect(function(err){
                if(err) throw err;
                else{
                    let sql="DELETE FROM cliente WHERE id_cliente="+id_cliente+";";
                    conn.query(sql,function(err){
                        if(err) throw err;
                         res.redirect('/gocliente');
                    });
                }
            }); 
        });

        this.app.get("/godetallesalida",(req,res)=>{
            let conn=conexion.conexion();
            conn.connect(function (err){
                if(err) throw err;
                else{
                    let sql="SELECT * FROM detallesalida;";
                    conn.query(sql,function(err,result){
                        if(err) throw err;
                        res.render("detallesalida",{dato:result});
                    });
                }
            });
        });

        this.app.get('/goformcreatedetallesalida', (req, res) => {
            res.render('formcreatedetallesalida');
        });

        this.app.get('/createdetallesalida', (req, res) => {
            let id_detallesalida=req.query.id_detallesalida;
            let id_salida=req.query.id_salida;
            let id_product=req.query.id_product;
            let fecha=req.query.fecha;
            let cantidad=req.query.cantidad;
            let conn=conexion.conexion();
            conn.connect(function(err){
                if(err) throw err;
                let sql="INSERT INTO detallesalida (id_detallesalida,id_salida,id_product,fecha,cantidad) VALUES ("+id_detallesalida+","+id_salida+","+id_product+",'"+fecha+"',"+cantidad+");";
                conn.query(sql,function(err){
                    if(err) throw err;
                     res.redirect('/godetallesalida');
                });
            });
        });

        this.app.get('/goformupdatedetallesalida/:id', (req, res) => {
            let id_detallesalida=req.params.id;
            res.render('formupdatedetallesalida',{dato:id_detallesalida});
        });

        this.app.get('/updatedetallesalida/:id', (req, res) => {
            let id_detallesalida=req.params.id;
            let id_salida=req.query.id_salida;
            let id_product=req.query.id_product;
            let fecha=req.query.fecha;
            let cantidad=req.query.cantidad;
            let conn=conexion.conexion();
            conn.connect(function(err){
                if(err) throw err;
                else{
                    let sql="UPDATE detallesalida SET id_salida="+id_salida+", id_product="+id_product+", fecha="+fecha+", cantidad="+cantidad+" WHERE id_detallesalida="+id_detallesalida+";";
                    conn.query(sql,function(err){
                        if(err) throw err;
                        else{
                             res.redirect('/godetallesalida');
                        }
                    });
                }
            });
        });

        this.app.get('/deletedetallesalida/:id', (req, res) => {
            let id_detallesalida=req.params.id;
            let conn=conexion.conexion();
            conn.connect(function(err){
                if(err) throw err;
                else{
                    let sql="DELETE FROM detallesalida WHERE id_detallesalida="+id_detallesalida+";"
                    conn.query(sql,function(err){
                        if(err) throw err;
                        else{
                            res.redirect(['/godetallesalida']);
                        }
                    });
                }
            });
        });
    }
        this.app.get("/goproducto",(req,res)=>{
            let conn=conexion.conexion();
            conn.connect(function (err){
                if(err) throw err;
                else{
                    let sql="SELECT * FROM producto;";
                    conn.query(sql,function(err,result){
                        if(err) throw err;
                        res.render("producto",{dato:result});
                    });
                }
            });
        });

        this.app.get('/goformcreateproducto', (req, res) => {
            res.render('formcreateproducto');
        });

        this.app.get('/createproducto', (req, res) => {
            let id_cat=req.query.id_cat;
            let nombre=req.query.nombre;
            let descripcion=req.query.descripcion;
            let stock=req.query.stock;
            let minimo=req.query.minimo;
            let conn=conexion.conexion();
            conn.connect(function(err){
                if(err) throw err;
                else{
                    let sql="INSERT INTO producto (id_cat,nombre,descripcion,stock,stockminimo) VALUES ("+id_cat+",'"+nombre+"','"+descripcion+"',"+stock+","+minimo+");";
                    conn.query(sql,function(err){
                        if(err) throw err;
                         res.redirect('/goproducto');
                    });
                }
            });
        });

        this.app.get('/goformupdateproducto/:id', (req, res) => {
            let id_product=req.params.id;
            res.render('formupdateproducto',{dato:id_product});
        });

        this.app.get('/updateproducto/:id', (req, res) => {
            let id_product=req.params.id;
            let id_cat=req.query.id_cat;
            let id_prov=req.query.id_prov;
            let nombre=req.query.nombre;
            let cantidad=req.query.cantidad;
            let valor=req.query.valor;
            let conn=conexion.conexion();
            conn.connect(function(err){
                if(err) throw err;
                else{
                    let sql="UPDATE producto SET id_cat="+id_cat+", id_prov="+id_prov+", nombre='"+nombre+"', cantidad="+cantidad+", valor="+valor+" WHETE id_product="+id_product+";";
                    conn.query(sql,function(err){
                        if(err) throw err;
                        else{
                             res.redirect('/goproducto');
                        }
                    });
                }
            });
        });

        this.app.get('/deleteproducto/:id', (req, res) => {
            let id_product=req.params.id;
            let conn=conexion.conexion();
            conn.connect(function(err){
                if(err) throw err;
                else{
                    let sql="DELETE FROM producto WHERE id_product="+id_product+";"
                    conn.query(sql,function(err){
                        if(err) throw err;
                        else{
                            res.redirect('/goproducto');
                        }
                    });
                }
            });
        });
{
        this.app.get("/goproveedor",(req,res)=>{
            let conn=conexion.conexion();
            conn.connect(function (err){
                if(err) throw err;
                else{
                    let sql="SELECT * FROM provedor;";
                    conn.query(sql,function(err,result){
                        res.render("proveedor",{dato:result});
                    });
                }
            });
        });

        this.app.get('/goformcreateproveedor', (req, res) => {
            res.render('formcreateproveedor');
        });

        this.app.get('/createproveedor', (req, res) => {
            let id_prov=req.query.id_prov;
            let nombre=req.query.nombre;
            let direccion=req.query.direccion;
            let telefono=req.query.telefono;
            let conn=conexion.conexion();
            conn.connect(function(err){
                if(err) throw err;
                let sql="INSERT INTO provedor (id_prov,nombre,direccion,telefono) VALUES ("+id_prov+",'"+nombre+"','"+direccion+"',"+telefono+");";
                conn.query(sql,function(err){
                    if(err) throw err;
                });
                sql="SELECT * FROM provedor;";
                conn.query(sql,function(err,result){
                    if(err) throw err;
                    res.render("proveedor",{dato:result});
                });
            });
        });

        this.app.get('/goformupdateproveedor/:id', (req, res) => {
            let id=req.params.id;
            res.render('formupdateproveedor',{dato:id});
        });

        this.app.get('/updateproveedor/:id', (req, res) => {
            let id_prov=req.params.id;
            let nombre=req.query.nombre;
            let direccion=req.query.direccion;
            let telefono=req.query.telefono;
            let conn=conexion.conexion();
            conn.connect(function(err){
                if(err) throw err;
                else{
                    let sql="UPDATE provedor SET nombre='"+nombre+"', direccion='"+direccion+"', telefono="+telefono+" WHERE id_prov="+id_prov+";";
                    conn.query(sql,function(err){
                        if(err) throw err;
                        else{
                             res.redirect('/goproveedor');
                        }
                    });
                }
            });
        });

        this.app.get('/deleteproveedor/:id', (req, res) => {
            let id_prov=req.params.id;
            let conn=conexion.conexion();
            conn.connect(function(err){
                if(err) throw err;
                else{
                    let sql="DELETE FROM provedor WHERE id_prov="+id_prov+";"
                    conn.query(sql,function(err){
                        if(err) throw err;
                        else{
                            res.redirect('/goproveedor');
                        }
                    });
                }
            });
        });

        this.app.get("/gosalida",(req,res)=>{
            let conn=conexion.conexion();
            conn.connect(function (err){
                if(err) throw err;
                else{
                    let sql="SELECT * FROM salida;";
                    conn.query(sql,function(err,result){
                        if(err) throw err;
                        res.render("salida",{dato:result});
                    });
                }
            });
        });

        this.app.get('/goformcreatesalida', (req, res) => {
            res.render('createsalida');
        });

        this.app.get('/createsalida', (req, res) => {
            let id_salida=req.query.id_salida;
            let id_cliente=req.query.id_cliente;
            let fecha=req.query.fecha;
            let conn=conexion.conexion();
            conn.connect(function(err){
                if(err) throw err;
                let sql="INSERT INTO salida (id_salida,id_cliente,fecha) VALUES ("+id_salida+","+id_cliente+",'"+fecha+"');";
                conn.query(sql,function(err){
                    if(err) throw err;
                });
                sql="SELECT * FROM salida;";
                conn.query(sql,function(err,result){
                    if(err) throw err;
                    res.render("salida",{dato:result});
                });
            });
        });

        this.app.get('/goformupdatesalida/:id', (req, res) => {
            let id_salida=req.params.id;
            res.render('formupdatesalida',{dato:id_salida});
        });
        
        this.app.get('/updatesalida/:id', (req, res) => {
            let id_salida=req.params.id;
            let id_cliente=req.query.id_cliente;
            let fecha=req.query.fecha;
            let conn=conexion.conexion();
            conn.connect(function(err){
                if(err) throw err;
                else{
                    let sql="UPDATE salida SET id_cliente="+id_cliente+", fecha="+fecha+" WHERE id_salida="+id_salida+";";
                    conn.query(sql,function(err){
                        if(err) throw err;
                        else{
                            res.redirect('/gosalida');
                        }
                    });
                }
            });
        });
    }
        this.app.get("/gousuario",(req,res)=>{
            let conn=conexion.conexion();
            conn.connect(function (err){
                if(err) throw err;
                else{
                    let sql="SELECT * FROM usuarios;";
                    conn.query(sql,function(err,result){
                        if(err) throw err;
                        res.render("usuario",{dato:result});
                    });
                }
            });
        });

        this.app.get('/goformcreateusuario', (req, res) => {
            res.render('formcreateusuario');
        });

        this.app.get('/createusuario', (req, res) => {
            let id_us=req.query.id_us;
            let usuario=req.query.usuario;
            let passwordd=req.query.passwordd;
            passwordd=Sha1(passwordd);
            let rol='Administrador';

            let conn=conexion.conexion();
            conn.connect(function(err){
                if(err) throw err;
                else{
                    let sql="INSERT INTO usuarios (id_us,usuario,passwordd,rol) VALUES ('"+id_us+"','"+usuario+"','"+passwordd+"','"+rol+"');";
                    conn.query(sql,function(err){
                        if(err) throw err;
                        else{
                             res.redirect('/gousuario');
                        }
                    });
                }
            });
        });

        this.app.get('/goformupdateusuario/:id', (req, res) => {
            res.render('formupdateusuario',{dato:req.params.id});
        });

        this.app.get('/updateusuario/:id', (req, res) => {
            let id_us=req.params.id;
            let usuario=req.query.usuario
            let passwordd=req.query.passwordd
            let passSha1=Sha1(passwordd);
            let conn=conexion.conexion();

            conn.connect(function(err){
                if(err) throw err;
                else{
                    let sql="UPDATE usuarios SET usuario='"+usuario+"', passwordd='"+passSha1+"' WHERE id_us='"+id_us+"';";
                    conn.query(sql,function(err){
                        if(err) throw err;
                        else{
                             res.redirect('/gousuario');
                        }
                    });
                }
            })
        });

        this.app.get('/deleteusuario/:id', (req, res) => {
            let id_us=req.params.id;
            let conn=conexion.conexion();
            conn.connect(function(err){
                if(err) throw err;
                else{
                    let sql="DELETE FROM usuarios WHERE id_us='"+id_us+"';";
                    conn.query(sql,function(err){
                        if(err) throw err;
                        else{
                            res.redirect('/gousuario');
                        }
                    });
                }
            });
        });        
        
        this.app.get("/login",(req,res)=>{
            let usuar=req.query.usuar;
            let passw=req.query.passw;
            
            /////////////////////////////////////////////////
            let passSha1=Sha1(passw);
            
            let conn=conexion.conexion();
            conn.connect(function(err){
                if(err) throw err;
                console.log('Conectado!!!');
                let sql="SELECT * FROM usuarios WHERE id_us="+usuar+";";
                conn.query(sql,function(err,result){
                    if(err) throw err;
                    else{
                        if(result.length>0){
                            if((result[0].id_us==usuar) && (result[0].passwordd==passSha1) && (result[0].rol=="Administrador")){
                                let user={
                                    usr:usuar,
                                    psw:passw,
                                    rol:result[0].rol
                                };
                                req.session.user=user;
                                req.session.save();
                                conn.query("SELECT * FROM producto",function(err,result2){
                                    if(err) throw err;
                                    else{
                                        res.render("loginadm",{dato:result2});
                                    }
                                });
                                console.log("logrado");
                            }else if((result[0].id_us==usuar) && (result[0].passwordd==passSha1) && (result[0].rol=="Administrador")){
                                let user={
                                    usr:usuar,
                                    psw:passw,
                                    rol:result[0].rol
                                };
                                req.session.user=user;
                                req.session.save();
                                res.render("loginusu");
                            }
                            else{
                                res.redirect('/');
                                console.log("segunda salida");
                            }
                        }
                        else{
                             res.redirect('/');
                             console.log("primera salida");
                        }
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
let express=require('express');
let mysql=require('mysql');
let Sha1=require('sha1');
 
class Server{
    constructor(){
        this.port=process.env.PORT;
        this.app=express();
        this.routes();
        this.middlewares();
    }
    middlewares(){
        this.app.use(express.static('public'));
        this.app.set('view engine', 'ejs');
    }
    routes(){
        this.app.get("/goproveedor",(req,res)=>{

            res.render('proveedor');
        });

        this.app.get("/gocategoria",(req,res)=>{

            res.render('categorias');
        });

        this.app.get("/gocliente",(req,res)=>{

            res.render('cliente');
        });

        this.app.get("/registrar",(req,res)=>{
            let id_us=req.query.nrj;
            let nombre=req.query.nombre;
            let passw=req.query.passw;
            let rol=req.query.privilegio;
            let passSha1=Sha1(passw);

            let conn=mysql.createConnection({
                user:'root',
                password:'1Q2W3E4R5T6Y',
                database:'ceiba'
            });

            if(rol=="Usuario"){
                conn.connect(function(err){
                    if(err) throw err;
                    console.log("conectado!!");
                    let sql="INSERT INTO usuarios (id_us,usuario,passwordd,rol) VALUES ("+id_us+",'"+nombre+"','"+passSha1+"','"+rol+"')";
                    conn.query(sql,function(err){
                        if(err) throw err;
                        else{
                            console.log("Archivo Registrado con exito");
                            alert('agregado con exito');
                            res.render('loginadm');
                        }
                    });
                });
            }
            else if(rol=="Administrador"){
                conn.connect(function(err){
                    if(err) throw err;
                    console.log("conectado!!");
                    let sql="INSERT INTO usuarios (id_us,usuario,passwordd,rol) VALUES ("+id_us+",'"+nombre+"','"+passSha1+"','"+rol+"')";
                    conn.query(sql,function(err){
                        if(err) throw err;
                        else{
                            console.log("Archivo Registrado con exito");
                        }
                    });
                });
            }
        });

        this.app.get("/login",(req,res)=>{
            let usuar=req.query.usuar;
            let passw=req.query.passw;
            let passSha1=Sha1(passw);
            
            let conn=mysql.createConnection({
                host:'localhost',
                user:'root',
                password:'1Q2W3E4R5T6Y',
                database:'ceiba',
                insecureAuth : true
            });
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
                        console.log("Error");
                    }
                });
            });
        });
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log('http://127.0.0.1:'+this.port);
        });
    }
}

module.exports=Server;
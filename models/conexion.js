const mysql= require("mysql");
let express=require('express');

class Conexion{
    constructor(){
        this.dbdatabase=process.env.MYSQLDATABASE;
        this.dbhost=process.env.MYSQLHOST;
        this.dbpassword=process.env.MYSQLPASSWORD;
        this.dbport=process.env.MYSQLPORT;
        this.dbuser=process.env.MYSQLUSER;
        this.dburl=process.env.MYSQL_URL;
        this.result;
    }
    conexion(){
        let conn=mysql.createConnection({
            user:this.dbuser,
            password:this.dbpassword,
            database:this.dbdatabase,
            port:this.dbport,
            host:this.dbhost

        });
        return conn;
    }
        
}
module.exports=Conexion;
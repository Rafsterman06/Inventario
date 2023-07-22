class Conexion{
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
    
}
const Read=require("./read");
const Create=require("./create");
let read=new Read();
let create=new Create();

class Eventos{
    constructor(){
        this.create=document.getElementById("create");
        this.read=document.getElementById("read");
        this.update=document.getElementById("update");
        this.deletee=document.getElementById("delete");

    }
    categoria(){
        this.create.addEventListener("click",create.createcategoria());
        this.read.addEventListener("click",read.readcategoria());
        this.update.addEventListener("click");
        this.deletee.addEventListener("click");

    }
}
module.exports=Eventos;

class Read{
    constructor(){

    }

    readcategoria(result){
        let concatenacion="";
        for (let x in result){
            concatenacion+="<tr>"+result[x].id_cat+"</tr><tr>"+result[x].nombre+"</tr><tr>"+result[x].Description+"</tr>";
        }
        tablacategoria.innerHTML=concatenacion;
    }
    readcliente(result){
        let concatenacion="";
        for (let x in result){
            concatenacion+="<tr><td>"+result[x].id_cliente+"</td><td>"+result[x].nombre+"</td><td>"+result[x].Direccion+"</td><td>"+result[x].telefono+"</td></tr>";
        }
        const tablacliente=document.querySelector('#tablacliente');
        tablacliente.appendChild(concatenacion);
    }
    readdetallesalida(result){
        let concatenacion="";
        for (let x in result){
            concatenacion+="<tr><td>"+result[x].id_detallesalida+"</td><td>"+result[x].id_salida+"</td><td>"+result[x].id_product+"</td><td>"+result[x].fecha+"</td></tr><tr>"+result[x].cantidad+"</td></tr>";
        }
        tabladetallesalida.innerHTML=concatenacion;
    }
    readproducto(result){
        let concatenacion="";
        for (let x in result){
            concatenacion+="<tr><td>"+result[x].id_product+"</td><td>"+result[x].id_cat+"</td><td>"+result[x].id_prov+"</td><td>"+result[x].nombre+"</td></tr>";
        }
        tablaproducto.innerHTML=concatenacion;
    }
    readproveedor(result){
        let concatenacion="";
        for (let x in result){
            concatenacion+="<tr><td></td>"+result[x].id_cliente+"</td><td>"+result[x].nombre+"</td><td>"+result[x].direccion+"</td></tr><tr>"+result[x].telefono+"</tr>";
        }
        tablaproveedor.innerHTML=concatenacion;
    }
    readsalida(result){
        let concatenacion="";
        for (let x in result){
            concatenacion+="<tr><td>"+result[x].id_cliente+"</td><td>"+result[x].nombre+"</td><td>"+result[x].direccion+"</td></tr><tr>"+result[x].telefono+"</tr>";
        }
        tablasalida.appendChild(concatenacion);
    }

    readusuarios(result){
        let concatenacion="";
        for (let x in result){
            concatenacion+="<tr><td>"+result[x].id_cliente+"</td><td>"+result[x].nombre+"</td><td>"+result[x].direccion+"</td></tr><tr>"+result[x].telefono+"</tr>";
        }
        tablausuaros.innerHTML=concatenacion;
    }
}
module.exports=Read;
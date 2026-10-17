import axios from "axios";
import Global from "../Global";

export default class ServiceCoches {

    getCoche(idcoche) {
        return new Promise(function(resolve) {
            let url = Global.urlApiCoches;
            let request = "api/Coches/FindCoche/" + idcoche;

            axios.get(url + request).then(response => {
                console.log("Obteniendo coche");
                resolve(response.data)
            })
        })
    }

    getCoches() {
        return new Promise(function(resolve) {
            let url = Global.urlApiCoches;
            let request = "api/Coches";

            axios.get(url + request).then(response => {
                console.log("Leyendo coches");
                resolve(response.data)
            })
        })
    }

    insertCoche(coche) {
        return new Promise(function(resolve, reject) {
            let url = Global.urlApiCoches;
            let request = "api/Coches/InsertCoche";

            axios.post(url + request, coche)
                .then(response => {
                    console.log("Insertando coche...")
                    resolve(response)
                })
                
        })
    }

    updateCoche(coche) {
        return new Promise(function(resolve) {
            let url = Global.urlApiCoches;
            let request = "api/Coches/UpdateCoche";

            axios.put(url + request, coche)
                .then(response => {
                    console.log("Modificando coche...")
                    resolve(response)
                })
                
        })
    }

    deleteCoches(idCoche) {
        return new Promise(function(resolve) {
            let url = Global.urlApiCoches;
            let request = "api/Coches/DeleteCoche/" + idCoche;

            axios.delete(url + request).then(response => {
                console.log("Eliminando coche con id: " + idCoche);
                resolve(response)
            })
        })
    }
}

import Nombre from "./nombre.js"
export default class Doctor {
    constructor({cedula,especialidad,nombre,telefono}){

        this._cedulas = cedula;
        this._especialidades = especialidad;
        this._nombres = nombre;
        this._telefonos = telefono;

    }

    getCedula(){
        return this._cedulas
    }

    getNombres(){
        return this._nombres
    }
    
    esIgualA(doctor){
        if (doctor.getCedula() === this._cedulas){
            return true;
        }
        return false;
    }

    getPerfilb(){
        return `${this._cedulas}, ${this._especialidades}, ${this._nombres.getNombreCompleto()}, ${this._telefonos}`
    }
}
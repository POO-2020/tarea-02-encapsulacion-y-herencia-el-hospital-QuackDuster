import Fecha from "./fecha.js"
import Nombre from "./nombre.js"
import Paciente from "./paciente.js"
export default class PacienteAsegurado extends Paciente{

    constructor({nombre, fecha,numero, numeroPoliza, fechaVigencia, compañia}){
        super({nombre,fecha,numero})
        this._nombre = nombre;
        this._fecha = fecha;
        this._numero = numero;
        this._numeroPoliza = numeroPoliza;
        this._fechaVigencia = fechaVigencia;
        this._compañia = compañia;
    }

    getPerfil(){
        return `${this._nombre.getNombreCompleto()} ${this._fecha.getFecha()} ${this._numero} ${this._numeroPoliza} ${this._fechaVigencia.getFecha()} ${this._compañia}`
    }
}
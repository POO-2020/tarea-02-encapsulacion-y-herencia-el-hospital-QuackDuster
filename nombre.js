export default class Nombre {
 
    constructor (nombre, apePat, apeMat) {
        this._nombre = nombre
        this._apePat = apePat
        this._apeMat = apeMat
    }
    

    getNombreCompleto() {
        return `${this._nombre} ${this._apePat} ${this._apeMat}`
    }

    getApellidoNombre() {
        return `${this._apePat} ${this._apeMat} ${this._nombre}`
    }

    getIniciales() {
        return `${this._nombre.charAt(0)}${this._apePat.charAt(0)}${this._apeMat.charAt(0)}`
    }

}
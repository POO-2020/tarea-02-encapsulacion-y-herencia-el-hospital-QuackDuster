import Doctor from "./doctor.js"
export default class Hospital {

    constructor(nombre, direccion){
    this._nombres=nombre
    this._direcciones=direccion
    this._doctores= new Array()
    this._citas= new Array()
    }

    
    registrarDoctor(doctor){
        this._doctores.push(doctor)
    }

    _buscarDoctor(doctor){
        let result = null;
        this._doctores.forEach(medic => {
            if (medic.esIgualA(doctor)){
                result = medic;
            }
        })
        return result;
    }

    _encontrarIndiceDoctor(doctor){
        let indice = -1
        this._doctores.forEach((medic,i) => {
            if (medic.esIgualA(doctor)){
                indice= i;
            }
        });
        return indice;
    }

    _eliminarDoctor(doctor){
        let indice = this._buscarDoctor(doctor)
        if (indice < 0){
            return false;
        }
        this._doctores.splice(indice,1)
        return true;
    }

    actualizarDoctor(doctor,nuevoDoctor){
        let indice = this._encontrarIndiceDoctor(doctor);
        if (indice < 0){
            return false;
        }
        this._doctores.splice(indice,1,nuevoDoctor)
        return true;
    }

    listarDoctores(){
        console.log(">>>>> Listado de Doctores <<<<<<")
        this._doctores.forEach( (doctor,i) => {
            console.log(`(${i+1}) ${doctor.getPerfilb()}`)
        })
            
    }

    registrarCita(cita){
        this._citas.push(cita)
    }
    
    _buscarCita(cita){
        let result = null;
        this._citas.forEach(dates => {
            if(dates.esIgualA(cita)){
                result = dates;
            }
        })
        return result;
    }

    _eliminarCita(cita){
      let indice = this._buscarCita(cita)
      if (indice <0){
          return false;
      }  
      this._citas.splice(indice,1)
      return true;
    }

    _encontrarIndiceCita(cita){
        let indice = this._citas.findIndex(dates => dates.esIgualA(cita))
        return indice;
    }

    actualizarCita(cita,nuevaCita){
        let indice = this._encontrarIndiceCita(cita);
        if (indice <0){
            return false;
        }
        this._citas.splice(indice,1,nuevaCita)
        return true;
    }

    listarCitas(){
        console.log(">>>>> Listado de Citas <<<<<")
        this._citas.forEach( (cita,i) => {
            console.log(`(${i+1}) ${cita.getCita()}`)
        })
            
        
    }
}
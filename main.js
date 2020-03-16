import Tiempos from "./tiempo.js";
import Nombre from "./nombre.js";
import Fecha from "./fecha.js";
import Paciente from "./paciente.js"
import Doctor from "./doctor.js";
import Cita from "./cita.js";
import Hospital from "./hospital.js";
import PacienteAsegurado from "./pacienteAsegurado.js"

const pacienteA = new Paciente({
    nombre: new Nombre("Oscar Alfredo", "Ramirez", "Valenciana"),
    fecha: new Fecha (16,4,1999),
    numero: "3121222434",
})

const pacienteB = new Paciente({
    nombre: new Nombre("Antonio", "Gonzales", "Velazques"),
    fecha: new Fecha (4,2,1997),
    numero: "312445673",
})

const pacienteC = new Paciente({
    nombre: new Nombre("Maria", "Gonzales", "Ochoa"),
    fecha: new Fecha (4,1,1996),
    numero: "312672984",
})

const doctorA = new Doctor ({
    cedula:"32324FDSAAA",
     especialidad:"Cirujano",
    nombre: new Nombre("Alfredo","Rosales", "Villa"),
    telefono:"312122435"
})
const doctorB = new Doctor ({
    cedula:"245663AF",
    especialidad:"Oftalmologo",
    nombre: new Nombre("Everardo", "Castro", "Flores"),
    telefono:"21345556"
})
const doctorC = new Doctor ({
    cedula:"2343GFJD",
    especialidad:"Cirujano",
    nombre: new Nombre("Ramon", "Castro", "Campos"),
    telefono:"444442244"
})

class Main {

    constructor(){
        
    }

    pruebaTiempo() {
        let horas = new Tiempos(9,22,"am");
        console.log("-----------Tiempo---------")
        console.log(horas.getFormato12());
        console.log(horas.getFormato24());
    }

    pruebaNombre() {
        let people = new Nombre("Antonio Eduardo", "Lopez", "Castro");
        console.log("---------Nombre-----------")
        console.log(people.getNombreCompleto())
        console.log(people.getApellidoNombre())
        console.log(people.getIniciales())
    }

    pruebaFecha() {
        let dia = new Fecha(9,5,1999)
        
        console.log("---------Fecha------------")
        console.log(dia.getAños())
        console.log(dia.getMeses())
        console.log(dia.getSemanas())
        console.log(dia.getDias())
        console.log(dia.getFecha())
        console.log(dia.getDiaFecha())
    }

    pruebaPaciente() {
        let paciente = new Paciente({
        nombre: new Nombre("Oscar Alfredo", "Ramirez", "Valenciana"),
        fecha: new Fecha (16,4,1999),
        numero: "3121222434",
        })
        console.log("--------Paciente-----------")
        console.log(paciente.getPerfil())
    }

    pruebaPacienteAsegurado(){
        let pacienteAsegurado1 = new PacienteAsegurado({
            nombre: new Nombre ("Alfredo","Gomez", "Farias"),
            fecha: new Fecha (1,3,2020),
            numero: "3232321312",
            numeroPoliza: "23232H",
            fechaVigencia: new Fecha (1,5,2022),
            compañia: "Dogoverso Inc."
        })
        console.log("-----Paciente Asegurado----")
        console.log(pacienteAsegurado1.getPerfil())
    }
    
    pruebaDoctor() {
        let doctor = new Doctor ({
        cedula: ("43HSK34KFJ3"),
        especialidad: ("Medico Cirujano"),
        nombre: new Nombre("Roberto", "Mendoza","Perez"),
        telefono: ("312213342")
        })
        console.log("--------Doctores-----------")
        console.log(doctor.getPerfilb())
    }

    pruebaCita() {
        let cita = new Cita ({
        fecha: new Fecha(12,4,2020),
        hora: new Tiempos (12,44, "pm"),
        doctor: doctorC,
        paciente: pacienteA,
        })
        console.log("----------Citas------------")
        console.log(cita.getCita())
    }

    pruebaHospital(){
        let hospitalA = new Hospital ({
            nombre:"Clinica #4",
            direccion:"Avenida Madero, #455"
        })
        console.log("---------Hospital----------")
        

        let cita1 = new Cita ({
            fecha:new Fecha(20,12,2020),
            hora:new Tiempos(5,0,"pm"),
            doctor: doctorA,
            paciente: pacienteB
        })

        let cita2 = new Cita ({
            fecha:new Fecha(3,4,2020),
            hora:new Tiempos(4,0,"pm"),
            doctor: doctorB,
            paciente: pacienteC
        })
        hospitalA.registrarDoctor(doctorA)
        hospitalA.registrarDoctor(doctorB)
        hospitalA.registrarDoctor(doctorC)
        hospitalA.listarDoctores()
        console.log('----Buscar Doctor----')
        console.log(hospitalA._buscarDoctor(doctorA))
        console.log(hospitalA._buscarDoctor(doctorB))
        console.log(hospitalA._buscarDoctor(doctorC))
        console.log('----Encontrar Indice----')
        console.log(hospitalA._encontrarIndiceDoctor(doctorA))
        console.log(hospitalA._encontrarIndiceDoctor(doctorB))
        console.log(hospitalA._encontrarIndiceDoctor(doctorC))
        console.log('----Eliminar Doctor----')
        console.log(hospitalA._eliminarDoctor(doctorA))
        hospitalA.listarDoctores()
        console.log('----Actualizar Doctores----')
        console.log(hospitalA.actualizarDoctor(doctorB,doctorA))
        hospitalA.listarDoctores() 
        console.log('')
        hospitalA.registrarCita(cita1)
        hospitalA.registrarCita(cita2)
        hospitalA.listarCitas()
        console.log('----Buscar Cita----')
        console.log(hospitalA._buscarCita(cita1))
        console.log(hospitalA._buscarCita(cita2))
        console.log('----Encontrar Indice----')
        console.log(hospitalA._encontrarIndiceCita(cita1))
        console.log(hospitalA._encontrarIndiceCita(cita2))
        console.log('----Eliminar Cita----')
        console.log(hospitalA._eliminarCita(cita1))
        hospitalA.listarCitas()
        console.log('----Actualizar Cita----')
        console.log(hospitalA.actualizarCita(cita2,cita1))
        hospitalA.listarCitas()
    }

}

let tester = new Main()
tester.pruebaTiempo();
tester.pruebaNombre();
tester.pruebaFecha();
tester.pruebaPaciente();
tester.pruebaDoctor();
tester.pruebaCita();
tester.pruebaHospital();
tester.pruebaPacienteAsegurado();

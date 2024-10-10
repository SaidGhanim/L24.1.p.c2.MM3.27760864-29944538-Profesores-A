export default class Cl_universidad {
    constructor() {
        this.acIngresoFinal = 0; 
    }

    procesarProfesor(profesor) {
        this.acIngresoFinal += profesor.ingreso();
    }

    devolverIngresoFinal() {
        return this.acIngresoFinal;
    }


 }





       
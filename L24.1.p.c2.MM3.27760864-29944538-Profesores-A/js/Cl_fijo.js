import Cl_profesor from "./Cl_profesor.js";

export default class Cl_fijo extends Cl_profesor {
    constructor(nombre,bono,tipo,sueldo) {
    super(nombre,bono,tipo) 
    this.sueldo = sueldo 
    }

    ingreso() {
        return this.sueldo + this.bono
    }
}
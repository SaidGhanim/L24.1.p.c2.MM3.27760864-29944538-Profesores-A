import Cl_profesor from "./Cl_profesor.js";

export default class Cl_fijo extends Cl_profesor {
    constructor(nombre, bono, cntHoras) {
        super(nombre,bono,tipo);
        this.cntHoras = cntHoras;
    }

}
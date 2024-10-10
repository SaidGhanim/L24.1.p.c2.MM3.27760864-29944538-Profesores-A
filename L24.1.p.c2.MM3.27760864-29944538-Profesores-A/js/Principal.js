/*En la Universidad se le paga a cada profesores un bono, sin embargo si es personal fijo tiene 
un sueldo y si es contratado tiene cantidad de horas, donde cada una se paga a $10. Considere 
que a todos los profesores se les pide su nombre, y las clases Cl_fijo y Cl_contratado heredan 
de la clase Cl_profesor. 
Haga un programa que lea los datos de un profesor fijo y reporte su ingreso total. 
Ejemplos de la corrida: 
Nombre del profesor fijo: Carlos 
Monto del bono: $25 
Monto del sueldo: $100 
Ingreso total del profesor Carlos: $125 
Nombre del profesor fijo: Carolina 
Monto del bono: $40 
Monto del sueldo: $90 
Ingreso total del profesor Carolina: $130*/

import Cl_universidad from "./Cl_universidad.js";
import Cl_fijo from "./Cl_fijo.js";
import Cl_contratado from "./Cl_contratado.js";


let universidad = new Cl_universidad();
let fijo = new Cl_fijo("Carlos", 25,1, 100);
let fijo2 = new Cl_fijo("Carolina", 40,1, 90);

universidad.procesarProfesor(fijo);
universidad.procesarProfesor(fijo2);

let salida = document.getElementById("salida");

let mostrarProfesor=(profesor)=>{
    return `
    <tr>
          <td>${profesor.nombre}</td>
          <td>${profesor.bono}</td> 
          <td>${profesor.sueldo}</td>
          <td>$${profesor.ingreso()}</td>
      </tr>
       `;
  };
  salida.innerHTML=`<table>
   <tr>
          <th>Nombre</th>
          <th>Bono</th>
          <th>Sueldo</th>
           <th>Ingreso Final</th>
      </tr>
      ${mostrarProfesor(fijo)}
      ${mostrarProfesor(fijo2)}
  </table>
  `
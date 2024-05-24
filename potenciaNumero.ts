/*
Realice un programa que devuelva la potencia de un número. 
La base y el exponente deben ser ingresados por teclado. 
Sólo deben admitirse exponentes mayores o iguales a cero. 
Recuerde que el resultado de un numero elevado a 0 es 1.
Separe la lógica de calcular la potencia utilizando métodos. 

*/
/*  
    1- pedir al usuario 
        " Ingrese el numero de la base"
        " Ingrese el numero del exponente"
    2- comprobar

*/

import * as rls from "readline-sync";

let base: number = rls.questionInt("Ingrese el numero de la base: ");
let exponente: number = rls.questionInt("Ingrese el numero del exponente: ");
let resultadoPotencia: number = 0;

function calcularPotencia(base: number, exponente: number): number {
  let resultado: number = 0;
  if (exponente >= 0) {
    resultado = base ** exponente;
  } else {
    console.log("El exponente debe ser mayor o igual a cero.");

    let exponenteNuevo: number = rls.questionInt(
      "Ingrese el numero de exponente nuevamente: "
    );
    resultado = base ** exponenteNuevo;
  }
  return resultado;
}

resultadoPotencia = calcularPotencia(base, exponente);
console.log(
  "El resultado de calcular la potencia del número deseado es " +
    resultadoPotencia
);





//-----------------------------------------------------------------------------------------------
/*import*as rls from 'readline-sync';

let base : number=rls.questionInt(" Ingrese el numero de la base ");
let exponente:number=rls.questionInt(" Ingrese el numero del exponente ");

let resultadoPotencia:number=0;

function calcularPotencia (exponente :Number): number{
    let resultado:number=0;
    if(exponente >=0){
        resultado= base^exponente;
    }else if (exponente <0){
        let exponenteNuevo:number=rls.questionInt(" Ingrese el numero de exponente nuevamente ")
        resultado= base^exponenteNuevo;
    }
return resultado;
}

resultadoPotencia=calcularPotencia(base,exponente);
console.log (" el resultado de calcular la potencia del numero deseado es "+ resultadoPotencia); 
-----------------------------------------------------------------------------------------

import * as rls from 'readline-sync';

let base: number = rls.questionInt("Ingrese el numero de la base: ");
let exponente: number = rls.questionInt("Ingrese el numero del exponente: ");
let resultadoPotencia: number = 0;

function calcularPotencia(base: number, exponente: number): number {
    let resultado: number = 0;
    if (exponente >= 0) {
        resultado = Math.pow(base, exponente);
    } else {
        console.log("El exponente debe ser mayor o igual a cero.");
        let exponenteNuevo: number = rls.questionInt("Ingrese el numero de exponente nuevamente: ");
        resultado = Math.pow(base, exponenteNuevo);
    }
    return resultado;
}

resultadoPotencia = calcularPotencia(base, exponente);
console.log("El resultado de calcular la potencia del número deseado es " + resultadoPotencia);
*/

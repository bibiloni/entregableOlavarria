
//•Desarrollar un algoritmo que dado un número,
//ingresado por el usuario determine si el
//número es par o impar y le informe al usuario
//•En el caso de ser 0 (cero) el algoritmo deberá informarlo

/*
1- pedirle al usuario 					
	" Ingrese el número para poder determinar si es par o impar " 				
2- comprobar 					
    -Si el número ingresado == 0  					
	entonces imprimir 				
		" El número ingresado fue el 0 y es par " 			
    -Sino el número ingresado %2==0					
	entonces imprimir				
		" El número ingesado es par "			
    -Sino el número ingresado %2==1					
	entonces imprimir				
		" El número ingresado es impar "			
*/

import * as readlineSync from 'readline-sync';

let numero : number = readlineSync.questionInt(" Ingrese el numero para poder determinar si es Par o Impar : ")

if (numero == 0){
    console.log(" el numero ingresado fue el "+ numero + " y es par ");

} else if (numero % 2 == 0){ 
    console.log(" El numero " +numero+ " es par ");

} else if (numero%2==1){
    console.log("El numero " + numero + " es impar "); 
}

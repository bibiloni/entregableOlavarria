        /*
        Estructuras de Datos

        Encontrar el elemento más grande del arreglo

        Dado el siguiente arreglo
        [4,7,9,3,1,45,67,23,29,78,11,16]
        - Crear un programa que encuentre cuál es el número
        más grande del arreglo e imprimirlo por consola
        - Almacenar el número más grande en una variable
        global y pasarlo a una función para determinar si el
        número es par o impar
        */
/*
1-cargar el arreglo
    2- analizar cual es el numero mayor del arreglo
    3- analizar dado el numero mayor si es par o impar
4- imprimir cual numero es mayor
5- imprimer si el numero mayor es par o impar 
*/


let cargarArreglo: number[] = [4,7,9,3,1,45,67,23,29,78,11,16,99];

let numeroMaximo:number=cargarArreglo[0];

function mayor(contador:number):void{
    for (contador=1;contador<cargarArreglo.length;contador++){
        if(cargarArreglo[contador]>numeroMaximo){
            numeroMaximo=cargarArreglo[contador];
        }
    }
console.log (`El numero mas grande del arreglos se encuentra en la posicion ${contador} y es el ${numeroMaximo}`);
}
mayor(numeroMaximo)

function parImpar(comprobar: number): void {
    if (comprobar % 2 === 0) {
        console.log( ` Y el numero  ${comprobar}  es PAR` );
    } else {
        console.log(  `Y el numero ${comprobar} es IMPAR `);
    }
}

parImpar(numeroMaximo);
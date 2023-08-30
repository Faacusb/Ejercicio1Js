
// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

function esParOImpar(numero) {
    if (numero % 2 === 0) {
      return console.log("El numero: "+numero+" es par.");
    } else {
      return "El numero: "+numero+" es impar.";
    }
  }
esParOImpar(5);




// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

function compararNumeros(num1, num2){
    if(num1 > num2) {
        console.log(num1 + " es mayor que " +num2);
    }else if (num2>num1){
        console.log(num2 + " es mayor que "+ num1 );
    }else{
        console.log("Ambos numeros son iguales");
    }
    
}
compararNumeros(7,14);



// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function multiplo(numero){
    if(numero % 5 === 0){
        console.log(numero + " es multiplo de 5.");
    } else{
        console.log(numero+ " no es multiplo de 5.")
    }
}

multiplo(15);



// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

function imprimirNumeroHasta(numero){
    for (i =0; i<= numero; i++){
        console.log(i);
    }
}
imprimirNumeroHasta(11);

// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

function repetirPalabra(palabra, cantidad){
    for(i=0; i< cantidad; i++){
        console.log(palabra);
    }
}
repetirPalabra("hola mundo", 4);


// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.


let arr = [1,2,3,4,5,"pepe",7,8,9,10]

function imprimirArray(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }
  
  imprimirArray(arr);

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

let numbers =[1,2,3,4,5,6,7,8,9,10];

function todosMenosElQuinto(array){
    for(let i=0; i< array.length; i++){
        if (i ===5){
            continue
        }
        console.log(array[i])
    }
}
todosMenosElQuinto(numbers)

// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

let arrayNumber = [1,2,3,4,5,6,7,8,9,10];
let multiplicar = 10;

function multiplicarNumero(array,numero){
    for (let i=0; i<array.length; i++){
        console.log(array[i]*numero)
    }

}
multiplicarNumero(arrayNumber, multiplicar)
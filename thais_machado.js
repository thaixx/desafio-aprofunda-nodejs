/**
1️⃣ Imprimindo Números Pares
Descrição: Crie uma função que receba um número inteiro N e imprima todos os números pares de 0 até N. Entrada: imprimePares(10) Saída:

0
2
4
6
8
10
*/

function printEvenNumbers(num) {
    for (let i = 0; i <= num; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
printEvenNumbers(10);

/*
2️⃣ Soma dos Números de um Array
Descrição: Crie uma função que receba um array de números e retorne a soma de todos os elementos. Entrada: somaArray([1, 2, 3, 4, 5]) Saída: 15
*/

function sumArray(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}   
console.log(sumArray([1, 2, 3, 4, 5]));

/*
3️⃣ Identificar Número Primo
Descrição: Crie uma função que receba um número inteiro e retorne true se for primo e false caso contrário. Entrada: ePrimo(7), ePrimo(10) Saída: true, false
*/

function isPrimeNumber(num) { 
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; //se tem algum divisor, não é primo
    }
    return true;
}   
console.log(isPrimeNumber(7)); // true
console.log(isPrimeNumber(10)); // false

/*

4️⃣ FizzBuzz
Descrição: Crie uma função que imprima números de 1 a 50, substituindo múltiplos de 3 por "Fizz", múltiplos de 5 por "Buzz" e múltiplos de ambos por "FizzBuzz". Entrada: fizzBuzz() Saída:

1
2
Fizz
4
Buzz
Fizz
...
49
Buzz

*/

function fizzBuzz() {   
    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");

        } else if (i % 3 === 0) {
            console.log("Fizz");

        } else if (i % 5 === 0) {
            console.log("Buzz");

        } else {
            console.log(i);

        }
    }
}
fizzBuzz();        

/*
5️⃣ Contador de Vogais
Descrição: Crie uma função que receba uma string e retorne a quantidade de vogais nela. Entrada: contaVogais("Node.js é incrível") Saída: 6
*/

function countVowels(string) {
    let vowels =  new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let count = 0;
    const normalized = string.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Remove acentos
    for (let i = 0; i < normalized.length; i++) {
        if (vowels.has(normalized[i])) {
            count++;
        }
    }
    return count;
}   
console.log(countVowels("Node.js é incrível")); 

/*
6️⃣ Tabuada de um Número
Descrição: Crie uma função que receba um número e imprima a sua tabuada de 1 a 10. Entrada: tabuada(5) Saída:

5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50
*/

function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
console.log(multiplicationTable(15)); 

/*
7️⃣ Inverter String
Descrição: Crie uma função que receba uma string e retorne a mesma string invertida. Entrada: inverteString("hello") Saída: "olleh"
*/

function invertString(string) {
    let ans = "";
    for (let i = string.length - 1; i >= 0; i--) {
        ans += string[i];
    }
    return ans;
}   
console.log(invertString("hello")); // "olleh"


/*

8️⃣ Encontre o Maior Número
Descrição: Crie uma função que receba um array de números e retorne o maior número presente nele. Entrada: maiorNumero([3, 10, 6, 2]) Saída: 10
*/
function biggerNumber(arr) {
    let bigger = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > bigger) {
            bigger = arr[i];
        }
    }
    return bigger;
}
console.log(biggerNumber([3, 10, 6, 2])); // 10  

/*
9️⃣ Palíndromo
Descrição: Crie uma função que receba uma string e retorne true se ela for um palíndromo e false caso contrário. Entrada: ePalindromo("Ame a ema"), ePalindromo("Olá mundo") Saída: true, false
*/
function isPalindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase(); // Remove caracteres especiais e converte para minúsculas
    let strInvertida = str.split("").reverse().join("");
    return str === strInvertida;
}
console.log(isPalindrome("Ame a ema")); // true  


/*
🔟 Média de Notas
Descrição: Crie uma função que receba um array de notas e retorne se a média é "Aprovado" (≥7) ou "Reprovado" (<7). Entrada: calculaMedia([8, 7, 6]), calculaMedia([5, 6, 4]) Saída: "Aprovado - Média: 7.0", "Reprovado - Média: 5.0"
 
 */
function calculateAverage(grades) {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
        sum += grades[i];
    }
    let average = sum / grades.length;
    if (average >= 7) {
        return `Aprovado - Média: ${average.toFixed(1)}`;
    } else {
        return `Reprovado - Média: ${average.toFixed(1)}`;
    }
}
console.log(calculateAverage([8, 7, 6]));
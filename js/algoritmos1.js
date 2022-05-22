/* Dada la siguiente colección elementos [1,10,6,8,15,2]
1) Determinar cuál es el número mayor y en qué posición de la colección se encuentra.
a) Sin utilizar ninguna función.
b) Utilizando al menos una función/método. */

const numList = [1, 10, 6, 8, 15, 2];

// a)
let largestA = numList[0];
let positionA = 0;

for (let i = 0; i < numList.length; i++) {
  if (largestA < numList[i]) {
    largestA = numList[i];
    positionA = i;
  }
}

console.log(largestA, positionA);

// b)
const largestB = Math.max(...numList);
const positionB = numList.findIndex((n) => n === largestB);

console.log(largestB, positionB);

/* 2) Ordenar la lista.
a) Determinar cuales son pares y en qué posición se encuentran
b) Crear un nuevo arreglo con los números pares únicamente. */

// a)
numList.forEach((num) => {
  if (num % 2 === 0) {
    console.log(
      num,
      numList.findIndex((n) => n === num)
    );
  }
});

// b)
let pairNumbers = numList.filter((num) => {
  return num % 2 === 0;
});

console.log(pairNumbers);

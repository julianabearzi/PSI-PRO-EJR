const keys = [
  { key: 'key1', value: [1, 4, 5] },
  { key: 'key2', value: [4, 10, 3] },
  { key: 'key3', value: [8, 2, 6] },
];

/* a) Determinar cual es el número mayor y en que "Key" se encuentra.
b) Ordenar los elementos dentro de cada Key.
c) Ordenar las keys según el peso de sus elementos internos (por ejemplo para la "Key 1" el peso es
10 = 1+4+5)
d) Determinar cuales son pares y crear una nueva "Key" con los valores pares. */

const max = Math.max(...keys.map((r) => Math.max(...r.value)));

for (i = 0; i < keys.length; i++) {
  console.log(
    keys[i].value.sort((a, b) => {
      return a - b;
    })
  );
  for (j = 0; j < keys[i].value.length; j++) {
    if (keys[i].value[j] === max) {
      console.log(
        `The largest number is ${max} and it was found in ${keys[i].key}`
      );
    }
  }
}

for (i = 0; i < keys.length; i++) {
  keys.sort((a, b) => {
    if (
      a.value.reduce(
        (previousValue, currentValue) => previousValue + currentValue
      ) <
      b.value.reduce(
        (previousValue, currentValue) => previousValue + currentValue
      )
    ) {
      return 1;
    }
    if (
      a.value.reduce(
        (previousValue, currentValue) => previousValue + currentValue
      ) >
      b.value.reduce(
        (previousValue, currentValue) => previousValue + currentValue
      )
    ) {
      return -1;
    }
    return 0;
  });
  // }
}
console.log(keys);

const key4 = { key: 'key4', value: [] };
for (i = 0; i < keys.length; i++) {
  for (j = 0; j < keys[i].value.length; j++) {
    if (keys[i].value[j] % 2 === 0) {
      key4.value.push(keys[i].value[j]);
    }
  }
}
console.log(key4);

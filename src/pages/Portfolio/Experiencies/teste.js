/* eslint-disable no-undef */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
const data = require('./destinations.json');

const data2 = [];

for (i in data.destinos) {
  data2.push(...data.destinos[i].palavrasChave);
}

function removerDuplicados(array) {
  return array.filter((nome, index) => {
    return array.indexOf(nome) === index;
  });
}

console.log(removerDuplicados(data2));

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArrayBonus = array => array.sort((a, b) => a - b);

const sortedArrayBonus = sortArrayBonus(oddsAndEvens);
console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente !`);
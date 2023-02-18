let names15Q = [
  'Abcdef',
  'Bcdef',
  'Cdefhi',
  'Defgkl',
  'Efghno',
  'Fghiqr',
  'Ghiktu',
  'Hijkxw',
  'Ijklyz',
  'Jkliab',
];
for (let k = 0; k < names15Q.length; k++) {
  if (names15Q[k] == 'Defgkl') names15Q[k] = 'New Guest Name';
  console.log(names15Q[k]);
}

// print statement for one who does not make it
console.log('\r\n Mr & Mrs. Defgkl will not be able to make it.');

const chuvaDeMeteoros = [
  {nome: 'Alfa Centaurídeos',     declinacao: -59},
  {nome: 'Game Normídeos',        declinacao: -50},
  {nome: 'Pi Pupídeos',           declinacao: -45},
  {nome: 'Líridas',               declinacao:  34},
  {nome: 'Eta Aquáridas',         declinacao:  -1},
  {nome: 'Eta Líridas',           declinacao:  44},
  {nome: 'Bootídeos de Junho',    declinacao:  48},
  {nome: 'Alfa Capríconídeos',     declinacao: -10},
  {nome: 'Delta Aquários de Sul',  declinacao: -16},
  {nome: 'Piscis Austrinídeos',    declinacao: -30},
  {nome: 'Perseidas',              declinacao:  58},
];

const chuvaNoNorte = chuvaDeMeteoros.filter(
  (chuva) => chuva.declinacao >= 0
);

const chuvaDoSul = chuvaDeMeteoros.filter(
  (chuva) => chuva.declinacao < 0
);

const imprimirChuva = function(chuva) {
  console.log(chuva);
};

console.log("\nChuvas no hemisférios Norte:");
chuvaNoNorte.forEach(imprimirChuva);

console.log("\nChuvas no hemisférios Sul:");
chuvaDoSul.forEach(imprimirChuva);

function random(min = 0, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') {
      reject('Caí no erro');
      return;
    }
    setTimeout(() => {
      resolve(msg.toUpperCase() + ' - Passei na promise');
    }, tempo);
  });
}

// resolvendo sem async await

// esperaAi('Fase 1', random())
//   .then(valor => {
//     console.log(valor)
//     return esperaAi('Fase 2', random());
//     })
//     .then(fase => {
//       console.log(fase);
//       return esperaAi('Fase 3', random());
//     })
//     .then(fase => {
//       console.log(fase);
//     })
//     .catch(e => console.log(e));

async function executa() {
  try {
    const fase1 = await esperaAi('Fase 1', random());
    console.log(fase1);
    
    const fase2 = await esperaAi('Fase 2', random());
    console.log(fase2);
    
    const fase3 = await esperaAi('Fase 3', random());
    console.log(fase3);
    
    console.log('Terminamos na fase: ' + fase3);
  } catch(e) {
    console.log(e);
  }
}

executa();

// async permite que a palavra await seja utilizada dentro de uma função
// await só permite que o código continue quando houver um retorno (semelhante ao then)
// para usar catch, é necessário try catch no bloco todo da função
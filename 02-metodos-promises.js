function random(min, max) {
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

// Promise.all -> retorna todas as promises: checa todas, se tiver erro, não retorna nada
// Promise.race -> retorna a primeira promise: se a primeira promise vier antes do erro, retorna ela
// Promise.resolve -> cai no then
// Promise.reject -> cai no catch

const promises = [
  'Primeiro valor',
  esperaAi('Promise 1', 3000),
  esperaAi('Promise 2', 500),
  esperaAi('Promise 3', 1000),
  esperaAi('Promise 4', 1000),
  'Outro valor'
];

Promise.race(promises)
.then((valor) => {
  console.log(valor);
})
.catch((erro) => {
  console.log(erro);
});

function baixaPagina() {
  const emCache = false;

  if(emCache) {
    return Promise.reject('Página em cache');
  } else {
    return esperaAi('Baixei a página', 3000);
  }
}

baixaPagina()
  .then(dadosPagina => {
    console.log(dadosPagina);
  })
  .catch(e => console.log(e));
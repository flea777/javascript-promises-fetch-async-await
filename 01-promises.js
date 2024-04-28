function random(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') reject(false);
    
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

esperaAi('Conexão com db', random(1, 3))
  .then(resposta => {
    console.log(resposta);
    return esperaAi('Buscando dados no db', random(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
    return esperaAi('Tratando dados', random(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
  })
  .then(() => {
    console.log('Exibindo dados');
  })
  .catch(e => {
    console.log('ERRO', e);
  });

  console.log('Antes de promise');
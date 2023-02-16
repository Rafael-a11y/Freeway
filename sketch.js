//Cria a tela
function setup() {
  createCanvas(500, 400);
  somTrilhaSonora.loop();
}

function draw() {
  //Estampa a imagem de fundo na tela
  background(imagemDaEstrada);
  
  mostrarAtor();
  mostrarCarro();
  movimentarCarro();
  movimentarAtor();
  moverCarroParaPosicaoInicial();
  verificarColisao();
  incluirPontos();
  marcarPontos();
}



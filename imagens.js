//Variáveis das imagens
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
let imagensCarros;

//Variáveis de sons
let somTrilhaSonora;
let somPontuacao;
let somColisao;

//preload() precisa ser declarada exatamente com este nome, carrega as imagens da pasta imagens nas variáveis
 function preload()
{
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemCarro = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
  imagensCarros = [imagemCarro, imagemCarro2, imagemCarro3,
                    imagemCarro, imagemCarro2, imagemCarro3];
  
  somTrilhaSonora = loadSound("Efeitos sonoros/trilha.mp3");
  somPontuacao = loadSound("Efeitos sonoros/pontos.wav");
  somColisao = loadSound("Efeitos sonoros/colidiu.mp3");
}

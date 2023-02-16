//Variáveis do ator
let xAtor = 70;
let yAtor = 366;
let hit = false;
let meusPontos = 0;

function mostrarAtor()
{
  //1o parâmetro:variável da imagem
  //2o parâmetro:coordenada x
  //3o parâmetro:coordenada y
  //4o parâmetro:largura da figura
  //5o parâmetro:altura da figura
  
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

// UP_ARROW e DOWN_ARROW = 38 e 40, caso queira alterar as teclas de mmovimento para as setas.
function movimentarAtor()
{
  if(keyIsDown(87))
    {
      yAtor-= 3;
    }
  if(keyIsDown(83) && podeSeMover())
    {
      yAtor += 3;
    }
}

function verificarColisao()
{
  for(let i =0; i < imagensCarros.length; i++)
    {
      hit = collideRectCircle(xCarros[i], yCarros[i], larguraCarros, alturaCarros, xAtor, yAtor, 5);
      if(hit)
        {
          somColisao.play();
          voltarAtorParaPosicaoInicial();
          if(pontosMaiorQueZero())
            {
               meusPontos -= 1;
            }
        }
    }
}

function voltarAtorParaPosicaoInicial()
{
  yAtor = 366;
}

function incluirPontos()
{
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60));
  text(meusPontos, width / 5, 25);
}

function marcarPontos()
{
  if(yAtor < 5)
    {
      meusPontos ++;
      somPontuacao.play();
      voltarAtorParaPosicaoInicial();
    }
}

function podeSeMover()
{
  return yAtor < 366;
}

function pontosMaiorQueZero()
{
  return meusPontos > 0;
}
//Variáveis do carro
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 315];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let larguraCarros = 50;
let alturaCarros = 40;
//Carro

//Carro 2


//Carro 3

/*1º Parâmetro: imagem da figura do carro
  2º Parâmetro: Coordenada x do carro
  3º Parâmetro: Coordenada y do carro
  4º Parâmetro: Largura da figura do carro
  5º Parâmetro: Altura da figura do carro*/
function mostrarCarro()
{
  for(let i = 0; i < imagensCarros.length; i++)
    {
      image(imagensCarros[i], xCarros[i], yCarros[i], larguraCarros, alturaCarros);
    }
}
  

function movimentarCarro()
{
  for(let i = 0; i < imagensCarros.length; i++)
    {
      xCarros[i] -= velocidadeCarros[i];
    }
}

function moverCarroParaPosicaoInicial()
{
  for(let i = 0; i < imagensCarros.length; i++)
      {
          if(passouTodaATela(xCarros[i]))
          {
            xCarros[i] = 600;
          }
      }
}

function passouTodaATela(xCarro)
{
  return xCarro < -50;
}
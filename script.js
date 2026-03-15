const resultado = document.getElementById('resultado')

function clicarNumero(numero) {
 if (resultado.textContent === '0'){
    resultado.textContent = numero
 }
 else {
    resultado.textContent += numero
 }
}
function limpar()
{
    resultado.textContent = '0'
}
let numeroAnterior =''
let operadorAtual = ''

function clicarOperador(op) {
    numeroAnterior = resultado.textContent
    operadorAtual = op
    resultado.textContent = '0'
}
function calcular() {
  const num1 = parseFloat(numeroAnterior)
  const num2 = parseFloat(resultado.textContent)
  let conta = 0

  if (operadorAtual === '+') conta = num1 + num2
  if (operadorAtual === '-') conta = num1 - num2
  if (operadorAtual === '×') conta = num1 * num2
  if (operadorAtual === '÷') conta = num1 / num2

  resultado.textContent = conta
}
function calcularPorcentagem() {
  resultado.textContent = parseFloat(resultado.textContent) / 100
}
function inverterSinal() {
  resultado.textContent = parseFloat(resultado.textContent) * -1
}
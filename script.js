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
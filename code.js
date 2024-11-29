const form = document.getElementById('form');

const numberA = document.getElementById('number1');
const numberB = document.getElementById('number2');

numberA.value = 0;
numberB.value = 0;

function validar(valor) {
  const resultado = Number(valor) < Number(numberB.value);
  return resultado;
}



form.addEventListener('submit', function(e) {
  e.preventDefault();

  const resposta = `Correto! Número ${numberB.value} de B é maior que ${numberA.value} de A!`

  if(validar(numberA.value) === true) {
    document.querySelector('.error').style.display='block'
    document.querySelector('.error').style.background= "#00ad63"
    document.querySelector('.error').innerHTML= resposta
    document.querySelector('#number1').style.color=''
    document.querySelector('#number2').style.color=''
    document.querySelector('#number1').style.border=''
    document.querySelector('#number2').style.border=''
    
  } else {
    document.querySelector('.error').style.display="block"
    document.querySelector('.error').style.background='#ee2211'
    document.querySelector('.error').innerHTML='Erro! B está menor que A'
    document.querySelector('#number1').style.color='#ee2211'
    document.querySelector('#number2').style.color='#ee2211'
    document.querySelector('#number1').style.border='1px solid #ee2211'
    document.querySelector('#number2').style.border='1px solid #ee2211'
  }
})